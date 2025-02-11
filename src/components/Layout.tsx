import Navbar from "./Navbar";
import "../styles/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-background">
      <Navbar />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
