import React from 'react';
import StatsCards from './StatsCards';
import TaskTable from './TaskTable';

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-full">
        {/* Stats Cards */}
        <StatsCards />
        
        {/* Task Table */}
        <div className="mt-8">
          <TaskTable />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;