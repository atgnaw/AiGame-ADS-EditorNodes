import React from "react";
import {
  WithControlPropsType,
  ProFormSelect,
  ProCard,
} from "@ant-design/pro-components";
import { PromptTextPlaceholder } from "./PromptTextPlaceholder";
import { PromptArrayPlaceholder } from "./PromptArrayPlaceholder";

export function SelectorPrompt(
  props: WithControlPropsType<{
    name?: string;
    mod?: string;
    // other props...
  }>
) {
  const { name = "selectPrompt", mod = "generate" } = props;
  const style: React.CSSProperties = {
    height: "25px",
  };

  const getTitle = (mod: string) => {
    switch (mod) {
      case "generate":
        return "对象Prompt模板";
      case "selection":
        return "选择器Prompt模板";
      case "activateChildren":
        return "选择子级";
      default:
        return "调用Prompt模板";
    }
  };

  return (
    <ProCard
      title={getTitle(mod)}
      bordered
      hoverable
      colSpan="30%"
      headerBordered
      collapsible
      direction="column"
      size="small"
      style={{ marginBlockEnd: 12 }}
      headStyle={style}
      extra={
        <ProFormSelect
          name={name}
          initialValue={1}
          width="sm"
          style={{
            transform: "translateX(-20px) translateY(13px)",
            zIndex: 1,
          }}
          fieldProps={{ size: "small" }}
          options={[
            { label: "1", value: 1 },
            { label: "2", value: 2 },
          ]}
        />
      }
    >
      {mod === "generate" && (
        <PromptTextPlaceholder placeholdeList={["{AAA}", "{BBB}", "{[CCC]}"]} />
      )}
      {mod === "selection" && (
        <>
          <PromptTextPlaceholder
            placeholdeList={["{AAA}", "{BBB}", "{[CCC]}"]}
          />
          <PromptArrayPlaceholder
            placeholdeList={["{AAA}", "{BBB}", "{[CCC]}"]}
          />
        </>
      )}
      {mod === "activateChildren" && (
        <PromptTextPlaceholder placeholdeList={["{AAA}", "{BBB}", "{[CCC]}"]} />
      )}
    </ProCard>
  );
}
