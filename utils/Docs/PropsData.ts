export const AvatarProps = [
  {
    key: "1",
    name: "size",
    type: `number | "lg" | "md" | "sm" `,
    required: "false",
    default: "80",
  },
  {
    key: "2",
    name: "raduis",
    type: `number | "full" | "lg" | "md" | "sm"`,
    required: "true",
    default: `md`,
  },
  {
    key: "3",
    name: "borderSize",
    type: `number | "lg" | "md" | "sm"`,
    required: "false",
    default: `sm`,
  },
  {
    key: "4",
    name: "text",
    type: "String",
    required: "false",
    default: `true`,
  },
  {
    key: "4",
    name: "textStyle",
    type: "StyleProp<{color, fontSize, fontWeight}>",
    required: "false",
    default: `{}`,
  },
  {
    key: "4",
    name: "source",
    type: "String",
    required: "false",
    default: ``,
  },
];

export const ButtonProps = [
  {
    key: "1",
    name: "title",
    type: "String",
    required: "false",
    default: "` `",
  },
  {
    key: "2",
    name: "titleStyle",
    type: "TextStyle | object",
    required: "false",
    default: "{}",
  },
  {
    key: "3",
    name: "buttonStyle",
    type: "ViewStyle | object",
    required: "false",
    default: "{}",
  },
  {
    key: "4",
    name: "buttonColor",
    type: "string",
    required: "false",
    default: "#2089dc",
  },
  {
    key: "5",
    name: "radius",
    type: "number",
    required: "false",
    default: "0",
  },
  {
    key: "6",
    name: "btnType",
    type: "solid or outlined | string ",
    required: "false",
    default: "solid",
  },
  {
    key: "7",
    name: "disabledStyle",
    type: "ViewStyle | object",
    required: "false",
    default: "{}",
  },
  {
    key: "8",
    name: "isDisabled",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    key: "9",
    name: "isLoading",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    key: "10",
    name: "iconRight",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    key: "11",
    name: "Icon",
    type: "ReactElement | Icon Element",
    required: "false",
    default: "",
  },
  {
    key: "12",
    name: "iconPosition",
    type: "left, right, top, bottom | string",
    required: "false",
    default: "right",
  },
];

export const DividerProps = [
  {
    key: "1",
    name: "size",
    type: `number`,
    required: "false",
    default: "10",
  },
  {
    key: "2",
    name: "width",
    type: `number | "full"`,
    required: "false",
    default: `80`,
  },
  {
    key: "3",
    name: "orientation",
    type: `"Vertical" | "Horizontal"`,
    required: "false",
    default: `Horizontal`,
  },
  {
    key: "4",
    name: "text",
    type: "String",
    required: "false",
    default: `true`,
  },
  {
    key: "4",
    name: "VeriticalHeight",
    type: `number | "full"`,
    required: "false",
    default: `50`,
  },
  {
    key: "4",
    name: "color",
    type: "ColorValue",
    required: "false",
    default: `#000000`,
  },
];

export const SeletorProps = [
  {
    key: "1",
    name: "title",
    type: "String",
    required: "false",
    default: "` `",
  },
  {
    key: "2",
    name: "Listdata",
    type: "{ name: string; value: string }[] | array of objects",
    required: "false",
    default: "[empty array]",
  },
  {
    key: "3",
    name: "containerStyle",
    type: "ViewStyle | object",
    required: "false",
    default: `{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "red",
          width: 200,
        }`,
  },
  {
    key: "2",
    name: "dropdownTextStyle",
    type: "TextStyle | object",
    required: "false",
    default: "#2089dc",
  },
  {
    key: "4",
    name: "iconStyle",
    type: "object",
    required: "false",
    default: `{
          size: 30,
          color: "#000000",
        }`,
  },
  {
    key: "5",
    name: "btnType",
    type: "solid or outlined | string ",
    required: "false",
    default: "solid",
  },
  {
    key: "6",
    name: "onSelect",
    type: " function",
    required: "false",
    default: "()=>{}",
  },
];

export const InputProps = [
  {
    key: "1",
    name: "label",
    type: "String",
    required: "false",
    default: "` `",
  },
  {
    key: "2",
    name: "labelTextStyle",
    type: "StyleProp<TextStyle>",
    required: "false",
    default: `{
        fontSize: 10,
        color: "#000000",
      }`,
  },
  {
    key: "3",
    name: "TextInputStyle",
    type: "ViewStyle | object",
    required: "false",
    default: `{
        backgroundColor: "white",
        height: 50,
        width: "100%",
        }`,
  },
  {
    key: "4",
    name: "InputborderStyle",
    type: " {borderWidth: number;borderColor: string;borderRadius: number} | object",
    required: "false",
    default: `{
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
      }`,
  },
  {
    key: "5",
    name: "placeholder",
    type: "string",
    required: "false",
    default: "type here",
  },
  {
    key: "6",
    name: "placeholderTextColor",
    type: "string",
    required: "false",
    default: `#A9A9AC`,
  },
  {
    key: "7",
    name: "Icon",
    type: "ReactElement",
    required: "false",
    default: "",
  },
  {
    key: "8",
    name: "onChangeText",
    type: "function | (text: string) => void",
    required: "false",
    default: "()=>{}",
  },
  {
    key: "9",
    name: "secureTextEntry",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    key: "10",
    name: "keyboardType",
    type: `"default"
      | "email-address"
      | "numeric"
      | "phone-pad"
      | "ascii-capable"
      | "numbers-and-punctuation"
      | "url"
      | "number-pad"
      | "name-phone-pad"
      | "decimal-pad"
      | "twitter"
      | "web-search"
      | "visible-password"`,
    required: "false",
    default: "default",
  },
];

export const CardProps = [
  {
    key: "1",
    name: "children",
    type: "any",
    required: "false",
    default: "",
  },
  {
    key: "2",
    name: "containerStyle",
    type: "StyleProp<ViewStyle>",
    required: "false",
    default: `{
        backgroundColor: "white",
        borderWidth: 1,
        padding: 15,
        margin: 15,
        borderColor: "grey",
      }`,
  },
  {
    key: "3",
    name: "wrapperStyle",
    type: "StyleProp<ViewStyle>",
    required: "false",
    default: ``,
  },
];

export const ModalProps = [
  {
    key: "1",
    name: "children",
    type: "React.ReactNode",
    required: "true",
    default: "",
  },
  {
    key: "2",
    name: "isVisible",
    type: "boolean",
    required: "true",
    default: `true`,
  },
  {
    key: "3",
    name: "onClose",
    type: "() => void",
    required: "false",
    default: `() => {}`,
  },
  {
    key: "4",
    name: "CloseOnBackdropPress",
    type: "StyleProp<ViewStyle>",
    required: "false",
    default: `true`,
  },
];
