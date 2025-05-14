// src/components/StudentForm.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    age: ''
  });
  const [errors, setErrors] = useState({});
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.course) newErrors.course = 'Course is required';
    if (!formData.age || isNaN(formData.age)) newErrors.age = 'Valid age is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        course: '',
        age: ''
      });
    }
  };

  if (!currentUser) {
    return <p>Please login to add students</p>;
  }

  return (
    <div className="student-form">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <span className="error">{errors.course}</span>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="16"
            max="99"
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}