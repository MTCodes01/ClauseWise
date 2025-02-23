const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legal</h3>
            <p className="mt-4 text-sm text-gray-500">
              This software is not a substitute for legal advice. Please consult with a licensed attorney for legal matters.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ClauseWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;