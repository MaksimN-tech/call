import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CALLS } from "../query/call";

import { Table } from "antd";

const App = () => {
  const [call, setCall] = useState([]);

  const { data, loading } = useQuery(GET_ALL_CALLS);

  useEffect(() => {
    if (!loading) {
      setCall(data.getAllCalls);
    }
  }, [data]);

  const info = call.map((el) => {
    return {
      key: el.id,
      call: el.phone,
      date: Date(el.call_date),
    };
  });

  const columns = [
    {
      title: "Call",
      dataIndex: "call",
      key: "call",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div className="App">
      <Table dataSource={info} columns={columns} />
    </div>
  );
};
export default App;
