import React, { useState } from "react";
import {
  WithControlPropsType,
  ProColumns,
  EditableProTable,
} from "@ant-design/pro-components";

type DataSourceType = {
  id: React.Key;
  title?: string;
  state?: string;
};

function getPlaceholderStrings(): string[] {
  // 这里定义你的函数返回一个字符串数组
  return ["{AAA}", "{BBB}", "{[CCC]}"];
}

function parsePlaceholders(strings: string[]) {
  const defaultData: DataSourceType[] = strings
    .filter((str) => /^\{\[[^]*\]\}$/.test(str)) // 精确匹配 {[]} 的字符串
    .map((str, index) => ({
      id: (Date.now() + index).toString(),
      title: str,
    }));

  return defaultData;
}

export function PromptArrayPlaceholder(
  props: WithControlPropsType<{
    placeholdeList: string[];
    // other props...
  }>
) {
  const { placeholdeList = [] } = props;
  const defaultData = parsePlaceholders(getPlaceholderStrings());
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      dataIndex: "title",
      valueType: "text",
      width: "22%",
      readonly: true,
    },
    {
      key: "state",
      dataIndex: "state",
      valueType: "select",
      fieldProps: {
        mode: "multiple",
        options: [
          { label: "高兴的0", value: "A" },
          { label: "以上都不是1", value: "B" },
          { label: "以上都不是2", value: "C" },
          { label: "以上都不是3", value: "D" },
        ],
      },
    },
  ];
  return (
    <>
      {defaultData.length > 0 && (
        <EditableProTable<DataSourceType>
          columns={columns}
          rowKey="id"
          value={dataSource}
          bordered={false}
          size="small"
          showHeader={false}
          onChange={setDataSource}
          recordCreatorProps={false}
          scroll={{
            x: 1,
          }}
          editable={{
            type: "multiple",
            editableKeys: editableKeys,
            onValuesChange: (record, recordList) => {
              setDataSource(recordList);
            },
          }}
        />
      )}
    </>
  );
}
