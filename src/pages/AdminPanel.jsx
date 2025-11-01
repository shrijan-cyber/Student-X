import { useState } from 'react';
import { FiMenu, FiUsers, FiBriefcase, FiHome, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    { id: 1, name: 'Shrijan Kumar', email: 'shrijan@example.com', college: 'IIT Delhi', verified: true },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', college: 'BITS Pilani', verified: true },
    { id: 3, name: 'Rahul Verma', email: 'rahul@example.com', college: 'NIT Trichy', verified: false },
  ];

  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Google', status: 'active' },
    { id: 2, title: 'Backend Engineer', company: 'Amazon', status: 'pending' },
    { id: 3, title: 'Data Analyst', company: 'Microsoft', status: 'active' },
  ];

  const accommodations = [
    { id: 1, name: 'Green Valley PG', location: 'Bangalore', status: 'approved' },
    { id: 2, name: 'Student Haven', location: 'Mumbai', status: 'pending' },
    { id: 3, name: 'Cozy Flat', location: 'Delhi', status: 'approved' },
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64 pt-16">
        <div className="p-6 md:p-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mb-4 p-2 rounded-lg bg-white dark:bg-gray-800"
          >
            <FiMenu size={24} />
          </button>

          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Manage users, jobs, and accommodations
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Total Users</p>
                  <p className="text-3xl font-bold">2,547</p>
                </div>
                <FiUsers className="text-primary" size={40} />
              </div>
            </Card>
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Active Jobs</p>
                  <p className="text-3xl font-bold">342</p>
                </div>
                <FiBriefcase className="text-green-500" size={40} />
              </div>
            </Card>
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Accommodations</p>
                  <p className="text-3xl font-bold">128</p>
                </div>
                <FiHome className="text-orange-500" size={40} />
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'users', label: 'Users', icon: FiUsers },
              { id: 'jobs', label: 'Jobs', icon: FiBriefcase },
              { id: 'accommodations', label: 'Accommodations', icon: FiHome }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Users Table */}
          {activeTab === 'users' && (
            <Card>
              <h2 className="text-2xl font-bold mb-6">User Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">College</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-4">{user.name}</td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">{user.college}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            user.verified
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {user.verified ? 'Verified' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-red-500 hover:text-red-700 mr-2">
                            <FiTrash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Jobs Table */}
          {activeTab === 'jobs' && (
            <Card>
              <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4">Title</th>
                      <th className="text-left py-3 px-4">Company</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-4">{job.title}</td>
                        <td className="py-3 px-4">{job.company}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            job.status === 'active'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          {job.status === 'pending' && (
                            <button className="text-green-500 hover:text-green-700">
                              <FiCheck size={18} />
                            </button>
                          )}
                          <button className="text-red-500 hover:text-red-700">
                            <FiTrash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Accommodations Table */}
          {activeTab === 'accommodations' && (
            <Card>
              <h2 className="text-2xl font-bold mb-6">Accommodation Listings</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Location</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accommodations.map((place) => (
                      <tr key={place.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-4">{place.name}</td>
                        <td className="py-3 px-4">{place.location}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            place.status === 'approved'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {place.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          {place.status === 'pending' && (
                            <button className="text-green-500 hover:text-green-700">
                              <FiCheck size={18} />
                            </button>
                          )}
                          <button className="text-red-500 hover:text-red-700">
                            <FiTrash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
