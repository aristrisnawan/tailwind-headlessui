import React from "react";
import { Tab } from "@headlessui/react";

export default function TabHeadlessui() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className=" w-96 flex justify-between">
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-blue-600 text-white p-4 rounded"
                : "bg-white text-black p-4 rounded"
            }
          >
            1
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-blue-600 text-white p-4 rounded"
                : "bg-white text-black p-4 rounded"
            }
          >
            2
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-blue-600 text-white p-4 rounded"
                : "bg-white text-black p-4 rounded"
            }
          >
            3
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
