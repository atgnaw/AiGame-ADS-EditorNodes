import React, { useContext } from "react";
import {
  WithControlPropsType,
  ProCard,
  ProFormDependency,
  ProFormSegmented,
} from "@ant-design/pro-components";
import { Divider } from "antd";
import { FormContext } from "../../FlowsNode";
import { ObjectContent } from "./ObjectContent";
import { Action } from "./Action/Action";
import { SelectorPrompt } from "./SelectorPrompt";

export function Content(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  const formRef = useContext(FormContext);

  const style: React.CSSProperties = {
    height: "25px",
  };

  return (
    <ProCard
      title="内容输出"
      bordered
      hoverable
      headerBordered
      direction="column"
      headStyle={style}
      type="inner"
      style={{ marginBlockStart: 8 }}
      extra={
        <ProFormSegmented
          label=" "
          name="contentNodeMode"
          initialValue={"常规"}
          request={async () => [
            { label: "常规", value: "常规" },
            { label: "动作", value: "动作" },
            { label: "路由", value: "路由" },
          ]}
        />
      }
    >
      <ProFormDependency name={["contentNodeMode"]}>
        {({ contentNodeMode }) => {
          console.log(contentNodeMode);
          return (
            <>
              {contentNodeMode === "路由" && (
                <SelectorPrompt name="selectorPrompt" mod="selection" />
              )}
              {contentNodeMode === "常规" && (
                <>
                  <ObjectContent />
                  <Divider />
                </>
              )}
              {(contentNodeMode === "常规" || contentNodeMode === "动作") && (
                <Action />
              )}
            </>
          );
        }}
      </ProFormDependency>
    </ProCard>
  );
}
