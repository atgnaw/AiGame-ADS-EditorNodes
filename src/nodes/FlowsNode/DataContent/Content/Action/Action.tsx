import React from "react";
import {
  WithControlPropsType,
  ProFormDependency,
  ProFormRadio,
} from "@ant-design/pro-components";
import { InteractiveMod } from "./InteractiveMod/InteractiveMod";
import { ActivateChildren } from "./ActivateChildren/ActivateChildren";
import { FlowsFinishData } from "./FlowsFinishData";

export function Action(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <>
      <ProFormRadio.Group
        radioType="button"
        name="actionSelectorButton"
        initialValue={"交互模式"}
        options={[
          {
            label: "交互模式",
            value: "交互模式",
          },
          {
            label: "激活子级",
            value: "激活子级",
          },
          {
            label: "在此结束",
            value: "在此结束",
          },
        ]}
        fieldProps={{ buttonStyle: "solid" }}
      />
      <ProFormDependency name={["actionSelectorButton"]}>
        {({ actionSelectorButton }) => {
          if (actionSelectorButton === "交互模式") {
            return <InteractiveMod />;
          } else if (actionSelectorButton === "激活子级") {
            return <ActivateChildren />;
          } else if (actionSelectorButton === "在此结束") {
            return <FlowsFinishData />;
          }
        }}
      </ProFormDependency>
    </>
  );
}
