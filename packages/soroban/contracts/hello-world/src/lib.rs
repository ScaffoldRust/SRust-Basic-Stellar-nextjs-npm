#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracttype, symbol_short, Address, Env, String, Symbol, Vec,
};

/// # Adaptable Smart Contract Example
///
/// This contract serves as a template that demonstrates secure and adaptable
/// patterns for building Soroban smart contracts. It implements a flexible
/// registry system that can be used for various applications including:
///
/// - Asset management
/// - Organizational structures
/// - Access control systems
/// - Multi-party agreements
///
/// ## Security Features
/// - Proper authentication using require_auth()
/// - Input validation
/// - Role-based access control
/// - Event logging for auditability
///
/// ## Adaptability Features
/// - Modular design with separate data types and logic
/// - Extensible storage pattern
/// - Configurable parameters

/// Data storage keys for the contract
#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    /// Contract admin address
    Admin,
    /// Next entity ID counter
    NextEntityId,
    /// Mapping from entity ID to Entity
    Entity(u32),
    /// List of entity IDs for lookup
    EntityList,
    /// Mapping of addresses to their roles
    Role(Address),
    /// Registry of attributes for entities
    Attribute(u32, Symbol),
    /// Configuration parameters
    Config(Symbol),
}

/// Represents the roles an address can have in the system
#[contracttype]
#[derive(Clone, PartialEq)]
pub enum Role {
    /// Full administrative access
    Admin,
    /// Can manage entities but not change system settings
    Manager,
    /// Can view but not modify entities
    Viewer,
    /// No access to the system
    None,
}

/// A generic entity in the registry
#[contracttype]
#[derive(Clone)]
pub struct Entity {
    /// Unique identifier
    pub id: u32,
    /// Name of the entity
    pub name: String,
    /// Owner address
    pub owner: Address,
    /// Created timestamp
    pub created_at: u64,
    /// Last updated timestamp
    pub updated_at: u64,
    /// Active status
    pub active: bool,
}

/// Transaction record for audit purposes
#[contracttype]
#[derive(Clone)]
pub struct Transaction {
    /// Entity involved
    pub entity_id: u32,
    /// Action performed
    pub action: Symbol,
    /// Address that performed the action
    pub performed_by: Address,
    /// Timestamp of the action
    pub timestamp: u64,
}

#[contract]
pub struct AdaptableContract;

/// Helper functions outside of the main contract implementation
fn require_role(env: &Env, address: &Address, required_role: &Role) {
    let role = env
        .storage()
        .instance()
        .get(&DataKey::Role(address.clone()))
        .unwrap_or(Role::None);

    match (required_role, &role) {
        (Role::Admin, Role::Admin) => (),
        (Role::Manager, Role::Admin) | (Role::Manager, Role::Manager) => (),
        (Role::Viewer, Role::Admin)
        | (Role::Viewer, Role::Manager)
        | (Role::Viewer, Role::Viewer) => (),
        _ => panic!("Insufficient permissions"),
    }
}

fn get_role(env: &Env, address: &Address) -> Role {
    env.storage()
        .instance()
        .get(&DataKey::Role(address.clone()))
        .unwrap_or(Role::None)
}

fn record_transaction(env: &Env, entity_id: u32, action: &Symbol, performed_by: &Address) {
    // Create transaction record in event
    env.events().publish(
        (Symbol::new(env, "transaction"), action.clone()),
        (entity_id, performed_by.clone(), env.ledger().timestamp()),
    );
}

#[contractimpl]
impl AdaptableContract {
    /// Initialize the contract with an admin
    ///
    /// # Arguments
    /// * `admin` - The address that will have administrative access
    pub fn initialize(env: Env, admin: Address) {
        // Require authorization from the admin
        admin.require_auth();

        // Verify contract is not already initialized
        if env.storage().instance().has(&DataKey::Admin) {
            panic!("Contract already initialized");
        }

        // Set the admin
        env.storage().instance().set(&DataKey::Admin, &admin);

        // Initialize entity ID counter
        env.storage().instance().set(&DataKey::NextEntityId, &1u32);

        // Create empty entity list
        env.storage()
            .instance()
            .set(&DataKey::EntityList, &Vec::<u32>::new(&env));

        // Set admin role for the admin address
        env.storage()
            .instance()
            .set(&DataKey::Role(admin.clone()), &Role::Admin);

        // Log initialization
        env.events().publish(
            (Symbol::new(&env, "contract"), symbol_short!("init")),
            admin,
        );
    }

    /// Set configuration value
    ///
    /// # Arguments
    /// * `caller` - Address making the call
    /// * `key` - Configuration key
    /// * `value` - Configuration value
    pub fn set_config(env: Env, caller: Address, key: Symbol, value: String) {
        caller.require_auth();

        // Verify caller is admin
        self::require_role(&env, &caller, &Role::Admin);

        // Set configuration value
        env.storage()
            .instance()
            .set(&DataKey::Config(key.clone()), &value);

        // Log configuration change
        env.events()
            .publish((Symbol::new(&env, "config"), key), value);
    }

    /// Get configuration value
    ///
    /// # Arguments
    /// * `key` - Configuration key
    ///
    /// # Returns
    /// * Configuration value
    pub fn get_config(env: Env, key: Symbol) -> String {
        env.storage()
            .instance()
            .get(&DataKey::Config(key))
            .unwrap_or_else(|| String::from_str(&env, ""))
    }

    /// Assign a role to an address
    ///
    /// # Arguments
    /// * `caller` - Address making the call
    /// * `address` - Address to assign the role to
    /// * `role` - Role to assign
    pub fn set_role(env: Env, caller: Address, address: Address, role: Role) {
        caller.require_auth();

        // Verify caller is admin
        self::require_role(&env, &caller, &Role::Admin);

        // Set role
        env.storage()
            .instance()
            .set(&DataKey::Role(address.clone()), &role);

        // Log role assignment
        env.events().publish(
            (Symbol::new(&env, "role"), symbol_short!("set")),
            (address, role),
        );
    }

    /// Get role of an address
    ///
    /// # Arguments
    /// * `address` - Address to get role for
    ///
    /// # Returns
    /// * Role of the address
    pub fn get_role(env: Env, address: Address) -> Role {
        env.storage()
            .instance()
            .get(&DataKey::Role(address))
            .unwrap_or(Role::None)
    }

    /// Create a new entity
    ///
    /// # Arguments
    /// * `caller` - Address making the call
    /// * `name` - Name of the entity
    /// * `owner` - Owner of the entity
    ///
    /// # Returns
    /// * ID of the created entity
    pub fn create_entity(env: Env, caller: Address, name: String, owner: Address) -> u32 {
        caller.require_auth();

        // Verify caller is admin or manager
        let caller_role = self::get_role(&env, &caller);
        if caller_role != Role::Admin && caller_role != Role::Manager {
            panic!("Caller must be admin or manager");
        }

        // Get and increment entity ID counter
        let entity_id = env
            .storage()
            .instance()
            .get(&DataKey::NextEntityId)
            .unwrap_or(1u32);
        env.storage()
            .instance()
            .set(&DataKey::NextEntityId, &(entity_id + 1));

        // Create entity
        let timestamp = env.ledger().timestamp();
        let entity = Entity {
            id: entity_id,
            name,
            owner,
            created_at: timestamp,
            updated_at: timestamp,
            active: true,
        };

        // Store entity
        env.storage()
            .instance()
            .set(&DataKey::Entity(entity_id), &entity);

        // Add to entity list
        let mut entity_list: Vec<u32> = env
            .storage()
            .instance()
            .get(&DataKey::EntityList)
            .unwrap_or_else(|| Vec::new(&env));
        entity_list.push_back(entity_id);
        env.storage()
            .instance()
            .set(&DataKey::EntityList, &entity_list);

        // Log entity creation
        self::record_transaction(&env, entity_id, &symbol_short!("create"), &caller);

        entity_id
    }

    /// Update an entity
    ///
    /// # Arguments
    /// * `caller` - Address making the call
    /// * `entity_id` - ID of the entity to update
    /// * `name` - New name of the entity
    /// * `active` - New active status
    pub fn update_entity(env: Env, caller: Address, entity_id: u32, name: String, active: bool) {
        caller.require_auth();

        // Get entity
        let mut entity: Entity = env
            .storage()
            .instance()
            .get(&DataKey::Entity(entity_id))
            .unwrap_or_else(|| panic!("Entity not found"));

        // Verify caller is admin, manager, or owner
        let caller_role = self::get_role(&env, &caller);
        if caller_role != Role::Admin && caller_role != Role::Manager && entity.owner != caller {
            panic!("Caller must be admin, manager, or owner");
        }

        // Update entity
        entity.name = name;
        entity.active = active;
        entity.updated_at = env.ledger().timestamp();

        // Store updated entity
        env.storage()
            .instance()
            .set(&DataKey::Entity(entity_id), &entity);

        // Log entity update
        self::record_transaction(&env, entity_id, &symbol_short!("update"), &caller);
    }

    /// Get an entity
    ///
    /// # Arguments
    /// * `entity_id` - ID of the entity to get
    ///
    /// # Returns
    /// * Entity data
    pub fn get_entity(env: Env, entity_id: u32) -> Entity {
        env.storage()
            .instance()
            .get(&DataKey::Entity(entity_id))
            .unwrap_or_else(|| panic!("Entity not found"))
    }

    /// List all entities
    ///
    /// # Returns
    /// * List of entity IDs
    pub fn list_entities(env: Env) -> Vec<u32> {
        env.storage()
            .instance()
            .get(&DataKey::EntityList)
            .unwrap_or_else(|| Vec::new(&env))
    }

    /// Set attribute for an entity
    ///
    /// # Arguments
    /// * `caller` - Address making the call
    /// * `entity_id` - ID of the entity
    /// * `key` - Attribute key
    /// * `value` - Attribute value
    pub fn set_attribute(env: Env, caller: Address, entity_id: u32, key: Symbol, value: String) {
        caller.require_auth();

        // Verify entity exists
        let entity: Entity = env
            .storage()
            .instance()
            .get(&DataKey::Entity(entity_id))
            .unwrap_or_else(|| panic!("Entity not found"));

        // Verify caller is admin, manager, or owner
        let caller_role = self::get_role(&env, &caller);
        if caller_role != Role::Admin && caller_role != Role::Manager && entity.owner != caller {
            panic!("Caller must be admin, manager, or owner");
        }

        // Set attribute
        env.storage()
            .instance()
            .set(&DataKey::Attribute(entity_id, key.clone()), &value);

        // Log attribute change
        env.events().publish(
            (Symbol::new(&env, "attribute"), symbol_short!("set")),
            (entity_id, key, value),
        );

        // Record transaction
        self::record_transaction(&env, entity_id, &symbol_short!("attr"), &caller);
    }

    /// Get attribute for an entity
    ///
    /// # Arguments
    /// * `entity_id` - ID of the entity
    /// * `key` - Attribute key
    ///
    /// # Returns
    /// * Attribute value
    pub fn get_attribute(env: Env, entity_id: u32, key: Symbol) -> String {
        // Verify entity exists
        let _: Entity = env
            .storage()
            .instance()
            .get(&DataKey::Entity(entity_id))
            .unwrap_or_else(|| panic!("Entity not found"));

        env.storage()
            .instance()
            .get(&DataKey::Attribute(entity_id, key))
            .unwrap_or_else(|| String::from_str(&env, ""))
    }

    /// Transfer ownership of an entity
    ///
    /// # Arguments
    /// * `caller` - Address making the call
    /// * `entity_id` - ID of the entity
    /// * `new_owner` - New owner address
    pub fn transfer_ownership(env: Env, caller: Address, entity_id: u32, new_owner: Address) {
        caller.require_auth();

        // Get entity
        let mut entity: Entity = env
            .storage()
            .instance()
            .get(&DataKey::Entity(entity_id))
            .unwrap_or_else(|| panic!("Entity not found"));

        // Verify caller is admin or current owner
        let caller_role = self::get_role(&env, &caller);
        if caller_role != Role::Admin && entity.owner != caller {
            panic!("Caller must be admin or current owner");
        }

        // Update owner
        entity.owner = new_owner.clone();
        entity.updated_at = env.ledger().timestamp();

        // Store updated entity
        env.storage()
            .instance()
            .set(&DataKey::Entity(entity_id), &entity);

        // Log ownership transfer
        env.events().publish(
            (Symbol::new(&env, "ownership"), symbol_short!("transfer")),
            (entity_id, new_owner),
        );

        // Record transaction
        self::record_transaction(&env, entity_id, &symbol_short!("transfer"), &caller);
    }
}

// Tests for the contract
#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::{symbol_short, testutils::Address as _};

    #[test]
    #[test]
    fn test_initialize() {
        let env = Env::default();
        let contract_id = env.register_contract(None, AdaptableContract);
        let client = AdaptableContractClient::new(&env, &contract_id);

        let admin = Address::generate(&env);

        // Authorize admin for initialization
        env.mock_all_auths();

        // Initialize contract
        client.initialize(&admin);

        // Verify admin role
        let role = client.get_role(&admin);
        assert!(matches!(role, Role::Admin));
    }
    #[test]
    #[test]
    fn test_entity_lifecycle() {
        let env = Env::default();
        let contract_id = env.register_contract(None, AdaptableContract);
        let client = AdaptableContractClient::new(&env, &contract_id);

        let admin = Address::generate(&env);
        let user = Address::generate(&env);

        // Authorize all operations
        env.mock_all_auths();

        // Initialize contract
        client.initialize(&admin);

        // Set user as manager
        client.set_role(&admin, &user, &Role::Manager);
        let role = client.get_role(&user);
        assert!(matches!(role, Role::Manager));

        // Create entity
        let entity_name = String::from_str(&env, "Test Entity");
        let entity_id = client.create_entity(&user, &entity_name, &user);
        assert_eq!(entity_id, 1);

        // Get entity
        let entity = client.get_entity(&entity_id);
        assert_eq!(entity.name, entity_name);
        assert_eq!(entity.owner, user);
        assert_eq!(entity.active, true);

        // Update entity
        let new_name = String::from_str(&env, "Updated Entity");
        client.update_entity(&user, &entity_id, &new_name, &true);

        // Verify update
        let updated_entity = client.get_entity(&entity_id);
        assert_eq!(updated_entity.name, new_name);

        // Set attribute
        let attr_key = symbol_short!("color");
        let attr_value = String::from_str(&env, "blue");
        client.set_attribute(&user, &entity_id, &attr_key, &attr_value);

        // Get attribute
        let retrieved_value = client.get_attribute(&entity_id, &attr_key);
        assert_eq!(retrieved_value, attr_value);

        // Transfer ownership
        let new_owner = Address::generate(&env);
        client.transfer_ownership(&user, &entity_id, &new_owner);

        // Verify ownership transfer
        let transferred_entity = client.get_entity(&entity_id);
        assert_eq!(transferred_entity.owner, new_owner);
    }
}
