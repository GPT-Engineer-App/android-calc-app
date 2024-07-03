import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BasicCalculator = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">想定賃貸額計算機</h1>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <p>Placeholder for Basic Calculator functionality.</p>
    </div>
  );
};

export default BasicCalculator;