import React, { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchHeadlessui() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-500"
        } relative inline-flex items-center h-6 rounded-full w-11 mt-5 transition`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full transition`}
        />
      </Switch>
    </div>
  );
}
