import React, { useState } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";

export default function CobaHeadlessui() {
  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button className="bg-gray-900 py-1 px-2 rounded-md text-white ml-3 mt-3">
          More
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute bg-white shadow-lg flex flex-col mt-2 ml-2 rounded-md px-3">
            <Menu.Item className="hover:bg-stone-900 hover:text-white py-3">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Edit Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="hover:bg-stone-900 hover:text-white py-3">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Logout
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75 py-3">
                Invite a friend (coming soon!)
              </span>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
