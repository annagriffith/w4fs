const express = require('express');
const cors = require('cors');

// Create the backend app and set the port for the Node server.
const app = express();
const PORT = 3001;

// This class defines the structure of a user in the mock database.
class User {
  constructor(username, birthdate, age, email, password, valid) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = valid;
  }
}

// This is the hard-coded list of valid users for the workshop.
const users = [
  new User('Anna Griffith', '2001-04-17', 25, 'anna@student.edu', 'anna123', true),
  new User('Liam Cooper', '1999-11-02', 26, 'liam@student.edu', 'liam123', true),
  new User('Mia Patel', '2002-07-28', 24, 'mia@student.edu', 'mia123', true),
];

// Allow the Angular app to talk to this API from a different port.
app.use(cors());
app.use(express.json());

// This route checks the login details submitted from the Angular app.
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;

  // Find a user whose email and password match the request.
  const matchedUser = users.find(
    (user) => user.email === email && user.password === password,
  );

  // If no user matches, return invalid.
  if (!matchedUser) {
    return res.json({ valid: false });
  }

  // If valid, send the user information back without the password.
  return res.json({
    username: matchedUser.username,
    birthdate: matchedUser.birthdate,
    age: matchedUser.age,
    email: matchedUser.email,
    valid: true,
  });
});

// Start the server and confirm it is running.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
