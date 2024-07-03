import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BMICalculator = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">BMI Calculator</h1>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <p>Placeholder for BMI Calculator functionality.</p>
    </div>
  );
};

export default BMICalculator;