import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TopicContext } from "../../Layout/Main";

const OverView = () => {
  const topic = useContext(TopicContext);

  return (

      <div className=" flex justify-center items-center">
        <LineChart
          width={300}
          height={300}
          data={topic.data}
          margin={{
            right: 50,
            left: 50,
            top: 50,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="id" stroke="#82ca9d" />
        </LineChart>
      </div>

  );
};

export default OverView;
