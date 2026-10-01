import { useState } from "react";

import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Modal from "./components/Modal";
import UserForm from "./components/UserForm";

import "./App.css";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mohit Singh",
      email: "mohitsingh05003@gmail.com",
      number: "9725480629",
      age: 23,
      status: "Active",
    },
    {
      id: 2,
      name: "Rohan Pandit",
      email: "rohanpandit@gmail.com",
      number: "9876543210",
      age: 35,
      status: "Active",
    },
    {
      id: 3,
      name: "Prince Chauhan",
      email: "princechauchan@gmail.com",
      number: "9876543210",
      age: 25,
      status: "Active",
    },
    {
      id: 4,
      name: "Meet Ramani",
      email: "meetramani@gmail.com",
      number: "9876543210",
      age: 20,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Ayush Pritoda",
      email: "ayushpritoda@gmail.com",
      number: "9876543210",
      age: 50,
      status: "Active",
    },
    {
      id: 6,
      name: "Shubham Jain",
      email: "shubhamjain@gmail.com",
      number: "9876543210",
      age: 40,
      status: "Active",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // ADD / UPDATE USER
  const handleSubmit = (formData) => {
    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id
            ? { ...formData, id: editingUser.id }
            : user
        )
      );
    } else {
      const newUser = {
        ...formData,
        id: users.length
          ? Math.max(...users.map((user) => user.id)) + 1
          : 1,
      };

      setUsers([...users, newUser]);
    }

    setIsFormOpen(false);
    setEditingUser(null);
  };

  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  
  const handleEdit = (user) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  
  const handleAddUser = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };


  const handleClose = () => {
    setIsFormOpen(false);
    setEditingUser(null);
  };

  return (
    <div className="app">
      <Navbar />

      <main className="main-container">

        
        <div className="page-header">
          <div>
            <span className="page-label">ADMIN DASHBOARD</span>

            <h1>User Management</h1>

            <p>
              Manage, edit and organize all your users in one place.
            </p>
          </div>

          <button
            className="add-user-btn"
            onClick={handleAddUser}
          >
            <span>+</span>
            Add New User
          </button>
        </div>

        
        <div className="stats-container">

          <div className="stat-card">
            <div>
              <p>Total Users</p>
              <h2>{users.length}</h2>
            </div>

            <div className="stat-icon blue">U</div>
          </div>

          <div className="stat-card">
            <div>
              <p>Active Users</p>
              <h2>
                {users.filter((user) => user.status === "Active").length}
              </h2>
            </div>

            <div className="stat-icon green">✓</div>
          </div>

          <div className="stat-card">
            <div>
              <p>Inactive Users</p>
              <h2>
                {users.filter((user) => user.status === "Inactive").length}
              </h2>
            </div>

            <div className="stat-icon orange">!</div>
          </div>
        </div>

        
        <Table
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </main>

      
      {isFormOpen && (
        <Modal
          title={editingUser ? "Edit User" : "Add New User"}
          onClose={handleClose}
        >
          <UserForm
            user={editingUser}
            onSubmit={handleSubmit}
            onCancel={handleClose}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;