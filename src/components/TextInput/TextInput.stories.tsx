import { TextInput, TextInputProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    placeholder: "type your e-mail address"
  },
  argTypes: {}
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};

export const Email: StoryObj<TextInputProps> = {
  args: {
    placeholder: "type your e-mail address",
    type: "email"
  }
};

export const Password: StoryObj<TextInputProps> = {
  args: {
    placeholder: "***********",
    type: "password"
  }
};
