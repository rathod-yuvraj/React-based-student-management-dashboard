



# Student Management Dashboard

A React-based dashboard for managing student data with Firebase authentication.

## Features

- **Student Management**: View, filter, and add student records
- **Firebase Authentication**: Secure login with Google authentication
- **Responsive Design**: Works on desktop and mobile devices
- **Mock API Integration**: Simulates backend API calls for demonstration

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Set up Firebase authentication:
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Google authentication in the Firebase Authentication section
   - Create a web app in your Firebase project
   - Copy the Firebase configuration values to your environment variables

3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following Firebase configuration variables:
     ```
     VITE_FIREBASE_API_KEY=your_api_key_here
     VITE_FIREBASE_PROJECT_ID=your_project_id_here
     VITE_FIREBASE_APP_ID=your_app_id_here

     # Database Configuration (optional)
     # Set to 'true' to use database storage, 'false' for in-memory storage
     USE_DATABASE=false
     # Your PostgreSQL connection string
     DATABASE_URL=your_postgres_connection_string
     ```

4. Start the development server:
   ```
   # Using npm script (on macOS/Linux)
   npm run dev

   # Using provided scripts (recommended for all platforms)
   # On macOS/Linux
   ./start-dev.sh

   # On Windows (Command Prompt)
   start-dev.bat

   # On Windows (PowerShell)
   .\start-dev.ps1

   # Direct command (works on all platforms)
   npx tsx server/index.ts
   ```

5. Open your browser to the URL shown in the console (typically http://localhost:5000)

## Authentication

To access protected features like viewing student details or adding new students, click the "Login" button in the header and complete the Google authentication flow.

## Usage

- **View Students**: The main dashboard displays all student records
- **Filter Students**: Use the filters to search by course, year, or name/email/ID
- **Add Student**: Click the "Add Student" button (requires login)
- **View Details**: Click "View Details" on any student card (requires login)

## Database Configuration (Optional)

By default, the application uses in-memory storage for development and demonstration purposes. To enable PostgreSQL:

1. Set up a PostgreSQL database and obtain a connection string
2. Update your `.env` file:
   ```
   USE_DATABASE=true
   DATABASE_URL=your_postgres_connection_string
   ```
3. Run database migrations:
   ```
   npm run db:push
   ```
4. Restart the application

## Technologies Used

- React + TypeScript
- Firebase Authentication
- TanStack Query (React Query)
- Tailwind CSS + Shadcn UI
- Express (backend)
- PostgreSQL (optional database)
- Drizzle ORM
- Vite (frontend build tool)

4. Start the development server:
   ```
   # On macOS/Linux
   npm run dev

   # On Windows (using Command Prompt)
   set NODE_ENV=development && npx tsx server/index.ts

   # On Windows (using PowerShell)
   $env:NODE_ENV="development"; npx tsx server/index.ts

   # Using cross-env (recommended for cross-platform compatibility)
   npx cross-env NODE_ENV=development tsx server/index.ts
   ```


