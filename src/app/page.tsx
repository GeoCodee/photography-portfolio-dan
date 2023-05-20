"use client";

import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";

const tabs = [
  { key: "all", display: "All" },
  { key: "portrait", display: "Portrait" },
  { key: "Nature", display: "Nature" },
];

export default function Home() {
  return (
    <div className=" h-full bg-gradient-to-br from-black to-emerald-950">
      <header className="flex justify-between items-center h-[90px] px-6">
        {/* <div className="text-transparent">hm</div> */}
        <div className="">Photography Portfolio</div>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
        >
          {/* <button className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"> */}
          Get in touch
          {/* </button> */}
        </Link>
      </header>

      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-gradient-to-br from-cyan-200 to-emerald-950 max-w-[900px] w-full p-2 sm:p-4">
              <Tab.Panel className="flex justify-center">All</Tab.Panel>
              <Tab.Panel>Portraits</Tab.Panel>
              <Tab.Panel>Nature</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <div className="fixed bottom-0 right-0 mb-4 mr-4 h-20 w-20 sm:h-10 sm:w-10 md:h-40 md:w-40 lg:h-64 lg:w-64">
        <img
          src="/images/photography-bg.jpg"
          alt="Image"
          className="h-full w-full rounded-full object-cover"
        ></img>
        <div className="absolute inset-0 bg-emerald-900 opacity-50 rounded-full"></div>
      </div>

      {/* <div className="h-[90px] absolute bottom-0 inset-x-0">
        <div className="flex justify-center items-center h-[60px]">
          <p>Placeholder for footer</p>
        </div>
      </div> */}

      <footer className="h-[60px] flex justify-center items-center">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  );
}
