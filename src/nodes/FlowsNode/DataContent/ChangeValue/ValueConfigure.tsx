import React from "react";
import {
  WithControlPropsType,
  ProFormText,
  ProFormList,
  ProFormDigit,
  ProFormSelect,
} from "@ant-design/pro-components";
import { Col, Row } from "antd";

export function ValueConfigure(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <ProFormList
      name="valueConfigureList"
      copyIconProps={false}
      deleteIconProps={{
        tooltipText: "删除",
      }}
      initialValue={[
        {
          gameObjectId: "",
        },
      ]}
    >
      <Row justify="start" gutter={16}>
        <Col span={6}>
          <ProFormText name="cvObjectId" label="对象ID" width="xs" />
        </Col>
        <Col span={6}>
          <ProFormText name="cvAttributeName" label="属性名" width="xs" />
        </Col>
        <Col span={6}>
          <ProFormSelect
            name="mathSymbol"
            label="操作符号"
            width="xs"
            options={[
              { label: "赋值", value: "=" },
              { label: "加", value: "+" },
              { label: "减", value: "-" },
              { label: "乘", value: "x" },
              { label: "除", value: "/" },
            ]}
          />
        </Col>
        <Col span={6}>
          <ProFormDigit name="mathValue" label="数值" width="xs" />
        </Col>
      </Row>
    </ProFormList>
  );
}
