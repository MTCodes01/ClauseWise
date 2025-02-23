import { motion } from "framer-motion";
import { AppWindow as Windows, HelpCircle } from "lucide-react";

const Download = () => {
  const version = "v1.1";
  const downloads = [
    {
      icon: <Windows className="h-12 w-12" />,
      name: "Windows",
      version: version,
      requirements: "Windows 10 or later",
      link: `https://github.com/Pranay1315/ClauseWise/releases/download/${version}/app.exe`,
    },
    // Add more download options
  ];

  const faqs = [
    {
      question: "How do I install ClauseWise?",
      answer:
        "Download the appropriate version for your operating system and run the installer. Follow the on-screen instructions to complete the installation.",
    },
    {
      question: "Is an internet connection required?",
      answer:
        "No, ClauseWise works completely offline. However, you'll need an internet connection for the initial download and updates.",
    },
    {
      question: "How are my documents stored?",
      answer:
        "All documents are stored locally on your device with encryption. We never store your documents on our servers.",
    },
    {
      question: "Can I transfer my documents between devices?",
      answer:
        "Yes, you can export your documents and import them on another device running ClauseWise.",
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
            Download ClauseWise
          </motion.h1>
          <p className="text-xl text-gray-600">
            Choose your platform and get started today
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center mx-auto px-20"
          >
            <div className="text-blue-600 mb-4 flex items-center justify-center">
              {downloads[0].icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{downloads[0].name}</h3>
            <p className="text-gray-600 mb-2">{downloads[0].version}</p>
            <p className="text-sm text-gray-500 mb-4">
              {downloads[0].requirements}
            </p>
            <a
              href={downloads[0].link}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Download
            </a>
          </motion.div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
