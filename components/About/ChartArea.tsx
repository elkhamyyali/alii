"use client"

import React from 'react';
import Chart from 'react-apexcharts';

interface ChartData {
  x: string;
  y: number;
}

const ChartPage: React.FC = () => {
  const chartData: ChartData[] = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 40 },
    { x: 'Mar', y: 35 },
    { x: 'Apr', y: 50 },
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 40 },
    { x: 'Mar', y: 35 },
    { x: 'Apr', y: 50 },
    // Add more data points as needed
  ];

  const options = {
    chart: {
      type: 'area',
      height: 75,
      width: 100,
      toolbar: {
        show: false, // Hide toolbar
      },
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide y-axis border
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    markers: {
      size: 0, // Hide markers
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
    grid: {
      show: false, // Hide grid lines
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={[{ data: chartData.map(item => item.y) }]}
        type="area"
        width={150}
        height={75}
      />
    </div>
  );
};

export default ChartPage;





