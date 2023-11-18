import RowReviews from "@/components/Reviews/RowReviews";

export default async function RootLayout({ children }) {
  return (
    <main>
      {children}
      <RowReviews />
    </main>
  );
}
