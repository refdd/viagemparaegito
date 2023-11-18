import dynamic from "next/dynamic";
const FaqSection = dynamic(() => import("@/components/faq/FaqSection"));
const RowReviews = dynamic(() => import("@/components/Reviews/RowReviews"));
export default function RootLayout({ children }) {
  return (
    <main>
      {children}
      <RowReviews />
      <FaqSection />
    </main>
  );
}
