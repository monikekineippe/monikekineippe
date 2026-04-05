import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Diagnostico from "./pages/Diagnostico";
import CoruJah from "./pages/CoruJah";
import Mentorias from "./pages/Mentorias";
import DonaDeSi from "./pages/DonaDeSi";

import Empresaria40 from "./pages/Empresaria40";
import IAHumanizada from "./pages/IAHumanizada";
import Palestras from "./pages/Palestras";
import Livros from "./pages/Livros";
import Conteudos from "./pages/Conteudos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Standalone landing page — sem Layout */}
            <Route path="/empresaria-40" element={<Empresaria40 />} />
            <Route path="/corujah" element={<CoruJah />} />
            <Route path="/lapidando-diamantes" element={<Navigate to="/mentorias" replace />} />

            {/* Páginas com Header/Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/diagnostico" element={<Diagnostico />} />
              <Route path="/mentorias" element={<Mentorias />} />
              <Route path="/dona-de-si" element={<DonaDeSi />} />
              
              <Route path="/ia-humanizada" element={<IAHumanizada />} />
              <Route path="/palestras" element={<Palestras />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/conteudos" element={<Conteudos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
