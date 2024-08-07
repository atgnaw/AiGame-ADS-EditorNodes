import React from "react";
import {
  ProFormSelect,
  ProFormText,
  WithControlPropsType,
} from "@ant-design/pro-components";

export function FlowsFinishData(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <>
      <ProFormText name="finishText" label="额外文本" width="lg" />
      <ProFormSelect
        name="jumpStoryId"
        label="父级跳转选择"
        initialValue={1}
        width="lg"
        options={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
        ]}
      />
    </>
  );
}
