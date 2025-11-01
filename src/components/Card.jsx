import {motion} from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = true 
}) => {
  const baseClass = glass ? 'glass-card' : 'bg-white dark:bg-dark-card';
  
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`${baseClass} rounded-xl p-6 ${className}`}
      transition={{ duration: 0.3 }}
    >
      {children}
      
    </motion.div>

  );
};

export default Card;
