import React, { useState } from "react";
import {
  WithControlPropsType,
  ProColumns,
  EditableProTable,
} from "@ant-design/pro-components";
import { Col, Row } from "antd";

type DataSourceType = {
  id: React.Key;
  title?: string;
  state?: string;
};
export function RelatedChildrenFinish(
  props: WithControlPropsType<{
    // other props...
  }>
) {
  const defaultData: DataSourceType[] = new Array(5).fill(1).map((_, index) => {
    return {
      id: (Date.now() + index).toString(),
      title: `占位符${index}`,
      state: "",
    };
  });

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: <span style={{ fontWeight: 500 }}>结束名称</span>,
      dataIndex: "title",
      width: "30%",
      readonly: true,
    },
    {
      title: <span style={{ fontWeight: 500 }}>下一个链接</span>,
      key: "state",
      dataIndex: "state",
      valueType: "select",
      fieldProps: {
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
    <Row justify="center">
      <Col span={24}>
        <EditableProTable<DataSourceType>
          columns={columns}
          rowKey="id"
          value={dataSource}
          onChange={setDataSource}
          recordCreatorProps={false}
          bordered
          size="small"
          style={{ width: "calc(100% + 48px)", transform: "translateX(-24px)" }}
          editable={{
            type: "multiple",
            editableKeys,
            onValuesChange: (record, recordList) => {
              setDataSource(recordList);
            },
          }}
        />
      </Col>
    </Row>
  );
}
