import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import FAQs from "./pages/FAQs.tsx";
import ForProviders from "./pages/ForProviders.tsx";
import Approach from "./pages/Approach.tsx";
import Resources from "./pages/Resources.tsx";
import Contact from "./pages/Contact.tsx";
import TeenageCounselling from "./pages/TeenageCounselling.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          
          <Route path="/for-providers" element={<ForProviders />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teenage-counselling-sydney" element={<TeenageCounselling />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
