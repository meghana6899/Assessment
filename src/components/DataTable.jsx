import React from "react";
import { Table } from "antd";

const DataTable = ({ data }) => {
    console.log("Data", data)
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => record.name?.common,
    },
      {
    title: "Currency",
    dataIndex: "currencies",
    render: (_, r) => {
      const code = Object.keys(r.currencies || {})[0];
      const curr = r.currencies?.[code];
      return curr ? `${code} (${curr.symbol})` : "-";
    },
  },,
    {
      title: "Longitude-latitude",
      dataIndex: "longitude-latitude",
      key: "longitude-latitude",
    },
    {
      title: "UN_Member",
      dataIndex: "unMember",
      key: "un_member",
      render: (_, record) => record.unMember ? <input type="radio" checked/> : <input type="radio" />
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Flag",
      dataIndex: "flags",
      key: "un_member",
      render: (_, record) => <img src = {`${record.flags.png}`} />
    },
  ];

  
    // console.log("DataSrc", dataSrc)

  return <Table columns={columns} dataSource={data} />;
};

export default DataTable;
// Name , Capital, Currency & symbol, Latitude Longitude , UnNumber ( checkbox ) , Area, Flag ( image )
