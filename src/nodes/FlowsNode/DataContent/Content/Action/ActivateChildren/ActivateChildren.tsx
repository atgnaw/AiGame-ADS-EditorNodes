import React from "react";
import { WithControlPropsType } from "@ant-design/pro-components";
import { SelectParseMode } from "./SelectParseMode";
import { SelectorPrompt } from "../../SelectorPrompt";

export function ActivateChildren(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  const style: React.CSSProperties = {
    height: "25px",
  };
  return (
    <>
      <SelectorPrompt name="childrenPrompt" mod="activateChildren" />
      <SelectParseMode />
    </>
  );
}
