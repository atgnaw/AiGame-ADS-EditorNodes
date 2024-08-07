import React from "react";
import {
  WithControlPropsType,
  ProCard,
  ProFormList,
  ProFormText,
  ProForm,
} from "@ant-design/pro-components";

export function PlayerTipsData(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  return (
    <ProFormList
      name="tipsList"
      creatorButtonProps={{
        creatorButtonText: "添加提示项",
      }}
      min={1}
      copyIconProps={false}
      itemRender={({ listDom, action }, { index }) => (
        <ProCard
          bordered
          hoverable
          collapsible
          style={{ marginBlockEnd: 8 }}
          title={`提示${index + 1}`}
          size="small"
          extra={action}
          bodyStyle={{ paddingBlockEnd: 0 }}
        >
          {listDom}
        </ProCard>
      )}
      creatorRecord={{ tipText: "", flowBoardNumList: [{ flowBoardNum: "" }] }}
      initialValue={[
        {
          tipText: "",
          flowBoardNumList: [{ flowBoardNum: "" }],
        },
      ]}
    >
      <ProFormText
        style={{ padding: 0 }}
        width="md"
        name="tipText "
        label="提示文本"
      />
      <ProForm.Item
        isListField
        style={{ marginBlockEnd: 0 }}
        label="关联对话流编号"
      >
        <ProFormList
          name="flowBoardNumList"
          creatorButtonProps={{
            creatorButtonText: "新建",
            icon: false,
            type: "link",
            style: { width: "unset" },
          }}
          min={1}
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
          <ProFormText allowClear={false} width="xs" name={["flowBoardNum"]} />
        </ProFormList>
      </ProForm.Item>
    </ProFormList>
  );
}
