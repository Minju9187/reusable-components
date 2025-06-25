import type { Meta, StoryObj } from "@storybook/react-vite";

import Select from "./index";
import { useState, type ChangeEvent } from "react";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.value);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(e.target.value);
      args.onChange(e);
    };

    return <Select {...args} value={selectedValue} onChange={handleChange} />;
  },
  args: {
    id: "user-select-object",
    label: "Select",
    value: "",
    placeholder: "사용자를 선택하세요",
    options: [
      { label: "강민주", value: "강민주" },
      { label: "김성진", value: "김성진" },
      { label: "이호민", value: "이호민" },
    ],
    onChange: () => {},
    classNames: {
      wrapper: "flex flex-col gap-2 p-4 bg-green-50 rounded-lg",
      label: "font-bold",
      select:
        "w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-500",
    },
  },
};
