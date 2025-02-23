import { motion } from "framer-motion";
import { FileText, Edit, Download, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Choose a Template",
      description:
        "Select from our extensive library of legal document templates.",
    },
    {
      icon: <Edit className="h-12 w-12" />,
      title: "Customize Content",
      description:
        "Fill in your information and customize the document to your needs.",
    },
    {
      icon: <Check className="h-12 w-12" />,
      title: "Review & Sign",
      description: "Review your document and add digital signatures if needed.",
    },
    {
      icon: <Download className="h-12 w-12" />,
      title: "Export & Save",
      description:
        "Export your document in your preferred format and save it securely.",
    },
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
            How It Works
          </motion.h1>
          <p className="text-xl text-gray-600">
            Create professional legal documents in four simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 text-white rounded-full p-4">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mt-20">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">See It in Action</h2>
              <p className="text-gray-600">
                Watch our quick demo video to see how easy it is to use ClauseWise
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* Replace with actual video player */}
              <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
                <p className="text-white">Demo Video Player</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
