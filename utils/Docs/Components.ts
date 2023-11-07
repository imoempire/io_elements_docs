import { ButtonProps, CardProps, ModalProps, SeletorProps } from "./PropsData";

export const Components = [
  {
    id: 1,
    name: "Button",
    description:
      "Button component allows user to perform an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation",
    Props: ButtonProps,
    usageLink: "https://snack.expo.dev/@imoempire/io-elements-button",
  },
  {
    id: 2,
    name: "Card",
    description:
      "Cards serve as an excellent method for presenting information, typically encompassing content and actions related to a singular topic. Within cards, you can incorporate images, buttons, text, and other elements. Primarily, cards find their usage in conveying information effectively.",
    Props: CardProps,
    usageLink: "https://snack.expo.dev/@imoempire/io-elements-card",
  },
  {
    id: 3,
    name: "Modal",
    description:
      " Temporary, focused container that appears on top of the main screen. It's used for displaying content or capturing user input without navigating to a new page, enhancing user interaction and maintaining context. Modals often include text, images, forms, and buttons for interactive experiences.",
    Props: ModalProps,
    usageLink: "https://snack.expo.dev/@imoempire/2f797f",
  },
  {
    id: 4,
    name: "Selector",
    description:
      "DropdownSelector allows user to select from options displayed in adropdown",
    Props: SeletorProps,
    usageLink: "https://snack.expo.dev/@imoempire/io-elements-selector",
  },
];
