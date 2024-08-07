import React, { useState, useEffect } from "react";
import {
  ProCard,
  ProFormDependency,
  ProFormSwitch,
  WithControlPropsType,
} from "@ant-design/pro-components";
import { IfConfigure } from "./IfConfigure";
import { CustomScript } from "./CustomScript";

export function ContentBranch(
  props: WithControlPropsType<{
    onContentBranchEnableChange: (enabled: string) => void;
    // other props...
  }>
) {
  const { onContentBranchEnableChange } = props;

  const [isContentBranchEnable, setIsContentBranchEnable] = useState(false);
  const [isCustomScript, setIsCustomScript] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    if (isContentBranchEnable && isCustomScript) {
      onContentBranchEnableChange("3");
      return;
    } else if (isContentBranchEnable) {
      onContentBranchEnableChange("2");
    } else {
      onContentBranchEnableChange("1");
    }
  }, [isContentBranchEnable, isCustomScript]);

  return (
    <ProCard
      title="数值条件-内容分支"
      bordered
      headerBordered
      collapsed={collapsed}
      style={{ marginBlockStart: 8, marginBlockEnd: 8 }}
      extra={
        <ProFormSwitch
          name="contentBranchEnable"
          noStyle
          checkedChildren={"启用"}
          unCheckedChildren={"禁用"}
          fieldProps={{
            onChange: (checked: boolean) => {
              setIsContentBranchEnable(checked);
              setCollapsed(!checked);
            },
          }}
        />
      }
    >
      <ProFormDependency name={["contentBranchEnable"]}>
        {({ contentBranchEnable }) => {
          if (contentBranchEnable === true) {
            return (
              <>
                <ProFormSwitch
                  name="cbSwitchCustomScript"
                  checkedChildren="脚本"
                  unCheckedChildren="配置"
                  fieldProps={{
                    onChange: (checked: boolean) => {
                      setIsCustomScript(checked);
                    },
                  }}
                />
                <ProFormDependency name={["cbSwitchCustomScript"]}>
                  {({ cbSwitchCustomScript }) => {
                    if (cbSwitchCustomScript !== true) {
                      return <IfConfigure />;
                    }
                    return <CustomScript />;
                  }}
                </ProFormDependency>
              </>
            );
          }
        }}
      </ProFormDependency>
    </ProCard>
  );
}
