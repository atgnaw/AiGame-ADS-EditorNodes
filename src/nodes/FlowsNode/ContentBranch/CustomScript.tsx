import React from "react";
import {
  WithControlPropsType,
  ProFormText,
  ProFormList,
  ProForm,
} from "@ant-design/pro-components";

export function CustomScript(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <>
      <ProFormText name="cbScriptName" label="脚本名" width="sm" />
      <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="脚本参数">
        <ProFormList
          name="cbCustomScriptParametersList"
          creatorButtonProps={{
            creatorButtonText: "新增",
            icon: false,
            type: "link",
            style: { width: "unset" },
          }}
          initialValue={[{ cbCustomScriptParameter: "" }]}
          copyIconProps={false}
          deleteIconProps={{ tooltipText: "删除" }}
          itemRender={({ listDom, action }) => (
            <div
              style={{
                display: "inline-flex",
                marginInlineEnd: 15,
              }}
            >
              {listDom}
              {action}
            </div>
          )}
        >
          <ProFormText
            allowClear={false}
            width="xs"
            name={["cbCustomScriptParameter"]}
          />
        </ProFormList>
      </ProForm.Item>
    </>
  );
}
