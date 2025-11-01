import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCpu, FiFileText, FiBriefcase, FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Card from '../components/Card';

const Landing = () => {
  useScrollAnimations();

  const features = [
    {
      icon: FiCpu,
      title: 'Career AI Assistant',
      description: 'Get personalized career guidance, skill roadmaps, and mentorship from our AI-powered assistant.',
      color: 'text-blue-500'
    },
    {
      icon: FiFileText,
      title: 'Resume Builder',
      description: 'Upload and analyze your resume with AI. Get scores, suggestions, and professional templates.',
      color: 'text-green-500'
    },
    {
      icon: FiBriefcase,
      title: 'Jobs & Internships',
      description: 'Discover opportunities that match your skills. Filter by location, stipend, and more.',
      color: 'text-purple-500'
    },
    {
      icon: FiMapPin,
      title: 'Accommodation Finder',
      description: 'Find safe, student-friendly PGs, hostels, and flats near your campus with roommate matching.',
      color: 'text-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Computer Science Student',
      text: 'StudentX helped me land my dream internship! The AI career guidance was spot-on.',
      image: '👩‍💻'
    },
    {
      name: 'Rahul Verma',
      role: 'Business Student',
      text: 'Found the perfect PG near my college in minutes. The platform is a game-changer!',
      image: '👨‍🎓'
    },
    {
      name: 'Ananya Reddy',
      role: 'Engineering Graduate',
      text: 'The resume builder boosted my confidence. Got interview calls within a week!',
      image: '👩‍🔧'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Tell us your <span className="gradient-text">dream</span>
              <br />
              we'll guide the <span className="gradient-text">path</span> ✨
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Your AI-powered career companion for internships, jobs, resumes, and student accommodation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                  Get Started Free <FiArrowRight className="inline ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-4xl font-bold gradient-text">10k+</div>
              <div className="text-gray-600 dark:text-gray-400">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Everything you need to <span className="gradient-text">succeed</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              All-in-one platform for your student career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="stagger-item">
                  <div className={`${feature.color} mb-4`}>
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              How it <span className="gradient-text">works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your free account in seconds' },
              { step: '2', title: 'Tell Us Your Goals', desc: 'Share your career aspirations and skills' },
              { step: '3', title: 'Get Guided', desc: 'Receive personalized recommendations and support' }
            ].map((item, index) => (
              <div key={index} className="text-center scale-in">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Students <span className="gradient-text">love</span> us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="stagger-item text-center">
                <div className="text-6xl mb-4">{testimonial.image}</div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to start your journey? 🚀
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already achieving their dreams
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="lg">
              Sign Up Now — It's Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <div className="text-2xl font-bold font-display gradient-text mb-4">StudentX</div>
          <p className="mb-4">Empowering students to achieve their career dreams</p>
          <p className="text-sm">&copy; 2024 StudentX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
