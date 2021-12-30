import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { VscChevronDown } from "react-icons/vsc";
export default function ListboxComponent() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [selectBuah, setBuah] = useState(buah[0]);
  return (
    <div className="mt-5">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className=" bg-slate-800 p-2 rounded flex flex-row justify-between text-white w-60">
          <p>{selectedPerson.name}</p>
          <span className="pt-1">
            <VscChevronDown />
          </span>
        </Listbox.Button>
        <Listbox.Options className="bg-gray-900 rounded p-2 mt-2 w-60 text-white">
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className="p-2 hover:bg-gray-200 rounded hover:text-black hover:cursor-pointer"
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: false },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const buah = [
  { id: 1, name: "Apple", unavailable: false },
  { id: 2, name: "Anggur", unavailable: false },
  { id: 3, name: "Melon", unavailable: false },
  { id: 4, name: "Semangka", unavailable: false },
  { id: 5, name: "Durian", unavailable: false },
];
