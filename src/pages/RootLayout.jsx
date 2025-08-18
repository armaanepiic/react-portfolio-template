import { Outlet } from "react-router";
import Header from "../components/Header";
import ThemeProvider from "../providers/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Fixed Header - stays on top */}
        <Header className="fixed top-0 left-0 right-0 z-50" />

        {/* Content positioned behind header */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
