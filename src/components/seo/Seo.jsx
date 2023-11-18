import Head from "next/head";

const Seo = ({ pageTitle, pageDescription }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || GoTrip - Travel & Tour React NextJS Template}`}
      </title>
      <meta name="description" content={pageDescription} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
