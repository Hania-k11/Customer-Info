const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sql = require("mssql");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// SQL Server configuration
const dbConfig = {
  user: "admin",
  password: "12345",
  server: "DESKTOP-2OJB142",
  database: "CustomerDB",
  options: {
    encrypt: true, // Required for Azure
    trustServerCertificate: true, // For local dev
  },
};

// Connect to database
sql.connect(dbConfig, (err) => {
  if (err) {
    console.error("Database connection failed", err);
  } else {
    console.log("Database connected successfully!");
  }
});

// Routes
app.post("/api/customers", async (req, res) => {
  const { name, email, contact } = req.body;
  try {
    const result = await sql.query(
      `INSERT INTO Customer (Name, Email, Contact) VALUES ('${name}', '${email}', '${contact}')`
    );
    res.status(200).send("Customer added successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/customers", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM Customer");
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
