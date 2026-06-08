import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Diagnostico from "./pages/Diagnostico";
import CoruJah from "./pages/CoruJah";
import Mentorias from "./pages/Mentorias";
import DonaDeSi from "./pages/DonaDeSi";
import VendaSemVender from "./pages/VendaSemVender";
import OrcamentoPepeMontte from "./pages/OrcamentoPepeMontte";
import BonusVSVPlanner from "./pages/BonusVSVPlanner";
import PranchaVisualVSV from "./pages/PranchaVisualVSV";

import Empresaria40 from "./pages/Empresaria40";
import IAHumanizada from "./pages/IAHumanizada";
import Palestras from "./pages/Palestras";
import Treinamentos from "./pages/Treinamentos";
import Livros from "./pages/Livros";
import Conteudos from "./pages/Conteudos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MetaPixelPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (window.fbq) window.fbq("track", "PageView");
    }
  }, [location.pathname, location.search]);

  return null;
};


const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MetaPixelPageView />
          <Routes>
            {/* Standalone landing page — sem Layout */}
            <Route path="/empresaria-40" element={<Empresaria40 />} />
            <Route path="/corujah" element={<CoruJah />} />
            <Route path="/venda-sem-vender" element={<VendaSemVender />} />
            <Route path="/orcamento-pepe-montte" element={<OrcamentoPepeMontte />} />
            <Route path="/bonus-vsv-plano-mensal-de-vendas" element={<BonusVSVPlanner />} />
            <Route path="/prancha-visual-vsv-premium" element={<PranchaVisualVSV />} />
            <Route path="/lapidando-diamantes" element={<Navigate to="/mentorias" replace />} />

            {/* Páginas com Header/Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/diagnostico" element={<Diagnostico />} />
              <Route path="/mentorias" element={<Mentorias />} />
              <Route path="/dona-de-si" element={<DonaDeSi />} />
              
              <Route path="/ia-humanizada" element={<IAHumanizada />} />
              <Route path="/palestras" element={<Palestras />} />
              <Route path="/treinamentos" element={<Treinamentos />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/conteudos" element={<Conteudos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
              <Route path="/termos-de-uso" element={<TermosDeUso />} />
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
