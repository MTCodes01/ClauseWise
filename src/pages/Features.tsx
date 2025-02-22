import { motion } from 'framer-motion';
import {
  FileText,
  BookOpen,
  PenTool,
  Shield,
  Database,
  Download,
  Search,
  Clock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Document Generator',
      description: 'Create professional legal documents using our extensive template library with smart auto-fill capabilities.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Smart Clause Library',
      description: 'Access a comprehensive library of legal clauses that can be easily customized to your needs.'
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Digital Signatures',
      description: 'Securely sign documents electronically with legally binding digital signatures.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Storage',
      description: 'Keep your documents safe with military-grade encryption, all stored locally on your device.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Version Control',
      description: 'Track changes and maintain multiple versions of your documents with ease.'
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'Export Options',
      description: 'Export your documents in multiple formats including PDF, DOCX, and more.'
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Smart Search',
      description: 'Quickly find documents and clauses with our powerful search functionality.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Auto-Save',
      description: 'Never lose your work with automatic saving and document recovery.'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features for Legal Professionals
          </motion.h1>
          <p className="text-xl text-gray-600">
            Everything you need to create and manage legal documents efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;