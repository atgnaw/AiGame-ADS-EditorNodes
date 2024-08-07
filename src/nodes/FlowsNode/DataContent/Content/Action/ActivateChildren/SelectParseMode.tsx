import React from "react";
import {
  WithControlPropsType,
  ProFormSelect,
  ProFormDependency,
} from "@ant-design/pro-components";
import { SelectorPrompt } from "../../SelectorPrompt";
import { RelatedChildrenFinish } from "./RelatedChildrenFinish";

export function SelectParseMode(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <>
      <ProFormSelect
        name="parseMode"
        label="子级解读方式"
        initialValue={"AI解读"}
        width="xs"
        options={[
          { label: "AI解读", value: "AI解读" },
          { label: "直接关联", value: "直接关联" },
        ]}
      />
      <ProFormDependency name={["parseMode"]}>
        {({ parseMode }) => {
          if (parseMode === "AI解读") {
            return <SelectorPrompt name="selectorPrompt" mod="selection" />;
          } else if (parseMode === "直接关联") {
            return <RelatedChildrenFinish />;
          }
          return null;
        }}
      </ProFormDependency>
    </>
  );
}
