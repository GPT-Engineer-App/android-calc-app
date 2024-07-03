import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Calculator Hub</h1>
      <p>Select a calculator to get started:</p>
      <div className="space-y-2">
        <Button onClick={() => navigate("/basic-calculator")}>Basic Calculator</Button>
        <Button onClick={() => navigate("/scientific-calculator")}>Scientific Calculator</Button>
        <Button onClick={() => navigate("/bmi-calculator")}>BMI Calculator</Button>
        <Button onClick={() => navigate("/currency-converter")}>Currency Converter</Button>
      </div>
    </div>
  );
};

export default Index;