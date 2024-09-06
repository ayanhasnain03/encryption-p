import express from "express";
import { MyBcrypt } from "encryption-p"; // Custom bcrypt-like package
import { emailValidator } from "validhasnain-validatorator"; // Email validator package

const app = express();
app.use(express.json());

// Temporary storage to simulate a database
const users = [];
console.log("Users:", users);
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Validate the email
  const parsedEmail = emailValidator.safeParse(email);
  if (!parsedEmail.success) {
    const errorMessages = parsedEmail.error.errors.map(
      (error) => error.message
    );
    return res.status(400).json({ success: false, errors: errorMessages });
  }

  // Hash the password using MyBcrypt
  const hashedPassword = MyBcrypt.hash(password);

  // Store the user in a simulated database (in-memory for now)
  users.push({ email, hashedPassword });
  console.log("User registered:", { email, hashedPassword });

  res.status(200).json({ success: true, message: "Registration successful" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate the email
  const parsedEmail = emailValidator.safeParse(email);
  if (!parsedEmail.success) {
    return res.status(400).json({
      success: false,
      errors: parsedEmail.error.errors.map((error) => error.message),
    });
  }

  // Retrieve user based on email (simulating database lookup)
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ success: false, errors: ["User not found"] });
  }

  // Compare the entered password with the stored hashed password
  const isMatch = MyBcrypt.compare(password, user.hashedPassword);
  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, errors: ["Invalid email or password"] });
  }

  res.status(200).json({ success: true, message: "Login successful" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
