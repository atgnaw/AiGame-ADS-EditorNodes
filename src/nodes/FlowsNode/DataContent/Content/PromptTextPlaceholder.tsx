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
    .filter((str) => /^\{[^[][^]*\}$/.test(str)) // 精确匹配 {} 的字符串
    .map((str, index) => ({
      id: (Date.now() + index).toString(),
      title: str,
    }));

  return defaultData;
}

export function PromptTextPlaceholder(
  props: WithControlPropsType<{
    placeholdeList: string[];
    // other props...
  }>
) {
  const { placeholdeList = [] } = props;
  const defaultData = parsePlaceholders(placeholdeList);
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
      valueType: "textarea",
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
            editableKeys,
            onValuesChange: (record, recordList) => {
              setDataSource(recordList);
            },
          }}
        />
      )}
    </>
  );
}
