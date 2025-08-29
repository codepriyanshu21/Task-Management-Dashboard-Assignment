import React from 'react';
import { X, Maximize2, Bold, Italic, Underline, Strikethrough, Smile, Paperclip, ChevronDown } from 'lucide-react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    customerName: string;
    customerCode: string;
    taskId: string;
    title: string;
    status: string;
    priority: string;
    type: string;
    description: string;
  } | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

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
      'Critical': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    
    return priorityStyles[priority] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{task.customerName} - {task.taskId}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
              <Maximize2 className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Task Details */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Task name</label>
              <p className="text-gray-900 font-medium">{task.title}</p>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Due date</label>
              <p className="text-gray-900">-</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Created date</label>
              <p className="text-gray-900">23 Jul 2024</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Status</label>
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(task.status)}`}>
                {task.status}
              </span>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Priority</label>
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(task.priority)}`}>
                {task.priority}
              </span>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Owner</label>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">S</span>
                </div>
                <span className="text-gray-900">Shashank</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div></div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button className="py-2 px-1 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">
                Description
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                Notes
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                Events
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                Tickets
              </button>
            </nav>
          </div>

          {/* Text Editor */}
          <div className="border border-gray-200 rounded-lg">
            {/* Toolbar */}
            <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Bold className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Italic className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Underline className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Strikethrough className="w-4 h-4 text-gray-600" />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Smile className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Paperclip className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                Publish
              </button>
            </div>

            {/* Text Area with No Comments UI */}
            <div className="p-4 min-h-[200px] flex flex-col items-center justify-center">
              <div className="w-full">
                <textarea
                  className="w-full h-32 resize-none border-none outline-none text-gray-700 bg-gray-50 rounded-lg p-4 mb-4 shadow-inner"
                  placeholder="Start typing..."
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Smile className="w-7 h-7 text-blue-400" />
                </div>
                <p className="text-gray-700 font-semibold text-base">No comments yet</p>
                <p className="text-gray-500 text-sm mt-1">Start a conversation by adding your first comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;