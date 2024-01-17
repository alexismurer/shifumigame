import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface RulesModalProps {
  isOpen: boolean;
  closeModal: () => void;
  gameMode: string;
}

const RulesModal = ({ isOpen, closeModal, gameMode }: RulesModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="relative w-full max-w-lg rounded-2xl bg-white p-6">
                  <button
                    className="absolute top-2 right-2 z-10 p-2"
                    type="button"
                    onClick={closeModal}
                  >
                    <img
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="text-black text-xl font-semibold pb-3">
                      {gameMode}
                    </div>
                    {gameMode === "Rock-Paper-Scissors-Lizard-Spock" ? (
                      <>
                        <img
                          src={`images/diagram2.png`}
                          alt="computer choice"
                          width={300}
                          height={300}
                          className="pb-3"
                        />
                        <div className="rules">
                          <p>
                            Rock, Paper, Scissors, Lizard, Spock is a game of
                            chance that expands the traditional game of Rock,
                            Paper, Scissors
                          </p>
                          <p className="py-5">
                            It was made popular by the television show The Big
                            Bang Theory
                          </p>
                          <p className="pb-3 font-semibold">
                            The rules are as follows :
                          </p>
                          <p>Scissors cuts Paper</p>
                          <p>Paper covers Rock</p>
                          <p>Rock crushes Lizard</p>
                          <p>Lizard poisons Spock</p>
                          <p>Spock smashes Scissors</p>
                          <p>Scissors decapitates Lizard</p>
                          <p>Lizard eats Paper</p>
                          <p>Paper disproves Spock</p>
                          <p>Spock vaporizes Rock</p>
                          <p>(and as it always has) Rock crushes Scissors</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={`images/diagram1.png`}
                          alt="computer choice"
                          width={300}
                          height={300}
                          className="pb-3"
                        />
                        <div className="rules">
                          <p>
                            Rock-Paper-Scissors is a game played to settle
                            disputes between two people
                          </p>
                          <p className="py-5">
                            The game is played with three possible hand signals
                            that represent a rock, paper, and scissors
                          </p>
                          <p className="pb-3 font-semibold">
                            The rules are as follows :
                          </p>
                          <p>Scissors cuts Paper</p>
                          <p>Paper covers Rock</p>
                          <p>Rock crushes Scissors</p>
                        </div>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RulesModal;
