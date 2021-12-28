import React from "react";
import { Disclosure, Transition } from "@headlessui/react";

export default function DisclousureHeadless() {
  return (
    <div>
      <Disclosure as="div" className="w-96">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open
                  ? "py-2 bg-neutral-500 w-full flex flex-row"
                  : " bg-orange-50 w-full flex flex-row"
              }`}
            >
              Is team pricing available?{" "}
              {open ? (
                <div className="ml-3 transition"> ⬆️ </div>
              ) : (
                <div className="ml-3 transition">⬇️</div>
              )}
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-white bg-red-600 w-96">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="w-96">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open
                  ? "py-2 bg-neutral-500 w-full flex flex-row"
                  : " bg-orange-50 w-full flex flex-row"
              }`}
            >
              Is team pricing available?{" "}
              {open ? (
                <div className="ml-3 transition"> ⬆️ </div>
              ) : (
                <div className="ml-3 transition">⬇️</div>
              )}
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-white bg-red-600 w-96">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
