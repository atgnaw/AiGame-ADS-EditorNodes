import React, { useState } from "react";
import {
  WithControlPropsType,
  ProFormSwitch,
  ProFormDependency,
  ProFormText,
  ProFormDigit,
  ProFormTextArea,
  ProCard,
  ProFormList,
  ProFormGroup,
} from "@ant-design/pro-components";
import { Col, Row } from "antd";
import { SelectorPrompt } from "./SelectorPrompt";

export function ObjectContent(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <ProFormList
      name="targeObjectList"
      copyIconProps={false}
      creatorButtonProps={{
        creatorButtonText: "添加对象",
      }}
      min={1}
      itemRender={({ listDom, action }, { index }) => (
        <ProCard
          bordered
          collapsible
          hoverable
          style={{ marginBlockEnd: 8 }}
          title={`操作对象${index + 1}`}
          extra={action}
          size="small"
          bodyStyle={{ paddingBlockEnd: 0 }}
        >
          {listDom}
        </ProCard>
      )}
      initialValue={[
        {
          targetObjtectId: "",
        },
      ]}
    >
      <ProFormGroup>
        <ProFormText name="targetObjtectId" label="对象ID" width="xs" />
        <ProFormDigit
          name="waitingTime"
          initialValue={10}
          label="停顿时间"
          width="xs"
        />
        <ProFormSwitch
          label="生成"
          initialValue={true}
          name="isOverwriteSpeak"
        />
        <ProFormSwitch
          label="另存"
          initialValue={false}
          name="isObjtectTextSave"
        />
      </ProFormGroup>
      <ProFormDependency name={["isObjtectTextSave"]}>
        {({ isObjtectTextSave }) => {
          if (isObjtectTextSave === true) {
            return (
              <ProFormGroup>
                <ProFormText
                  name="saveTextObjtectId"
                  label="另存对象ID"
                  width="xs"
                />

                <ProFormText
                  name="saveTextAttributeName"
                  label="属性名"
                  width="xs"
                />
              </ProFormGroup>
            );
          }
        }}
      </ProFormDependency>
      <ProFormDependency name={["isOverwriteSpeak"]}>
        {({ isOverwriteSpeak }) => {
          if (isOverwriteSpeak === true) {
            return <SelectorPrompt name="objectPrompt" mod="generate" />;
          }
          return (
            <ProFormTextArea
              colProps={{ span: 24 }}
              name="objecText"
              label="输出文本"
            />
          );
        }}
      </ProFormDependency>
    </ProFormList>
  );
}
