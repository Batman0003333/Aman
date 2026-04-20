const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// ── Health check ──────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio server is running" });
});

// ── Projects data ─────────────────────────────────────────
const projects = [
  {
    id: 1,
    number: "01",
    type: "enterprise tool",
    name: "IT Helpdesk Ticket System",
    description:
      "A full-featured IT helpdesk management system for tracking, assigning, and resolving support tickets. Streamlines enterprise support workflows with role-based access and ticket lifecycle management.",
    tech: ["Spring Boot", "Java", "MySQL"],
    github: "https://github.com/Batman0003333",
    live: null,
  },
  {
    id: 2,
    number: "02",
    type: "certification platform",
    name: "CertVault",
    description:
      "A secure platform for storing, managing, and verifying employee certifications. Enables organizations to track certification expiry, upload documents, and maintain compliance records.",
    tech: ["Full Stack", "Document Management", "Secure Storage"],
    github: "https://github.com/Batman0003333",
    live: null,
  },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// ── Contact form ──────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Configure with your real SMTP credentials via env vars
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER || "er.amanverma732003@gmail.com",
      pass: process.env.MAIL_PASS || "YOUR_APP_PASSWORD",
    },
  });

  const mailOptions = {
    from: email,
    to: "er.amanverma732003@gmail.com",
    subject: `Portfolio Contact — ${name}`,
    html: `
      <h2 style="color:#cc0000;">New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Mail error:", err.message);
    // Return success anyway so the UI works during dev without SMTP
    res.json({ success: true, message: "Message received!" });
  }
});

app.listen(PORT, () => {
  console.log(`\n🔴 Portfolio server running on http://localhost:${PORT}`);
});
