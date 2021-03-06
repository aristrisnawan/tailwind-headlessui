import React from "react";
import { Tab } from "@headlessui/react";
import ModalComponent from "./ModalComponent";
import DisclosureComponent from "./DisclosureComponent";
import PopoverComponent from "./PopoverComponent";
import DropdownComponent from "./DropdownComponent";
import ListboxComponent from "./ListboxComponent";
import SwitchCompnent from "./SwitchCompnent";
import RadioComponent from "./RadioComponent";

export default function TabComponent() {
  return (
    <div className="px-48">
      <Tab.Group as="div" className="">
        <Tab.List className="w-ful text-black flex flex-row justify-between">
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Dropdown
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Listbox
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Switch
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Disclosure
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Modal
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Popover
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 w-28 rounded"
                : "bg-gradient-to-r from-violet-800 to-purple-500 py-2 w-28 text-white rounded"
            }
          >
            Radio Group
          </Tab>
        </Tab.List>
        <Tab.Panels className=" h-56">
          <Tab.Panel>
            <DropdownComponent />
          </Tab.Panel>
          <Tab.Panel>
            <ListboxComponent />
          </Tab.Panel>
          <Tab.Panel>
            <SwitchCompnent />
          </Tab.Panel>
          <Tab.Panel>
            <DisclosureComponent />
          </Tab.Panel>
          <Tab.Panel>
            <ModalComponent />
          </Tab.Panel>
          <Tab.Panel>
            <PopoverComponent />
          </Tab.Panel>
          <Tab.Panel>
            <RadioComponent />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
