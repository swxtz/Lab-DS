import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ispom."
  }
} as Meta<TextProps>;

export const Default: StoryObj = {};

export const Small: StoryObj = {
  args: {
    size: "sm"
  }
};

export const Large: StoryObj = {
  args: {
    size: "lg"
  }
};
