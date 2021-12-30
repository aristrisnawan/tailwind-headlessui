import React, { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchCompnent() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2">
        <div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
          <p>{enabled ? "On" : "Off"}</p>
        </div>
        <div>
          <Switch
            checked={active}
            onChange={setActive}
            className={`${
              active ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                active ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
          <p>
            {active ? (
              <img
                src="https://images.unsplash.com/photo-1640645295770-9b4adb646677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" h-44 mt-2 rounded"
              />
            ) : (
              "Klik untuk tampilkan gambar"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
