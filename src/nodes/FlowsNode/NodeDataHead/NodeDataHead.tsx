import React from "react";
import {
  ProCard,
  ProFormDigit,
  ProFormGroup,
  ProFormText,
  ProFormTextArea,
  WithControlPropsType,
} from "@ant-design/pro-components";

export function NodeDataHead(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <ProCard title="基础信息" bordered headerBordered collapsible={false}>
      <ProFormGroup>
        <ProFormText name="nodeDataName" label="名字" width="xs" />
        <ProFormDigit
          name="nodeDataWeight"
          initialValue={0}
          label="权重值"
          width="xs"
        />
      </ProFormGroup>
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="nodeDataDescription"
        label="描述"
      />
    </ProCard>
  );
}
