import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from '../services/auth';
import { useState } from 'react';
import { FaBars, FaTimes, FaUserGraduate } from 'react-icons/fa';

import '../components/styles/Navbar.css'; // Import your CSS file for styling
export function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <FaUserGraduate className="navbar-icon" />
          <Link to="/" className="navbar-logo">
            Student Dashboard
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Students
              </Link>
            </li>

            {currentUser ? (
              <>
                <li>
                  <Link to="/add" onClick={() => setIsMobileMenuOpen(false)}>
                    Add Student
                  </Link>
                </li>
                <li>
                  <button
                    className="logout-button"
                    onClick={handleLogout}
                  >
                    Logout ({currentUser.email})
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}