import React from 'react';
import { Clock, AlertTriangle, Calendar, TrendingUp } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      icon: Clock,
      title: 'Pending Tasks',
      count: 60,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: AlertTriangle,
      title: 'Overdue Tasks',
      count: 56,
      color: 'red',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      borderColor: 'border-red-200'
    },
    {
      icon: Calendar,
      title: 'Due For Today',
      count: 0,
      color: 'orange',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      icon: TrendingUp,
      title: 'Approaching Breach Tasks',
      count: 1,
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} ${stat.borderColor} border rounded-xl p-6 hover:shadow-md transition-shadow`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-lg mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;