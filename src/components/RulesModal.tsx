import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import HandIcon from "./HandIcon";
import RulesDiagram from "./RulesDiagram";
import { RulesModalProps } from "../types";
import { capitalize, rulesFor } from "../game/rules";

const RulesModal = ({ isOpen, closeModal, gameMode }: RulesModalProps) => {
  const extended = gameMode === "Rock-Paper-Scissors-Lizard-Spock";
  const choices = extended ? ["rock", "paper", "scissors", "lizard", "spock"] : ["rock", "paper", "scissors"];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-panel p-6 text-left shadow-2xl sm:p-8">
                <button
                  className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
                  type="button"
                  onClick={closeModal}
                  aria-label="Close rules"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>

                <Dialog.Title className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {extended ? "Lizard · Spock mode" : "Classic mode"}
                </Dialog.Title>
                <p className="mt-1 text-2xl font-bold tracking-tight">How to win</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {extended
                    ? "An expanded version of Rock, Paper, Scissors made popular by The Big Bang Theory. Each move beats two others and loses to two."
                    : "The classic way to settle a dispute between two people, played with three hand signals."}
                </p>

                <div className="my-6 flex justify-center">
                  <RulesDiagram choices={choices} />
                </div>

                <ul className={`grid gap-2 ${extended ? "sm:grid-cols-2" : ""}`}>
                  {rulesFor(choices).map(([w, verb, l]) => (
                    <li key={`${w}-${l}`} className="flex items-center gap-2 rounded-xl bg-panel2 px-3 py-2 text-sm">
                      <HandIcon choice={w} className="h-6 w-6 shrink-0" />
                      <span>
                        <span className="font-semibold">{capitalize(w)}</span> <span className="text-white/50">{verb}</span>{" "}
                        <span className="font-semibold">{capitalize(l)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RulesModal;
