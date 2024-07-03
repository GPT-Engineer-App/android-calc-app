import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calculator, Activity, DollarSign } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import BasicCalculator from "./pages/BasicCalculator.jsx";
import ScientificCalculator from "./pages/ScientificCalculator.jsx";
import BMICalculator from "./pages/BMICalculator.jsx";
import CurrencyConverter from "./pages/CurrencyConverter.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "想定賃貸額計算機",
    to: "/basic-calculator",
    icon: <Calculator className="h-4 w-4" />,
  },
  {
    title: "Scientific Calculator",
    to: "/scientific-calculator",
    icon: <Calculator className="h-4 w-4" />,
  },
  {
    title: "BMI Calculator",
    to: "/bmi-calculator",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    title: "Currency Converter",
    to: "/currency-converter",
    icon: <DollarSign className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="basic-calculator" element={<BasicCalculator />} />
              <Route path="scientific-calculator" element={<ScientificCalculator />} />
              <Route path="bmi-calculator" element={<BMICalculator />} />
              <Route path="currency-converter" element={<CurrencyConverter />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;