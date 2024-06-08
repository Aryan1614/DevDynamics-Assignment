import data from '../data/sample-data.json';

export const fetchDeveloperActivities = async () => {
  try {
    return data.data.AuthorWorklog;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

  