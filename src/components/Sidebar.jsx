import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiCpu, 
  FiFileText, 
  FiBriefcase, 
  FiMapPin, 
  FiUser,
  FiSettings
} from 'react-icons/fi';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: FiHome },
    { name: 'Career AI', path: '/career-ai', icon: FiCpu },
    { name: 'Resume Builder', path: '/resume-builder', icon: FiFileText },
    { name: 'Jobs', path: '/jobs', icon: FiBriefcase },
    { name: 'Accommodation', path: '/accommodation', icon: FiMapPin },
    { name: 'Profile', path: '/profile', icon: FiUser },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 glass-card border-r border-gray-200 dark:border-gray-700 z-50 lg:translate-x-0 lg:z-30"
      >
        <nav className="h-full overflow-y-auto py-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
