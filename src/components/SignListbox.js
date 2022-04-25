import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function SignListbox({ signs, label, sign, setSign }) {
  return (
    <div className="flex items-center">
      <Listbox value={sign} onChange={setSign}>
        <Listbox.Label className="text-lg text-zinc-300 mr-4">
          {label}
        </Listbox.Label>
        <div className="relative">
          <Listbox.Button className="relative w-40 h-12 py-2 pl-3 pr-10 text-lg text-left border border-zinc-700 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
            <span className="block truncate">{sign}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-zinc-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-lg bg-zinc-800 border border-zinc-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {signs.map((sign) => (
                <Listbox.Option
                  key={sign}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "bg-zinc-700 text-zinc-300" : "text-zinc-400"
                    }`
                  }
                  value={sign}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "text-zinc-300 font-medium"
                            : "text-zinc-400 font-normal"
                        }`}
                      >
                        {sign}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-300">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default SignListbox;
