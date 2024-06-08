import React, { useEffect, useState } from 'react';
import { fetchDeveloperActivities } from '../services/api';
import { AuthorWorklog, DeveloperActivity } from '../types';
import ActivityChart from './ActivityChart';
import TotalActivityChart from './TotalActivityChart';
import styled from 'styled-components';

const Dashboard: React.FC = () => {
  const [worklog, setWorklog] = useState<AuthorWorklog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [visualizationType, setVisualizationType] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDeveloperActivities();
      setWorklog(data);
      setLoading(false);
    };
    getData();
  }, []);

  const toggleVisualizationType = (name: string) => {
    setVisualizationType((prevState) => ({
      ...prevState,
      [name]: prevState[name] === 'pie' ? 'bar' : 'pie'
    }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      {worklog && worklog.rows.map((developer: DeveloperActivity) => (
        <InsideDiv key={developer.name}>
          <h2>{developer.name}</h2>
          <Button onClick={() => toggleVisualizationType(developer.name)}>
            {visualizationType[developer.name] === 'pie' ? 'Show Daily Data' : 'Show All Data'}
          </Button>
          <ActivityContainer>
            <div>
              {visualizationType[developer.name] === 'pie' ? (
                <TotalActivityChart data={developer.dayWiseActivity} meta={worklog.activityMeta} />
              ) : (
                <ActivityChart data={developer.dayWiseActivity} meta={worklog.activityMeta} />
              )}
            </div>
          </ActivityContainer>
        </InsideDiv>
      ))}
    </Container>
  );
};

export default Dashboard;

const InsideDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 1rem;
    margin-bottom: 100px;
  }
`;

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    padding: 7px 16px;
    font-size: 14px;
  }
`;

const ActivityContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
`;
