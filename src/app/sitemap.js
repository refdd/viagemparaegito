import { getData } from "../../utils/featchApi";
const baseUrl = "https://www.vacanzainegitto.com";
async function sitemap() {
  const pages = await getData("/pages?tenant_id=18&language_id=11");
  const allPackage = await getData("/packages/?tenant_id=18&language_id=11");
  const cruises = await getData("/cruises?tenant_id=18&language_id=11");
  const articles = await getData(
    `/articles?tenant_id=18&language_id=11&status=active&paginate=1000`
  );
  const wikis = await getData(
    `/wikis?tenant_id=18&language_id=11&status=active&paginate=1000`
  );
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    ...pages?.rows.map((slug) => ({
      url: `${baseUrl}/${slug?.slug}`,
      lastModified: slug?.modified,
      priority: +slug?.priority,
    })),
    ...allPackage?.rows.map((slug) => ({
      url: `${baseUrl}/${slug?.destination?.slug}/${slug?.slug}`,
      lastModified: slug?.modified,
      priority: +slug?.priority,
    })),
    ...articles.rows?.map((slug) => ({
      url: `${baseUrl}/blog/${slug?.slug}`,
      lastModified: slug?.modified,
      priority: +slug?.priority,
    })),
    ...cruises.rows?.map((slug) => ({
      url: `${baseUrl}/crociere-sul-nilo-egitto/${slug?.slug}`,
      lastModified: slug?.modified,
      priority: +slug?.priority,
    })),
    ...wikis.rows?.map((slug) => ({
      url: `${baseUrl}/consigli-di-viaggio/${slug?.slug}`,
      lastModified: slug?.modified,
      priority: +slug?.priority,
    })),
  ];
}

export default sitemap;
