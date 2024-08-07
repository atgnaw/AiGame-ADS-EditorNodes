import { DrawerForm, ProFormInstance } from "@ant-design/pro-components";
import { CloseOutlined, FormOutlined } from "@ant-design/icons";
import { useState, useRef, createContext, useEffect } from "react";
import { ContentBranch } from "./ContentBranch/ContentBranch";
import { DataContent } from "./DataContent/DataContent";
import { NodeDataHead } from "./NodeDataHead/NodeDataHead";
import { Button } from "antd";

export const FormContext = createContext<any>(null);

export function FlowsNode() {
  const [readonly, setReadonly] = useState(false);
  const formRef = useRef<ProFormInstance>();
  const [list, setList] = useState("1");

  const handleContentBranchEnableChange = (enabled: string) => {
    console.log("ContentBranch 启用状态改变:", enabled);
    setList(enabled);
  };

  return (
    <FormContext.Provider value={formRef}>
      <DrawerForm
        title="编辑节点"
        readonly={readonly}
        name="validate_other"
        formRef={formRef}
        submitter={false}
        resize={{
          minWidth: window.innerWidth * 0.5,
        }}
        drawerProps={{
          keyboard: true,
          mask: false,
          styles: {
            body: { backgroundColor: "#bfbfbf" },
            header: {
              backgroundColor: "#096dd9",
              height: "50px",
              color: "white",
            },
          },
          closeIcon: <CloseOutlined style={{ color: "white" }} />,
          onClose: () => {
            console.log(formRef.current?.getFieldValue(["nodeDataName"]));
          },
        }}
        trigger={<FormOutlined />}
        onValuesChange={(_, values) => {
          //console.log(
          //  "onValuesChange: " +
          //    formRef.current?.getFieldValue(["labelsA", 0, "AAAAA"])
          //);
        }}
        onFinish={async (value) => {
          //console.log(
          //  "onFinish: " +
          //    formRef.current?.getFieldValue(["labelsA", 0, "AAAAA"])
          //);
        }}
      >
        <NodeDataHead />
        <ContentBranch
          onContentBranchEnableChange={handleContentBranchEnableChange}
        />
        {(list === "1" || list === "2" || list === "3") && (
          <DataContent name="1" listMinNum={list} />
        )}
        {(list === "2" || list === "3") && (
          <DataContent name="2" listMinNum={list} />
        )}
        {list === "3" && <DataContent name="3" listMinNum={list} />}
      </DrawerForm>
    </FormContext.Provider>
  );
}
