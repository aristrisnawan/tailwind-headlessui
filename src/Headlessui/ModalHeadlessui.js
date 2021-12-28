import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalHeadlessui() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="fixed">
        Modal open
      </button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          as="div"
          className=""
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />

          <div className="bg-white rounded z-10 shadow-lg absolute">
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            {/* <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p> */}

            <button onClick={() => setIsOpen(false)} className=" bg-orange-700">
              Close
            </button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
