import React from "react";
import {
  ProCard,
  ProFormList,
  WithControlPropsType,
} from "@ant-design/pro-components";
import { ChangeValue } from "./ChangeValue/ChangeValue";
import { Content } from "./Content/Content";

export function DataContent(
  props: WithControlPropsType<{
    name?: string;
    listMinNum?: string;
    // other props...
  }>
) {
  const { name = "DataContentList", listMinNum = "" } = props;
  return (
    <ProFormList
      name={name}
      creatorButtonProps={{
        creatorButtonText: "添加内容项",
      }}
      deleteIconProps={{
        tooltipText: "删除",
      }}
      style={{ marginBlockEnd: 0, marginBlockStart: 0 }}
      min={name === "3" ? 0 : 1}
      max={name === "3" ? 99 : 1}
      copyIconProps={false}
      initialValue={name === "3" ? [] : [{ IsNodeMode: false }]}
      itemRender={({ listDom, action }, { index }) => {
        let title = "";
        if (name === "3") {
          title = `内容-${index + Number(listMinNum)}`;
        } else if (name === "2") {
          if (listMinNum === "3") {
            title = `内容-2`;
          } else {
            title = `内容-false`;
          }
        } else if (name === "1") {
          if (listMinNum === "3") {
            title = `内容-1`;
          } else if (listMinNum === "2") {
            title = `内容-true`;
          } else {
            title = `内容`;
          }
        }
        return (
          <ProCard
            bordered
            collapsible
            style={{ marginBlockEnd: 8, marginBlockStart: 0 }}
            title={title}
            extra={action}
          >
            {listDom}
          </ProCard>
        );
      }}
    >
      <ChangeValue />
      <Content />
    </ProFormList>
  );
}
