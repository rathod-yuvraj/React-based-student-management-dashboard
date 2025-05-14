// src/components/StudentList.jsx
import { useState } from 'react';

import StudentCard from './StudentCard';

export function StudentList({ students, loading, error }) {
  const [courseFilter, setCourseFilter] = useState('');

  const filteredStudents = courseFilter
    ? students.filter(student =>
        student.course.toLowerCase().includes(courseFilter.toLowerCase()))
    : students;

  if (loading) return <div>Loading students...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="student-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by course"
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
        />
      </div>

      {filteredStudents.length === 0 ? (
        <p>No students found</p>
      ) : (
        <div className="students-grid">
          {filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}