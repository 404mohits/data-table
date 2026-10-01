import { useEffect, useState } from "react";
import "./UserForm.css";

function UserForm({ user, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    status: "Active",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        number: user.number,
        age: user.age,
        status: user.status,
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.age
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSubmit({
      ...formData,
      age: Number(formData.age),
    });
  };

  return (
    <form
      className="user-form"
      onSubmit={handleSubmit}
    >

      <div className="form-group">
        <label>Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>

        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="text"
            name="number"
            placeholder="10 digit number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Age</label>

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="form-group">
        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="form-actions">

        <button
          type="button"
          className="cancel-btn"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="submit-btn"
        >
          {user ? "Update User" : "Add User"}
        </button>

      </div>

    </form>
  );
}

export default UserForm;