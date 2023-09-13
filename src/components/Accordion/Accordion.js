import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import * as React from "react";
const Accordion = ({ className, label, children }) => {
  const accordionClassNames = classNames(className);
  return (
    <Disclosure>
      <Disclosure.Button className={accordionClassNames}>
        {label}
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 w-full">{children}</Disclosure.Panel>
    </Disclosure>
  );
};

export default Accordion;
