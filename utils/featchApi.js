export const baseUrl = "https://api.dubaidaytrips.com/v1";

export async function getData(url) {
  const res = await fetch(`${baseUrl}${url}`, { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getItem(url) {
  const res = await fetch(`${baseUrl}${url}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const pageview = (url) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  } else {
    console.log({
      event: "pageview",
      page: url,
    });
  }
};
