import React, { useState } from "react";
import {
  WithControlPropsType,
  ProCard,
  ProFormSwitch,
  ProFormDependency,
} from "@ant-design/pro-components";
import { ValueConfigure } from "./ValueConfigure";
import { CustomScript } from "./CustomScript";

export function ChangeValue(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <ProCard
      title="数值影响"
      bordered
      hoverable
      headerBordered
      direction="column"
      type="inner"
      style={{ marginBlockStart: 8 }}
      collapsed={collapsed}
      extra={
        <ProFormSwitch
          name="changeValueEnable"
          noStyle
          checkedChildren={"启用"}
          unCheckedChildren={"禁用"}
          fieldProps={{
            onChange: (checked: boolean) => {
              setCollapsed(!checked);
            },
          }}
        />
      }
    >
      <ProFormDependency name={["changeValueEnable"]}>
        {({ changeValueEnable }) => {
          if (changeValueEnable !== true) {
            return;
          }
          return (
            <>
              <ProFormSwitch
                name="cvSwitchCustomScript"
                checkedChildren="脚本"
                unCheckedChildren="配置"
              />
              <ProFormDependency name={["cvSwitchCustomScript"]}>
                {({ cvSwitchCustomScript }) => {
                  if (cvSwitchCustomScript !== true) {
                    return <ValueConfigure />;
                  }
                  return <CustomScript />;
                }}
              </ProFormDependency>
            </>
          );
        }}
      </ProFormDependency>
    </ProCard>
  );
}
