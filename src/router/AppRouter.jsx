import { BrowserRouter, Route, Routes } from "react-router";

import About from "../pages/About";
import NotFound from "../pages/NotFound";
import RootLayout from "../pages/RootLayout";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="hero" element={<Hero />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
  );
}
