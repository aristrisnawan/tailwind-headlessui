import React from "react";
import { Menu } from "@headlessui/react";
import { VscEdit, VscTrash } from "react-icons/vsc";

export default function DropdownComponent() {
  return (
    <div className="mt-5 grid grid-cols-2">
      <div>
        <Menu>
          <Menu.Button className=" bg-gray-300 px-3 py-2 rounded text-slate-600 hover:outline hover:outline-2 hover:outline-slate-800 active:outline active:outline-2 active:outline-slate-800">
            Options
          </Menu.Button>
          <Menu.Items className="flex flex-col bg-gray-400 w-64 mt-2 p-2 rounded text-white font-medium">
            <div className="flex flex-row hover:bg-gray-300 hover:rounded">
              <span className="p-3">
                <VscEdit />
              </span>
              <Menu.Item>
                <a className="p-3 w-full" href="/account-settings">
                  Edit
                </a>
              </Menu.Item>
            </div>
            <div className="flex flex-row hover:bg-gray-300 hover:rounded">
              <span className="p-3 ">
                <VscEdit />
              </span>
              <Menu.Item>
                <a className="p-3 rounded  w-full" href="/account-settings">
                  Edit
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
      <div>
        <Menu>
          <Menu.Button className=" bg-gray-300 px-3 py-2 rounded text-slate-600 hover:outline hover:outline-2 hover:outline-slate-800 active:outline active:outline-2 active:outline-slate-800">
            More
          </Menu.Button>
          <Menu.Items className="flex flex-col bg-gray-400 w-64 mt-2 p-2 rounded text-white font-medium">
            <div className="flex flex-row hover:bg-gray-300 hover:rounded">
              <span className="p-3">
                <VscEdit />
              </span>
              <Menu.Item>
                <a className="p-3 w-full" href="/account-settings">
                  Edit
                </a>
              </Menu.Item>
            </div>
            <div className="flex flex-row hover:bg-gray-300 hover:rounded">
              <span className="p-3 ">
                <VscTrash />
              </span>
              <Menu.Item>
                <a className="p-3 rounded  w-full" href="/account-settings">
                  Delete
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
