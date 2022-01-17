import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = (args) => <Button {...args} />;
Primary.args = { variation: "primary", children: "Button" };

export const Secondary = (args) => <Button {...args} />;
Secondary.args = { variation: "secondary", children: "Button" };

export const Success = (args) => <Button {...args} />;
Success.args = { variation: "success", children: "Button" };

/* 
/* export const Primary = new Template.bind({});
Primary.args = {
  variation: "primary",
  children: "Button",
};
export const Secondary = new Template.bind({});
Primary.args = {
  variation: "secondary",
  children: "Button",
};
export const Success = new Template.bind({});
Primary.args = {
  variation: "success",
  children: "Button",
};
 */
