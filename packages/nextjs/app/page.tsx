import { DebugContracts } from "@/components/DebugContracts";
import { HomeHero } from "@/components/homeHero";
import { theme } from "@/config/theme";
import Head from "next/head";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{theme.appName}</title>
        <meta name="description" content={theme.appDescription} />
      </Head>
      <Layout>
        <HomeHero />
        <DebugContracts />
      </Layout>
    </>
  );
}
