import React, { useState } from 'react';
import { ChevronDown, MoreVertical, Filter, Plus, LayoutGrid } from 'lucide-react';
import TaskModal from './TaskModal';

const TaskTable = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const tabs = [
    { id: 'all', label: 'All Tasks', count: 86, active: true },
    { id: 'completed', label: 'Completed Tasks' },
    { id: 'pending', label: 'Pending Tasks', count: 60 },
    { id: 'overdue', label: 'Overdue Tasks', count: 56 }
  ];

  const tasks = [
    {
      id: 1,
      customerName: 'Avif',
      customerCode: 'VBN-1234',
      taskId: 'TS-6465',
      title: 'test task',
      status: 'Canceled',
      priority: 'Medium',
      type: 'This is a test task by ta-ta estband',
      description: ''
    },
    {
      id: 2,
      customerName: 'Avif',
      customerCode: 'VBN-1234',
      taskId: 'TS-6468',
      title: 'test ticket for account care',
      status: 'Completed',
      priority: 'Low',
      type: 'This is a test ticket',
      description: ''
    },
    {
      id: 3,
      customerName: 'Avif',
      customerCode: 'VBN-1234',
      taskId: 'TS-6474',
      title: 'Hello',
      status: 'Completed',
      priority: 'Medium',
      type: 'testband',
      description: ''
    },
    {
      id: 4,
      customerName: 'Avif',
      customerCode: 'VBN-1234',
      taskId: 'TS-6476',
      title: 'Chealsea testing',
      status: 'Pending',
      priority: 'Medium',
      type: 'testband',
      description: ''
    },
    {
      id: 5,
      customerName: 'Avif',
      customerCode: 'VBN-1234',
      taskId: 'TS-6499',
      title: 'ss test',
      status: 'Pending',
      priority: 'Critical',
      type: 'othd',
      description: ''
    },
    {
      id: 6,
      customerName: 'testvinous',
      customerCode: 'testvinous',
      taskId: 'TS-6605',
      title: 'Critical Health Alert - Immediate Action Required',
      status: 'Pending',
      priority: 'High',
      type: 'Health Report',
      description: 'Customer regeneration has critical health'
    }
  ];

  const handleCustomerCodeClick = (task: any) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const getStatusBadge = (status: string) => {
    const statusStyles: { [key: string]: string } = {
      'Completed': 'bg-green-100 text-green-800 border-green-200',
      'Pending': 'bg-orange-100 text-orange-800 border-orange-200',
      'Canceled': 'bg-red-100 text-red-800 border-red-200'
    };
    
    return statusStyles[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPriorityBadge = (priority: string) => {
    const priorityStyles: { [key: string]: string } = {
      'High': 'bg-red-100 text-red-800 border-red-200',
      'Medium': 'bg-orange-100 text-orange-800 border-orange-200',
      'Low': 'bg-green-100 text-green-800 border-green-200',
      'Critical': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    
    return priorityStyles[priority] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between p-6 pb-0">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2 ${
                  tab.id === activeTab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tab.id === activeTab
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 pb-4">
            <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Task Owner:</span>
            <div className="bg-gray-100 px-3 py-1 rounded-md flex items-center space-x-2">
              <span>$6.07</span>
              <button><ChevronDown className="w-3 h-3" /></button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Customer Name:</span>
            <div className="bg-gray-100 px-3 py-1 rounded-md flex items-center space-x-2">
              <span></span>
              <button><ChevronDown className="w-3 h-3" /></button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Status:</span>
            <div className="bg-gray-100 px-3 py-1 rounded-md flex items-center space-x-2">
              <span>29.67</span>
              <button><ChevronDown className="w-3 h-3" /></button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Priority:</span>
            <div className="bg-gray-100 px-3 py-1 rounded-md flex items-center space-x-2">
              <span>$5.67</span>
              <button><ChevronDown className="w-3 h-3" /></button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Select:</span>
            <div className="bg-gray-100 px-3 py-1 rounded-md flex items-center space-x-2">
              <span></span>
              <button><ChevronDown className="w-3 h-3" /></button>
            </div>
          </div>
          
          <button className="text-blue-600 hover:text-blue-800 font-medium">Reset</button>
        </div>
      </div>

      {/* Table Header */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">
              <span>Save</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Code</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Task ID</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">{task.customerName}</td>
                <td className="py-4 px-6 text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors" onClick={() => handleCustomerCodeClick(task)}>
                  {task.customerCode}
                </td>
                <td className="py-4 px-6 text-sm text-blue-600 font-medium">{task.taskId}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{task.title}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{task.type}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{task.description}</td>
                <td className="py-4 px-6">
                  <button className="p-1 text-gray-400 hover:text-gray-600 rounded transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <TaskModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={selectedTask}
      />
    </div>
  );
};

const getStatusBadge = (status: string) => {
  const statusStyles: { [key: string]: string } = {
    'Completed': 'bg-green-100 text-green-800 border-green-200',
    'Pending': 'bg-orange-100 text-orange-800 border-orange-200',
    'Canceled': 'bg-red-100 text-red-800 border-red-200'
  };
  
  return statusStyles[status] || 'bg-gray-100 text-gray-800 border-gray-200';
};

const getPriorityBadge = (priority: string) => {
  const priorityStyles: { [key: string]: string } = {
    'High': 'bg-red-100 text-red-800 border-red-200',
    'Medium': 'bg-orange-100 text-orange-800 border-orange-200',
    'Low': 'bg-green-100 text-green-800 border-green-200',
    'Critical': 'bg-gray-100 text-gray-800 border-gray-200'
  };
  
  return priorityStyles[priority] || 'bg-gray-100 text-gray-800 border-gray-200';
};

export default TaskTable;