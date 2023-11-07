import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ComponentsList() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const guideList = [
    {
      id: 1,
      label: "Getting Started",
    },
    {
      id: 1,
      label: "Installation",
    },
  ];

  const componentsList = [
    {
      id: 1,
      label: "Button",
    },
    {
      id: 1,
      label: "Avatar",
    },
    {
      id: 1,
      label: "Card",
    },
  ];

  return (
    <Accordion variant="splitted">
      <AccordionItem key={1} aria-label="Guide" title="Guide">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key={2} aria-label="Guide" title="Guide">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
