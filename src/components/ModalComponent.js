import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import dataJson from "../datajson/datamodal.json";

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(dataJson);
  const [detail, setDetail] = useState([]);

  useEffect(() => {});

  useEffect(() => {
    const findDetail = dataJson.biodata.find((item) => item.id === item.id);
    setDetail(findDetail);
  }, []);

  const hasil = detail.bio;
  console.log(hasil);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-4 space-x-2">
        {data.biodata.map((item) => {
          return (
            <button
              onClick={() => setIsOpen(true)}
              key={item.id}
              className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-900 hover:to-blue-500 px-4 py-3 rounded text-white"
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        className="flex flex-row justify-center justify-items-center"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <div className=" bg-gradient-to-r from-pink-500 to-yellow-500 rounded z-10 shadow-lg text-white p-10">
          <Dialog.Title>{detail.name}</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-gradient-to-r border-2 border-white from-yellow-500 to-transparent px-2 py-1 rounded hover:bg-yellow-500"
          >
            Close
          </button>
        </div>
      </Dialog>
    </div>
  );
}
