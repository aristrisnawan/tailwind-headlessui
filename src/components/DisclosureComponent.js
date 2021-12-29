import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import dataJson from "../datajson/disclosure.json";

export default function DisclosureComponent() {
  const [data, setData] = useState(dataJson);

  useEffect(() => {});
  return (
    <div className="grid grid-cols-3">
      {data.data.map((items) => {
        return (
          <div className="mt-5" key={items.id}>
            <Disclosure as="div" className=" bg-blue-200 w-80 p-2 rounded-t">
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 w-full px-2 flex justify-between bg-gray-100 rounded">
                    <p> {items.title1} </p>
                    <span>{open ? <VscChevronUp /> : <VscChevronDown />}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className=" text-gray-800 px-2 mt-1">
                    {items.description1}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure
              as="div"
              className=" bg-blue-200 w-80 px-2 pb-2 rounded-b"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 w-full px-2 flex justify-between bg-gray-100 rounded">
                    <p> {items.title2} </p>
                    <span>{open ? <VscChevronUp /> : <VscChevronDown />}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className=" text-gray-800 px-2 mt-1">
                    {items.description2}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        );
      })}
    </div>
  );
}
