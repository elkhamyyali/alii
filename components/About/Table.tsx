"use client";

import React from "react";
import dynamic from "next/dynamic";
import ChartPage from "./ChartArea";
// charts import
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// @material-tailwind/react
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Input,
  TypographyProps,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  DocumentMagnifyingGlassIcon,
  FlagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

// deepmerge
import merge from "deepmerge";

// area chart
interface ChartsPropsType {
  height: number;
  series: object[];
  options: object;
}

function AreaChart({
  height = 90,
  series,
  colors,
  options,
}: Partial<ChartsPropsType> & {
  colors: string | string[];
}) {
  const chartOptions = React.useMemo(
    () => ({
      colors: Array.isArray(colors) ? colors : [colors], // Ensure colors is always an array
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: false,
            xaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            },
          },
          tooltip: {
            theme: "light",
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.4,
              opacityTo: 0.6,
              stops: [0, 100],
            },
          },
        },
        options ? options : {}
      ),
    }),
    [height, colors, options]
  );

  return (
    <Chart
      type="area"
      height={height}
      series={series as ApexAxisChartSeries}
      options={chartOptions as any}
    />
  );
}

const TABLE_ROW = [
  {
    img: "https://source.unsplash.com/featured/?bitcoin", // Bitcoin image from Unsplash
    digitalAsset: "BTC",
    detail: "Bitcoin",
    price: "$46,727.30",
    change: "+2.92%",
    volume: "$45.31B",
    market: "$915.61B",
    color: "green",
    trend: [30, 40, 500, 420, 700, 350, 500, 330, 900], // Example trend data
  },
  {
    img: "https://source.unsplash.com/featured/?ethereum", // Ethereum image from Unsplash
    digitalAsset: "ETH",
    detail: "Ethereum",
    price: "$2,609.30",
    change: "+6.80%",
    volume: "$23.42B",
    market: "$313.58B",
    color: "green",
    trend: [30, 40, 500, 420, 700, 350, 500, 330, 900], // Example trend data
  },
  {
    img: "https://source.unsplash.com/featured/?usd", // TetherUS image from Unsplash
    digitalAsset: "USDT",
    detail: "TetherUS",
    price: "$1.00",
    change: "-0.01%",
    volume: "$94.37B",
    market: "$40,600",
    color: "red",
    trend: [30, 40, 500, 420, 700, 350, 500, 330, 900],
  },
  {
    img: "https://source.unsplash.com/featured/?solana", // Solana image from Unsplash
    digitalAsset: "SOL",
    detail: "Solana",
    price: "$1.00",
    change: "+6.35%",
    volume: "$3.48B",
    market: "$43.26B",
    color: "green",
    trend: [30, 40, 500, 420, 700, 350, 500, 330, 900],
  },
  {
    img: "https://source.unsplash.com/featured/?ripple", // Ripple image from Unsplash
    digitalAsset: "XRP",
    detail: "Ripple",
    price: "$100.19",
    change: "-0.95%",
    volume: "$1.81B",
    market: "$32.45B",
    color: "red",
    trend: [30, 40, 500, 420, 700, 350, 500, 330, 900],
  },
  {
    img: "https://source.unsplash.com/featured/?ripple", // Ripple image from Unsplash
    digitalAsset: "XRP",
    detail: "Ripple",
    price: "$100.19",
    change: "-0.95%",
    volume: "$1.81B",
    market: "$32.45B",
    color: "red",
    trend: [30, 40, 500, 420, 700, 350, 500, 330, 900],
  },
];

const TABLE_HEAD = [
  {
    head: "Digital Asset",
    customeStyle: "!text-left",
  },
  {
    head: "Price",
    customeStyle: "text-right",
  },
  {
    head: "Change",
    customeStyle: "text-right",
  },
  {
    head: "Volume",
    customeStyle: "text-right",
  },
  {
    head: "Market Cap",
    customeStyle: "text-right",
  },
  {
    head: "Trend",
    customeStyle: "text-right",
  },
  {
    head: "Actions",
    customeStyle: "text-right",
  },
];

function Table() {
  return (
    <Card className="w-[50rem] bg-white dark:bg-neutral-900 overflow-auto">
      <CardHeader
        floated={false}
        shadow={false}
        className="flex justify-between flex-wrap gap-5 dark:bg-neutral-900"
      >
        <div>
          <Typography
            variant="h6"
            className="text-gray-600 font-normal mt-1 dark:text-gray-100"
          >
            Cryptocurrency Market Overview
          </Typography>
          <Typography
            variant="small"
            className="text-gray-600 font-normal mt-1 dark:text-gray-100"
          >
            Compare different cryptocurrencies, and make informed investment.
          </Typography>
        </div>
        <div className="flex justify-center items-center bg-blue-600 rounded-2xl px-4 shadow-sm cursor-pointer">
          <p className=" text-center text-white">Add More Data</p>
        </div>
      </CardHeader>
      <CardBody className="">
        <table className="w-full h-full">
          <thead>
            <tr>
              {TABLE_HEAD.map(({ head, customeStyle }) => (
                <th
                  key={head}
                  className={`border-b border-gray-300 !p-4 pb-8 ${customeStyle}`}
                >
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {TABLE_ROW.map(
              (
                {
                  img,
                  digitalAsset,
                  detail,
                  price,
                  change,
                  volume,
                  market,
                  color,
                  trend,
                },
                index
              ) => {
                const isLast = index === TABLE_ROW.length - 1;
                const classes = isLast
                  ? "!p-4"
                  : "!p-4 border-b border-gray-300";
                return (
                  <tr key={digitalAsset}>
                    <td className={classes}>
                      <div className="flex items-center gap-4 text-left">
                        <img
                          src={img}
                          alt={digitalAsset}
                          className="border rounded-md p-1 h-10 w-10"
                        />
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!font-semibold dark:text-white"
                          >
                            {digitalAsset}
                          </Typography>
                          <Typography
                            variant="small"
                            className="!font-normal text-gray-600 dark:text-white"
                          >
                            {detail}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="!font-normal text-gray-600 text-right dark:text-white"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color={color as TypographyProps["color"]}
                        className="!font-bold text-right"
                      >
                        {change}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="!font-normal text-gray-600 text-right dark:text-white"
                      >
                        {volume}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="!font-normal text-gray-600 text-right dark:text-white"
                      >
                        {market}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="max-w-[12rem] ml-auto h-12 -translate-y-6">
                        <ChartPage />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex justify-end gap-4">
                        <IconButton variant="text" size="sm">
                          <DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        </IconButton>
                        <IconButton variant="text" size="sm">
                          <FlagIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default Table;
