import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { DayWiseActivity, ActivityMeta } from '../types';
import styled from 'styled-components';

interface ActivityChartProps {
  data: DayWiseActivity[];
  meta: ActivityMeta[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data, meta }) => {
  const formattedData = data.map((day) => {
    const dayData: { [key: string]: number | string } = { date: day.date };
    day.items.children.forEach((activity) => {
      dayData[activity.label] = parseInt(activity.count, 10);
    });
    return dayData;
  });

  return (
    <ResponsiveContainer>
      <ScrollableImages>
        <StyledBarChart width={1000} height={400} data={formattedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Legend />
          {meta.map((activity) => (
            <Bar key={activity.label} dataKey={activity.label} fill={activity.fillColor} />
          ))}
        </StyledBarChart>
      </ScrollableImages>
    </ResponsiveContainer>
  );
};

const ResponsiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ScrollableImages = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (min-width: 769px) {
    overflow-x: visible;
  }
`;

const StyledBarChart = styled(BarChart)`
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 80%;
    height: 400px;
  }

  @media (min-width: 1201px) {
    width: 60%;
    height: 400px;
  }
`;

export default ActivityChart;
