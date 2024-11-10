Fursa - Job Application Platform About Fursa is a job application platform designed specifically for the youth of Mombasa. The app provides a user-friendly interface where young people can easily apply for jobs, create profiles, track applications, and receive updates on their application status. Fursa aims to simplify the job application process, empowering the youth with tools to manage their career opportunities.

Additionally, Fursa integrates CortexAI, a powerful chatbot system, allowing users to interact with an AI-powered assistant for career guidance, job recommendations, and job application assistance.

Features User Profiles: Create and manage personal profiles, showcasing skills, qualifications, and work experience. Job Listings: View a curated list of job openings relevant to the user’s skills and interests. Job Applications: Apply directly to job listings with a simple, seamless process. Notifications: Get real-time notifications for new job opportunities and application status updates. Resume Builder: A built-in resume builder to help users create professional resumes quickly. Job Tracker: Track the status of job applications in one place. CortexAI Integration: Career Guidance: Get personalized advice from the AI assistant based on your profile and interests. Job Recommendations: Receive AI-powered job recommendations tailored to your profile. Chatbot Assistance: Use CortexAI to get answers to questions related to the job application process, skills improvement, and more. Custom AI Training: Admins can train CortexAI to answer frequently asked questions, guide users, and enhance engagement. Tech Stack Frontend: React Native, Expo Backend: Node.js, Express.js, MongoDB (for user and job data) Authentication: JWT (JSON Web Tokens) for secure user authentication Database: MongoDB (storing user data, job applications, job listings) Real-time Notifications: Firebase or similar services for push notifications UI/UX: Designed with a focus on simplicity, user-friendliness, and accessibility AI Integration: CortexAI for personalized career guidance and chatbot services. Prerequisites Before you start, ensure that you have the following installed:

Node.js: Install Node.js (version 16 or later recommended) Expo CLI: Install Expo CLI MongoDB: A running instance of MongoDB for storing user and job data. CortexAI Account: An account with CortexAI to train and manage the AI assistant for the app. Getting Started Follow these steps to set up the app locally:

Clone the repository: bash Copy code git clone https://github.com/GabrielPlus/fursa.git cd fursa
Install dependencies: Run the following command to install all required dependencies:
bash Copy code npm install 3. Set up environment variables: Create a .env file in the root directory to define any environment variables (will be given, DIYEM).

Start the development server: Run the following command to start the app:
bash Copy code npm run start For Android, you can use the following:

bash Copy code npm run android The app should now be available on your Android emulator or physical device.

Authentication API: Fursa uses Clerk for authentication. The API allows users to sign up, log in, and view their profile and application status:
POST /api/auth/signup: Register a new user. POST /api/auth/login: Log in to an existing account. GET /api/users/me: Retrieve user profile information. POST /api/jobs/apply: Apply for a job. 6. Job Listings API: GET /api/jobs: Get a list of available job openings. POST /api/jobs: Add a new job listing (Admin only). 7. CortexAI Integration: Train CortexAI: Admins can train CortexAI with frequently asked questions and job-related queries via the admin dashboard or API. Chatbot Interface: Users can interact with the CortexAI chatbot within the app for career guidance, job recommendations, and questions.

Running Tests If you have set up tests for the platform, you can run them using:

bash Copy code npm test Contributing We welcome contributions! If you'd like to contribute to Fursa, please follow these steps:

Fork the repository. Create a new branch for your changes. Make your changes. Submit a pull request for review. License This project is licensed under the MIT License - see the LICENSE file for details.