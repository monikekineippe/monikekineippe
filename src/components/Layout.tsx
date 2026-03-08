import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
