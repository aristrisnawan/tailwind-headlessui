import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { VscChevronDown } from "react-icons/vsc";
import dataJson from "../datajson/popover.json";
import { data } from "autoprefixer";

export default function PopoverComponent() {
  const [data, setData] = useState(dataJson);

  useEffect(() => {});
  return (
    <div className="grid grid-cols-4 justify-center justify-items-center">
      {data.popover.map((items) => {
        return (
          <div className="mt-5" key={items.id}>
            <Popover className="relative">
              <Popover.Button className="bg-gradient-to-r from-pink-500 to-yellow-500  px-3 py-4 flex justify-between rounded text-white font-semibold w-60">
                <p>{items.club}</p>
                <span className="pt-1 pl-2">
                  <VscChevronDown />
                </span>
              </Popover.Button>

              <Popover.Panel className="absolute z-10 bg-gray-700 mt-2 rounded p-2 bg-gradient-to-r from-pink-500 to-yellow-300 w-96">
                <div className="grid grid-cols-2 text-white font-medium">
                  <a
                    href={items.url}
                    className="hover:underline cursor-pointer"
                  >
                    {items.pm1}
                  </a>
                  <a
                    href={items.url}
                    className="hover:underline cursor-pointer"
                  >
                    {items.pm2}
                  </a>
                  <a
                    href={items.url}
                    className="hover:underline cursor-pointer"
                  >
                    {items.pm3}
                  </a>
                  <a
                    href={items.url}
                    className="hover:underline cursor-pointer"
                  >
                    {items.pm4}
                  </a>
                  <a
                    href={items.url}
                    className="hover:underline cursor-pointer"
                  >
                    {items.pm5}
                  </a>
                  <a
                    href={items.url}
                    className="hover:underline cursor-pointer"
                  >
                    {items.pm6}
                  </a>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        );
      })}
    </div>
  );
}
