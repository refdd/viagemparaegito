import "./globals.css";
import { Jost } from "next/font/google";
import { getData } from "../../utils/featchApi";
import ListNav from "@/components/nav/ListNav";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Favinofksj from "../../public/assets/images/1.svg";
const Analytics = dynamic(() => import("@/components/Analytics/Analytics"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const jost = Jost({
  subsets: ["latin-ext"],
  variable: "--Jost",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  title: "Next.js",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      url: "https://s3.eu-central-1.amazonaws.com/other.projects.storage/multitenacy/settings/2023-10-02-11-17-03-0651aa6afce0c2.webp",
    },
  ],
};
export default async function RootLayout({ children }) {
  const menus = await getData("/menus?tenant_id=18&language_id=11");
  const Logo = await getData("/settings/logo?tenant_id=18&language_id=11");
  const favicon = await getData(
    "/settings/favicon?tenant_id=18&language_id=11"
  );
  const footer = await getData(
    "/footer?tenant_id=18&language_id=11&status=active"
  );
  const socials = await getData(
    "/socials?tenant_id=18&language_id=11&status=active"
  );
  const gtmId = await getData("/settings/gtm?tenant_id=18&language_id=11");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${jost.variable} font-Jost `}>
        <ListNav
          dataManu={menus?.rows}
          logo={Logo.row?.image?.image_url}
          homePage
        />
        {children}
        <Suspense fallback={<>...</>}>
          <Footer
            LogoFooter={Logo.row?.image?.image_url}
            footer={footer?.rows}
            socials={socials?.rows}
          />
          <Analytics gtmId={gtmId.row?.title} />
        </Suspense>
      </body>
    </html>
  );
}
