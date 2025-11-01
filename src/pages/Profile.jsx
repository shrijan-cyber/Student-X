import { useState } from 'react';
import { FiMenu, FiUser, FiMail, FiMapPin, FiBookOpen, FiAward, FiSave } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, updateUser } = useUser();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    college: user?.college || '',
    degree: user?.degree || '',
    year: user?.year || '',
    skills: user?.skills?.join(', ') || '',
    bio: user?.bio || '',
    goals: user?.goals || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(Boolean);
    updateUser({ ...formData, skills: skillsArray });
    alert('Profile updated successfully!');
  };

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
            Your Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Complete your profile to get personalized recommendations
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <Card className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
                    {formData.name.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Change Photo</Button>
                    <p className="text-sm text-gray-500 mt-2">JPG or PNG. Max 2MB</p>
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FiUser className="inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FiMail className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* College & Degree */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FiMapPin className="inline mr-2" />
                      College/University
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. IIT Delhi"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FiBookOpen className="inline mr-2" />
                      Degree
                    </label>
                    <input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                      placeholder="e.g. B.Tech Computer Science"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-medium mb-2">Year of Study</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <FiAward className="inline mr-2" />
                    Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g. React, Python, Machine Learning"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                {/* Career Goals */}
                <div>
                  <label className="block text-sm font-medium mb-2">Career Goals</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows="3"
                    placeholder="What are your career aspirations?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                <Button variant="gradient" onClick={handleSave} className="w-full">
                  <FiSave className="mr-2" />
                  Save Changes
                </Button>
              </div>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <Card>
                <h3 className="text-xl font-bold mb-4">Profile Strength</h3>
                <ProgressBar percentage={75} label="Overall" color="primary" />
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Basic info complete
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Skills added
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Add resume
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Complete bio
                  </p>
                </div>
              </Card>

              {/* Resume Upload */}
              <Card>
                <h3 className="text-xl font-bold mb-4">Resume</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Upload your latest resume to improve job recommendations
                </p>
                <Button variant="outline" className="w-full">
                  Upload Resume
                </Button>
              </Card>

              {/* Account Settings */}
              <Card className="bg-gray-50 dark:bg-gray-800" glass={false}>
                <h4 className="font-bold mb-2">Account Settings</h4>
                <div className="space-y-2 text-sm">
                  <button className="text-primary hover:underline block">Change Password</button>
                  <button className="text-primary hover:underline block">Notification Settings</button>
                  <button className="text-red-500 hover:underline block">Delete Account</button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
