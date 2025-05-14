// src/services/students.js
const mockStudents = [
  { id: 1, name: 'Amar Patil', email: 'john@example.com', course: 'Computer Science', age: 20 },
  { id: 2, name: 'Avinash Patil ', email: 'jane@example.com', course: 'Mathematics', age: 22 },
  { id: 3, name: 'Ganesh Jadhav', email: 'bob@example.com', course: 'Physics', age: 21 },
];

export const fetchStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockStudents]);
    }, 1000);
  });
};

export const addStudent = (student) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newStudent = {
        ...student,
        id: mockStudents.length + 1
      };
      mockStudents.push(newStudent);
      resolve(newStudent);
    }, 500);
  });
};