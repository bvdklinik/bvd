import Header from "./Header";
import Footer from "./Footer";

/** The home page's shell: shared header, page content, shared footer. */
export default function PageShell({ children }) {
  return (
    <div>
      <div className="relative z-[1] bg-[#f9f9f9]">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}