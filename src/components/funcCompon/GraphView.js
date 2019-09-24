import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import Card from "@material-ui/core/Card";
import CardHeader from "../CardHeader";
import CardContent from "@material-ui/core/CardContent";

function setHours(dt, h) {
  var s = /(\d+):(\d+)(.+)/.exec(h);
  dt.setHours(s[3] === "pm" ? 12 + parseInt(s[1], 10) : parseInt(s[1], 10));
  dt.setMinutes(parseInt(s[2], 10));
}

var d = new Date();

const data = [
  {
    name: Date(),
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: Date().now() + 60,
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: Date().now() + 90,
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: Date().now() + 120,
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: Date().now() + 150,
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: Date().now() + 180,
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: Date().now() + 220,
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default class GraphView extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    return (
      <Card>
        <CardHeader title="Enron Oil and Gas Resources" />
        <CardContent>
          <AreaChart
            width={900}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </CardContent>
      </Card>
    );
  }
}
