export interface ActivityMeta {
    label: string;
    fillColor: string;
  }
  
  export interface Activity {
    name: string;
    value: string;
  }
  
  export interface DayActivity {
    count: string;
    label: string;
    fillColor: string;
  }
  
  export interface DayWiseActivity {
    date: string;
    items: {
      children: DayActivity[];
    };
  }
  
  export interface DeveloperActivity {
    name: string;
    totalActivity: Activity[];
    dayWiseActivity: DayWiseActivity[];
  }
  
  export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows: DeveloperActivity[];
  }
  
