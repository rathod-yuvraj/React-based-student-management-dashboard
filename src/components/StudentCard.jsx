// src/components/StudentCard.jsx
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
      <p>Age: {student.age}</p>
      <Link to={`/students/${student.id}`}>View Details</Link>
    </div>
  );
}
export default StudentCard;