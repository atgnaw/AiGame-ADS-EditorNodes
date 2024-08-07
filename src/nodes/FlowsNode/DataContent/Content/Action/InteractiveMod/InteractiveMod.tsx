import React from "react";
import {
  ProFormDependency,
  ProFormGroup,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  WithControlPropsType,
} from "@ant-design/pro-components";
import { PlayerTipsData } from "./PlayerTipsData";
import { SelectorPrompt } from "../../SelectorPrompt";
import { Col, Divider, Row } from "antd";
import { SelectNext } from "../../SelectNext";

export function InteractiveMod(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <>
      <ProFormGroup>
        <ProFormSelect
          name="interactiveMod"
          label="玩家交互模式"
          width="xs"
          initialValue={"自由输入"}
          options={[
            { label: "自由输入", value: "自由输入" },
            { label: "选项", value: "选项" },
            { label: "点击", value: "点击" },
            { label: "无", value: "无" },
          ]}
        />
        <ProFormDependency name={["interactiveMod"]}>
          {({ interactiveMod }) => {
            if (interactiveMod == "自由输入") {
              return (
                <ProFormSwitch
                  colProps={{
                    span: 4,
                  }}
                  name="playerReply"
                  initialValue={false}
                  label="开启提示"
                />
              );
            }
            return;
          }}
        </ProFormDependency>
      </ProFormGroup>
      <ProFormDependency name={["playerReply", "interactiveMod"]}>
        {({ playerReply, interactiveMod }) => {
          console.log(interactiveMod);
          return (
            <>
              {playerReply === true && <PlayerTipsData />}
              {interactiveMod === "自由输入" && (
                <SelectorPrompt name="selectorPrompt" mod="selection" />
              )}
              {interactiveMod === "选项" && (
                <ProFormList
                  name="optionsList"
                  copyIconProps={false}
                  creatorButtonProps={{
                    creatorButtonText: "添加选项",
                  }}
                  initialValue={[""]}
                  min={1}
                >
                  <ProFormGroup>
                    <Row gutter={8}>
                      <Col span={8}>
                        <ProFormText
                          name="optionsDescription"
                          label="选项描述"
                        />
                      </Col>
                      <Col span={16}>
                        <SelectNext />
                      </Col>
                    </Row>
                  </ProFormGroup>
                </ProFormList>
              )}
              {(interactiveMod === "点击" || interactiveMod === "无") && (
                <SelectNext />
              )}
            </>
          );
        }}
      </ProFormDependency>
    </>
  );
}
