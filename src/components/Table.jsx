import { useState } from "react";
import "./Table.css";

function Table({ users, onEdit, onDelete }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.number.includes(searchText);

    const matchesStatus =
      status === "All" || user.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="table-card">

      

      <div className="table-top">
        <div>
          <h2>All Users</h2>
          <p>{filteredUsers.length} users found</p>
        </div>

        <div className="table-filters">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>
      </div>

      

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>AGE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>

                  <td className="user-id">
                    #{String(user.id).padStart(2, "0")}
                  </td>

                  <td>
                    <div className="user-cell">
                      <div className="avatar">
                        {user.name.charAt(0).toUpperCase()}
                      </div>

                      <strong>{user.name}</strong>
                    </div>
                  </td>

                  <td className="email">
                    {user.email}
                  </td>

                  <td>{user.number}</td>

                  <td>{user.age}</td>

                  <td>
                    <span
                      className={`status ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() => onEdit(user)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => onDelete(user.id)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="no-users"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Table;