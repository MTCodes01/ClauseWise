# ClauseWise ⚖️

ClauseWise is an open-source platform designed to assist individuals and businesses in generating legal documents with ease. Our mission is to simplify legal paperwork, making it more accessible, affordable, and efficient for everyone.

## 🎯 Purpose

ClauseWise serves as a smart, user-friendly platform that democratizes access to legal document generation. Whether you're a small business owner, freelancer, legal professional, or an individual, ClauseWise helps you create accurate legal documents without the complexity.

## ✨ Features

- 📝 Document Drafting: Create custom legal documents with guided assistance
- 📋 Pre-made Legal Templates: Access a variety of ready-to-use legal document templates
- 🔄 Multiple Optional Templates: Choose from different variations to suit your specific needs
- 🎨 User-friendly Interface: Intuitive design for seamless document creation

## 👥 Target Users

- Small Business Owners
- Freelancers
- Legal Professionals
- Individuals needing legal documentation

## Project Structure

```
ClauseWise/
├── Backend/                 # Django backend
│   ├── app/                # Django app directory
│   ├── Backend/            # Django project settings
│   ├── db.sqlite3          # SQLite database
│   └── manage.py           # Django management script
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── pages/              # React pages
│   └── ...                # Other React configuration files
├── main.py                 # Python executable file
├── build.bat              # First-time setup script
└── start.bat              # Startup script
```

## Prerequisites

Before running the application, make sure you have:
- Python 3.8 or higher
- Node.js 14.0 or higher

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ClauseWise.git
cd ClauseWise
```

2. First-time setup:
```bash
build.bat
```
This will automatically:
- Install all required Python packages
- Install necessary Node modules
- Set up the application environment

3. Run the application:
```bash
start.bat
```
This will:
- Start the Django backend server
- Launch the React development server
- Automatically open the application in your default browser at `http://localhost:8000`

## Manual Installation (Alternative Method)

If you prefer to install manually or encounter any issues with the batch files:

1. Set up the backend:
```bash
cd Backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```

2. Set up the frontend:
```bash
cd ../
npm install  # or yarn install
```

3. Start servers separately:
- Backend: `cd Backend && python manage.py runserver`
- Frontend: `npm run dev` (in a new terminal)

## Development

- The React development server includes hot-reloading
- The SQLite database is included in the repository
- Python executable (`main.py`) can be run separately if needed

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite bundler configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint configuration

## 🤝 Contributing

ClauseWise is an open-source project, and we welcome contributions from everyone! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

### Ways to Contribute
- Add new legal document templates
- Improve existing templates
- Enhance the user interface
- Fix bugs
- Add new features
- Improve documentation
- Share feedback and suggestions

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, questions, or feedback:
- Open an issue in the GitHub repository

## 🌟 Show Your Support

If you find ClauseWise helpful, please consider:
- Starring the repository
- Sharing it with others who might benefit
- Contributing to its development

Together, we can make legal documentation more accessible for everyone!
