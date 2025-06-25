import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "./index";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select", options: ["text", "email", "password"] },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    type: "email",
    label: "이메일",
    placeholder: "이메일을 입력하세요",
  },
};
