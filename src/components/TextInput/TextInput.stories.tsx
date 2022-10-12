import { TextInput, TextInputProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    children: "Lorem ispom.",
    size: "md"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      }
    }
  }
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};

