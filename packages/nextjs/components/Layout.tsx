import { NavBar } from "@/components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-base-300 to-base-200">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};
