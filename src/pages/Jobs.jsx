import { useState } from 'react';
import { FiMenu, FiMapPin, FiDollarSign, FiClock, FiBookmark, FiSearch } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';

const Jobs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: 'all',
    location: '',
    skills: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Google',
      location: 'Bangalore',
      type: 'Internship',
      stipend: '₹50,000/month',
      duration: '6 months',
      skills: ['React', 'JavaScript', 'CSS'],
      logo: '🔵'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Amazon',
      location: 'Hyderabad',
      type: 'Full-time',
      stipend: '₹15 LPA',
      duration: 'Permanent',
      skills: ['Node.js', 'React', 'AWS'],
      logo: '🟠'
    },
    {
      id: 3,
      title: 'UI/UX Design Intern',
      company: 'Figma',
      location: 'Remote',
      type: 'Internship',
      stipend: '₹30,000/month',
      duration: '3 months',
      skills: ['Figma', 'Design', 'Prototyping'],
      logo: '🟣'
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Microsoft',
      location: 'Mumbai',
      type: 'Full-time',
      stipend: '₹12 LPA',
      duration: 'Permanent',
      skills: ['Python', 'SQL', 'Power BI'],
      logo: '🔴'
    },
    {
      id: 5,
      title: 'Backend Developer Intern',
      company: 'Swiggy',
      location: 'Bangalore',
      type: 'Internship',
      stipend: '₹40,000/month',
      duration: '6 months',
      skills: ['Node.js', 'MongoDB', 'Express'],
      logo: '🟢'
    },
    {
      id: 6,
      title: 'Mobile App Developer',
      company: 'Zomato',
      location: 'Delhi',
      type: 'Full-time',
      stipend: '₹18 LPA',
      duration: 'Permanent',
      skills: ['React Native', 'iOS', 'Android'],
      logo: '🔴'
    }
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
            Jobs & Internships
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Explore jobs that match your skills
          </p>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <Card className="lg:col-span-1 h-fit">
              <h3 className="text-xl font-bold mb-4">Filters</h3>
              
              <div className="space-y-4">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">Job Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="all">All</option>
                    <option value="internship">Internship</option>
                    <option value="fulltime">Full-time</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City..."
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-medium mb-2">Skills</label>
                  <input
                    type="text"
                    placeholder="e.g. React, Python"
                    value={filters.skills}
                    onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                <Button variant="gradient" className="w-full">
                  Apply Filters
                </Button>
              </div>
            </Card>

            {/* Jobs List */}
            <div className="lg:col-span-3 space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} hover className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-5xl">{job.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">{job.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span className="flex items-center">
                            <FiMapPin className="mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <FiDollarSign className="mr-1" />
                            {job.stipend}
                          </span>
                          <span className="flex items-center">
                            <FiClock className="mr-1" />
                            {job.duration}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2 mt-4 md:mt-0">
                      <Button variant="gradient" size="sm">
                        Apply
                      </Button>
                      <Button variant="outline" size="sm">
                        <FiBookmark />
                      </Button>
                    </div>
                  </div>

                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    job.type === 'Internship' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                  }`}>
                    {job.type}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
