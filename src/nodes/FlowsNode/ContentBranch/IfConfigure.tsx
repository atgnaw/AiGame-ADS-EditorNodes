import React from "react";
import {
  WithControlPropsType,
  ProFormText,
  ProFormList,
  ProFormSelect,
  ProFormDigit,
} from "@ant-design/pro-components";
import { Col, Row } from "antd";

export function IfConfigure(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <ProFormList
      name="ifConfigureList"
      deleteIconProps={{
        tooltipText: "删除",
      }}
      copyIconProps={false}
      initialValue={[
        {
          cbGameObjectId: "",
        },
      ]}
    >
      <Row justify="start" gutter={16}>
        <Col span={6}>
          <ProFormText name="cbObjectId" label="对象ID" width="xs" />
        </Col>
        <Col span={6}>
          <ProFormText name="cbAttributeName" label="属性名" width="xs" />
        </Col>
        <Col span={6}>
          <ProFormSelect
            name="condition"
            label="比较符号"
            width="xs"
            options={[
              { label: "==", value: "==" },
              { label: "!=", value: "!=" },
              { label: ">", value: ">" },
              { label: "<", value: "<" },
              { label: ">=", value: ">=" },
              { label: "<=", value: "<=" },
            ]}
          />
        </Col>
        <Col span={6}>
          <ProFormDigit name="conditionValue" label="数值" width="xs" />
        </Col>
      </Row>
    </ProFormList>
  );
}
