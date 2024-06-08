// TotalActivityChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts'; // Import YAxis
import { DayWiseActivity, ActivityMeta } from '../types';
import styled from 'styled-components';

interface TotalActivityChartProps {
  data: DayWiseActivity[];
  meta: ActivityMeta[];
}

const TotalActivityChart: React.FC<TotalActivityChartProps> = ({ data, meta }) => {
  // Create an object to store the total count of each activity
  const totalCounts: { [key: string]: number } = {};

  // Iterate over all days and accumulate the total count for each activity
  data.forEach((day) => {
    day.items.children.forEach((activity) => {
      totalCounts[activity.label] = (totalCounts[activity.label] || 0) + parseInt(activity.count, 10);
    });
  });

  // Prepare data for the bar chart
  const formattedData = Object.keys(totalCounts).map((label) => ({
    name: label,
    value: totalCounts[label],
  }));

  const getColor = (index: number) => {
    const colorIndex = index % meta.length;
    return meta[colorIndex].fillColor;
  };

  return (
    <ResponsiveBarChart>
      <BarChart width={600} height={400} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8">
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(index)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveBarChart>
  );
};

const ResponsiveBarChart = styled.div`
  width: 100%;
  max-width: 600px; /* Set your maximum width here */
  margin: 0 auto; /* Center the chart */
`;

export default TotalActivityChart;
