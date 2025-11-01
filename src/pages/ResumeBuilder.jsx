import { useState } from 'react';
import { FiMenu, FiUpload, FiDownload, FiCheck } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

const ResumeBuilder = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const templates = [
    { name: 'Professional', color: 'bg-blue-500' },
    { name: 'Modern', color: 'bg-purple-500' },
    { name: 'Creative', color: 'bg-green-500' },
    { name: 'Minimal', color: 'bg-gray-500' },
  ];

  const analysis = {
    score: 78,
    strengths: ['Clear formatting', 'Relevant skills', 'Good project descriptions'],
    improvements: ['Add more quantifiable achievements', 'Include a summary section', 'Update contact information']
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
            Resume Builder
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Upload your resume — let's polish it to perfection
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Upload Section */}
            <Card className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Upload Your Resume</h2>
              
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <FiUpload className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-lg font-medium mb-2">Drag & drop your resume here</p>
                <p className="text-gray-500 mb-4">or click to browse</p>
                <Button
                  variant="gradient"
                  onClick={() => setUploaded(true)}
                >
                  Choose File
                </Button>
              </div>

              {uploaded && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">AI Analysis Results</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Resume Score</span>
                      <span className="text-2xl font-bold text-primary">{analysis.score}/100</span>
                    </div>
                    <ProgressBar percentage={analysis.score} color="primary" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-green-600 mb-2">✓ Strengths</h4>
                      <ul className="space-y-1">
                        {analysis.strengths.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <FiCheck className="text-green-500 mt-1 mr-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-orange-600 mb-2">⚠ Areas to Improve</h4>
                      <ul className="space-y-1">
                        {analysis.improvements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="gradient" className="mt-6 w-full">
                    <FiDownload className="mr-2" />
                    Download Improved Version
                  </Button>
                </div>
              )}
            </Card>

            {/* Templates Sidebar */}
            <div>
              <Card>
                <h3 className="text-xl font-bold mb-4">Resume Templates</h3>
                <div className="space-y-3">
                  {templates.map((template, index) => (
                    <div
                      key={index}
                      className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary cursor-pointer transition-all"
                    >
                      <div className={`w-full h-24 ${template.color} rounded mb-2 opacity-80`}></div>
                      <p className="font-medium">{template.name}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="mt-6 bg-blue-50 dark:bg-blue-900/20" glass={false}>
                <h4 className="font-bold mb-2">Pro Tip</h4>
                <p className="text-sm">
                  Tailor your resume for each job application to increase your chances of getting noticed!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
