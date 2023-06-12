import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: typeof ReactNode,
  backgroundIndex?: number;
}

function Layout({ children, backgroundIndex }: LayoutProps) {
  return (
    <div className={`Layout page-bg-${backgroundIndex || 4}`}>
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;