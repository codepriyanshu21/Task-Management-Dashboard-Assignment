import React from 'react';
import { 
  CheckSquare, 
  Inbox, 
  BarChart3, 
  LayoutGrid, 
  CreditCard, 
  FileText, 
  Target, 
  Users, 
  Heart, 
  Shield, 
  Ticket,
  Eye,
  ChevronDown
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: CheckSquare, label: 'My Task', active: true },
    { icon: Inbox, label: 'My Inbox' },
    { icon: BarChart3, label: 'Insight360' },
    { icon: LayoutGrid, label: 'DashBoard' },
    { icon: CreditCard, label: 'Payment' },
    { icon: FileText, label: 'Contract' },
    { icon: Target, label: 'Opportunity' },
    { icon: Users, label: 'Customers' },
    { icon: Heart, label: 'Health' },
    { icon: Shield, label: 'MPS' },
    { icon: Ticket, label: 'Tickets' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-6">
        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Views Section */}
      <div className="mt-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 font-medium">Views</span>
            <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">9</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <div className="text-gray-400 text-sm pl-6">Real</div>
          <div className="text-gray-400 text-sm pl-6">Today's Work</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;