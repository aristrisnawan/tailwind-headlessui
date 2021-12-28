import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function RadioHeadlessui() {
  const [plan, setPlan] = useState("startup");
  return (
    <div>
      <RadioGroup value={plan} onChange={setPlan}>
        <RadioGroup.Label>Plan</RadioGroup.Label>
        <RadioGroup.Option
          value="startup"
          className=" w-28 p-4 bg-gray-500 mt-2 mb-2 rounded"
        >
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Startup</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="business"
          className="w-28 p-4 bg-gray-500 mt-2 mb-2 rounded"
        >
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Business</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="enterprise"
          className="w-28 p-4 bg-gray-500 mt-2 mb-2 rounded"
        >
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
}
