import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { VscCheck } from "react-icons/vsc";
import dataJson from "../datajson/radio.json";

export default function RadioComponent() {
  const [data, setData] = useState(dataJson);
  const [plan, setPlan] = useState();

  useEffect(() => {});

  return (
    <div className="mt-5 flex flex-row">
      {data.radio.map((items) => {
        return (
          <div className="grid grid-cols-3" key={items.id}>
            <RadioGroup
              value={plan}
              onChange={setPlan}
              as="div"
              className=" bg-blue-500 rounded p-2 w-80 cursor-pointer"
            >
              {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
              <RadioGroup.Option value={items.title1}>
                {({ checked }) => (
                  <div
                    className={`${
                      checked
                        ? ` bg-blue-400 text-white outline outline-1 outline-white`
                        : `bg-white text-black`
                    } flex flex-row justify-between  rounded p-2 font-semibold`}
                  >
                    <span>{items.title1}</span>
                    {checked ? (
                      <span className="p-1 rounded-full bg-sky-400 outline outline-1 outline-white">
                        <VscCheck />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={items.title2} className="mt-2">
                {({ checked }) => (
                  <div
                    className={`${
                      checked
                        ? ` bg-blue-400 text-white outline outline-1 outline-white`
                        : `bg-white text-black`
                    } flex flex-row justify-between  rounded p-2 font-semibold`}
                  >
                    <span>{items.title2}</span>
                    {checked ? (
                      <span className="p-1 rounded-full bg-sky-400 outline outline-1 outline-white">
                        <VscCheck />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={items.title3} className="mt-2">
                {({ checked }) => (
                  <div
                    className={`${
                      checked
                        ? ` bg-blue-400 text-white outline outline-1 outline-white`
                        : `bg-white text-black`
                    } flex flex-row justify-between  rounded p-2 font-semibold`}
                  >
                    <span>{items.title3}</span>
                    {checked ? (
                      <span className="p-1 rounded-full bg-sky-400 outline outline-1 outline-white">
                        <VscCheck />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            </RadioGroup>
          </div>
        );
      })}
    </div>
  );
}
