import { Outlet } from "react-router-dom";

import { ThemeProvider } from "@/context/Theme";

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="relative flex flex-col min-h-screen antialiased font-Inter">
        <div className="bg-background flex-1 flex justify-center">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
