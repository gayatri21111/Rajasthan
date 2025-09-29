import React from "react";
import "./App.css";

function App() {
  const cardsRow1 = [
    {
      title: "User Management",
      emoji: "👥",
      type: "user-management",
      buttonText: "Manage Users",
      features: [
        "Create & manage user accounts",
        "Assign roles and permissions",
        "Track staff and student activity",
        "Reset passwords securely",
        "Generate user activity reports",
      ],
      action: () =>
        window.open("https://your-vercel-link.com/user-management", "_blank"),
    },
    {
      title: "Admission Management",
      emoji: "📋",
      type: "admission-management",
      buttonText: "Handle Admissions",
      features: [
        "Manage student enrollment records",
        "Track admission applications",
        "Assign courses to new students",
        "Generate admission receipts",
        "Automate merit list generation",
      ],
      action: () =>
        window.open("https://xyz-swart-nine.vercel.app/", "_blank"),
    },
    {
      title: "Fees Management",
      emoji: "💳",
      type: "financial-management",
      buttonText: "View Finances",
      features: [
        "Handle fee collection and dues",
        "Track scholarship & concessions",
        "Generate financial reports",
        "Monitor outstanding balances",
        "Automate payment reminders",
      ],
      action: () =>
        window.open("https://your-vercel-link.com/finances", "_blank"),
    },
  ];

  const cardsRow2 = [
    {
      title: "Library Management",
      emoji: "📖",
      type: "library-management",
      buttonText: "Open Library",
      features: [
        "Maintain book catalog",
        "Track borrow & return records",
        "Manage inventory and stock",
        "Issue overdue reminders",
        "Support e-book integration",
      ],
      action: () =>
        window.open("https://library-eosin-phi.vercel.app/", "_blank"), // ✅ your Vercel link here
    },
    {
      title: "Hostel Management",
      emoji: "🏢",
      type: "hostel-management",
      buttonText: "Manage Hostel",
      features: [
        "Manage hostel room allocations",
        "Track occupancy & facilities",
        "Maintain student resident lists",
        "Generate hostel fee reports",
        "Schedule maintenance tasks",
      ],
      action: () =>
        window.open("https://your-vercel-link.com/hostel", "_blank"),
    },
  ];

  const handleLogin = (userType) => {
    const urls = {
      student: "https://login-eight-sepia.vercel.app/",
    };
    window.open(urls[userType], "_blank");
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
      <button
        className={`card-btn ${card.type}-btn`}
        onClick={card.action}
      >
        🚀 {card.buttonText}
      </button>
    </div>
  );

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          🎓 Vision<span>Next</span>
        </div>
        <div className="nav-right">
          <button className="login-btn" onClick={() => handleLogin("student")}>
            👨‍🎓 Student/admin Login
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
        © {new Date().getFullYear()} VisionNext. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
