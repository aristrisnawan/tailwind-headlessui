import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function ListboxHeadlessui() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div>
      <Listbox
        value={selectedPerson}
        onChange={setSelectedPerson}
        as="div"
        className=" bg-slate-400 rounded-md w-60 mt-2 shadow-lg"
      >
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className="hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
