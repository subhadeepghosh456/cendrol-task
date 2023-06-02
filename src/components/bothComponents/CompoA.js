import { useState } from "react";
import CompB from "./CompoB";

const CompA = () => {
  const [cendol, setCendol] = useState(2);

 
  return (
    <div>
      <CompB cendol={cendol} setCendol={setCendol} />
    </div>
  );
};

export default CompA;