import React from "react";

import Card from "./Card";

export const Primary = (args) => <Card {...args} />;
Primary.args = {};

export default {
  title: "Components/Card",
  component: Card,
};
