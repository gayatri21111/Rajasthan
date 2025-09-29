import React from "react";
import "./App.css";
function App() {
  const cardsRow1 = [
    {
      title: "User Management",
      emoji: "👥",
      type: "user-management",
      features: [
        "Create & manage user accounts",
        "Assign roles and permissions",
        "Track staff and student activity",
        "Reset passwords securely",
        "Generate user activity reports",
      ],
    },
    {
      title: "Admission Management",
      emoji: "📋",
      type: "admission-management",
      features: [
        "Manage student enrollment records",
        "Track admission applications",
        "Assign courses to new students",
        "Generate admission receipts",
        "Automate merit list generation",
      ],
    },
    {
      title: "Financial Management",
      emoji: "💳",
      type: "financial-management",
      features: [
        "Handle fee collection and dues",
        "Track scholarship & concessions",
        "Generate financial reports",
        "Monitor outstanding balances",
        "Automate payment reminders",
      ],
    },
  ];

  const cardsRow2 = [
    {
      title: "Library Management",
      emoji: "📖",
      type: "library-management",
      features: [
        "Maintain book catalog",
        "Track borrow & return records",
        "Manage inventory and stock",
        "Issue overdue reminders",
        "Support e-book integration",
      ],
    },
    {
      title: "Hostel Management",
      emoji: "🏢",
      type: "hostel-management",
      features: [
        "Manage hostel room allocations",
        "Track occupancy & facilities",
        "Maintain student resident lists",
        "Generate hostel fee reports",
        "Schedule maintenance tasks",
      ],
    },
  ];

  const handleLogin = (userType) => {
    const messages = {
      student: "🎓 Welcome Student! This would redirect to the student portal.",
      admin: "👨‍💼 Welcome Admin! This would redirect to the administrative dashboard.",
    };
    alert(messages[userType]);
  };

  const startModule = (moduleName) => {
    const moduleNames = {
      "user-management": "User Management System 👥",
      "admission-management": "Admission Management System 📋",
      "financial-management": "Financial Management System 💳",
      "library-management": "Library Management System 📖",
      "hostel-management": "Hostel Management System 🏢",
    };

    alert(
      `🎉 Starting ${moduleNames[moduleName]}! This would open the ${moduleName.replace(
        "-",
        " "
      )} dashboard.`
    );
  };

  const renderCard = (card) => (
    <div className={`card ${card.type}`} key={card.type}>
      <h3>
        <span className="card-emoji">{card.emoji}</span> {card.title}
      </h3>
      <div className="card-content">
        <ul>
          {card.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
      <button className="card-btn" onClick={() => startModule(card.type)}>
        🚀 Start Now
      </button>
    </div>
  );

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🎓 Vision<span>Next</span></div>
        <div className="nav-right">
          <button className="login-btn" onClick={() => handleLogin("student")}>
            👨‍🎓 Student Login
          </button>
          <button className="login-btn" onClick={() => handleLogin("admin")}>
            👨‍💼 Admin Login
          </button>
        </div>
      </header>

      {/* First Row */}
      <section className="cards-section">
        <div className="cards-container">{cardsRow1.map(renderCard)}</div>
      </section>

      {/* Second Row */}
      <section className="cards-section">
        <div className="cards-container">{cardsRow2.map(renderCard)}</div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} VisionNext.
      </footer>
    </div>
  );
}

export default App;
