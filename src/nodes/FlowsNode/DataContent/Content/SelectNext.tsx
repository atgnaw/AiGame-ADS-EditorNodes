import React from "react";
import {
  WithControlPropsType,
  ProFormSelect,
} from "@ant-design/pro-components";

export function SelectNext(
  props: WithControlPropsType<{
    name?: string;
    mod?: string;
    // other props...
  }>
) {
  const { name = "selectNext" } = props;
  return (
    <ProFormSelect
      name={name}
      label="下一个链接"
      initialValue={""}
      width="lg"
      options={[
        { label: "表达高兴", value: "表达高兴" },
        { label: "表达难过", value: "表达难过" },
        { label: "以上都不是", value: "以上都不是" },
      ]}
    />
  );
}
