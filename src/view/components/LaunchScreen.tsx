import { Transition } from "@headlessui/react";

import { Logo } from "./Logo";
import { Loader } from "./Loader";

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      appear
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-600"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 z-20 grid h-full w-full place-items-center bg-moss-green">
        <div className="flex flex-col items-center gap-4">
          <Logo className="h-10 w-auto text-white" />
          <Loader />
        </div>
      </div>
    </Transition>
  );
}
