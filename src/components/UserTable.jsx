import "./UserTable.css";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th className="action-column">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-table">
                <div className="empty-icon">⌕</div>
                <h3>No users found</h3>
                <p>Try changing your search or filter.</p>
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td className="user-id">
                  #{String(user.id).padStart(2, "0")}
                </td>

                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    <span>{user.name}</span>
                  </div>
                </td>

                <td className="email-cell">{user.email}</td>

                <td>{user.phone}</td>

                <td>
                  <span
                    className={`status ${
                      user.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }`}
                  >
                    <span className="status-dot"></span>
                    {user.status}
                  </span>
                </td>

                <td>
                  <div className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(user)}
                      title="Edit user"
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(user)}
                      title="Delete user"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;