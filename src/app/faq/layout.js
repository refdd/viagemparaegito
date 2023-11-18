import dynamic from "next/dynamic";
const RowReviews = dynamic(() => import("@/components/Reviews/RowReviews"));
export default function RootLayout({ children }) {
  return (
    <main>
      {children}
      <RowReviews />
    </main>
  );
}
