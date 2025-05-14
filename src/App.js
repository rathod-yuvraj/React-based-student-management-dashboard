// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useStudents } from './hooks/useStudents';
import { Navbar } from './components/Navbar';
import { StudentList } from './components/StudentList';
import { StudentForm } from './components/StudentForm';
import { Login } from './components/Login';
import SignUp from './components/SignUp'

import { AuthGuard } from './components/AuthGuard';
import './App.css';

function AppContent() {
  const { students, loading, error, createStudent } = useStudents();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <>
              <AuthGuard>
                <StudentForm onSubmit={createStudent} />
              </AuthGuard>
              <StudentList
                students={students}
                loading={loading}
                error={error}
              />
            </>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}