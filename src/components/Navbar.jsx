import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        <div className="logo-icon">
          U
        </div>

        <div>
          <h2>UserManager</h2>
          <span>Admin Dashboard</span>
        </div>
      </div>

      <div className="navbar-profile">

        <div className="notification">
          🔔
        </div>

        <div className="profile-avatar">
          M
        </div>

        <div className="profile-text">
          <strong>Mohit Singh</strong>
          <span>Administrator</span>
        </div>

      </div>

    </header>
  );
}

export default Navbar;