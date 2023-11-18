"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { pageview } from "../../../utils/featchApi";

export default function Analytics({ gtmId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isloding, setIsloding] = useState(false);

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);
  useEffect(() => {
    if (pathname) {
      setTimeout(() => {
        setIsloding(true);
      }, 5000);
    }
  }, [pathname]);
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {isloding && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${gtmId}');
  `,
          }}
        />
      )}
    </>
  );
}
