import { DebugContracts } from "@/components/DebugContracts";
import { FeaturesSection } from "@/components/featuresSection";
import { HomeHero } from "@/components/homeHero";
import { NavBar } from "@/components/navbar";
import { theme } from "@/config/theme";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>{theme.appName}</title>
        <meta name="description" content={theme.appDescription} />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-base-300 to-base-200">
        <NavBar />
        <main className="flex-grow">
          <HomeHero />
          <DebugContracts />
          <FeaturesSection />
        </main>
        <footer className="py-8 px-4 bg-neutral text-neutral-content">
          <div className="container mx-auto text-center">
            <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-bold mb-4">{theme.appName}</h3>
                <p className="text-sm text-start opacity-75 max-w-xs">
                  Building the decentralized future, one block at a time.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-primary">Docs</a></li>
                  <li><a href="#" className="hover:text-primary">Github</a></li>
                  <li><a href="#" className="hover:text-primary">Community</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-primary">Twitter</a>
                  <a href="#" className="hover:text-primary">Discord</a>
                  <a href="#" className="hover:text-primary">Telegram</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p>{theme.footerText.replace("{year}", new Date().getFullYear().toString())}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
