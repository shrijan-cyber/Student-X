import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiCpu, FiFileText, FiBriefcase, FiMapPin, FiTrendingUp, FiTarget } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useUser();

  const quickActions = [
    { icon: FiCpu, title: 'Career AI', desc: 'Get guidance', link: '/career-ai', color: 'bg-blue-100 text-blue-600' },
    { icon: FiFileText, title: 'Resume', desc: 'Build & analyze', link: '/resume-builder', color: 'bg-green-100 text-green-600' },
    { icon: FiBriefcase, title: 'Find Jobs', desc: 'Browse listings', link: '/jobs', color: 'bg-purple-100 text-purple-600' },
    { icon: FiMapPin, title: 'Accommodation', desc: 'Find stays', link: '/accommodation', color: 'bg-orange-100 text-orange-600' },
  ];

  const recentActivity = [
    { action: 'Viewed Software Engineer Internship at Google', time: '2 hours ago' },
    { action: 'Updated resume with new skills', time: '1 day ago' },
    { action: 'Asked AI about full-stack development path', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64 pt-16">
        <div className="p-6 md:p-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mb-4 p-2 rounded-lg bg-white dark:bg-gray-800"
          >
            <FiMenu size={24} />
          </button>

          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
              Hey {user?.name || 'Student'} 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You're one step closer to your dream career
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.link}>
                  <Card hover className="h-full">
                    <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{action.desc}</p>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Career Progress */}
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Career Progress</h2>
                <FiTrendingUp className="text-primary" size={24} />
              </div>
              
              <div className="space-y-6">
                <ProgressBar percentage={75} label="Profile Completion" color="primary" />
                <ProgressBar percentage={60} label="Skills Assessment" color="secondary" />
                <ProgressBar percentage={40} label="Job Applications" color="accent" />
                <ProgressBar percentage={85} label="Resume Quality" color="success" />
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm">
                  <strong>Tip:</strong> Complete your profile to unlock personalized job recommendations!
                </p>
              </div>
            </Card>

            {/* Recommended Actions */}
            <Card>
              <div className="flex items-center mb-6">
                <FiTarget className="text-primary mr-2" size={24} />
                <h2 className="text-2xl font-bold">Next Steps</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-primary bg-blue-50 dark:bg-blue-900/20 rounded">
                  <p className="font-medium">Complete your profile</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Add college & skills</p>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded">
                  <p className="font-medium">Upload your resume</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get AI analysis</p>
                </div>
                <div className="p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <p className="font-medium">Apply to 3 jobs</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Start your journey</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA Banner */}
          <Card className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white" glass={false}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to level up?</h3>
                <p className="opacity-90">Explore jobs that match your profile</p>
              </div>
              <Link to="/jobs" className="mt-4 md:mt-0">
                <Button variant="secondary">Browse Jobs</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
