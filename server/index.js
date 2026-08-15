const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

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

const users = [
  new User('Anna Griffith', '2001-04-17', 25, 'anna@student.edu', 'anna123', true),
  new User('Liam Cooper', '1999-11-02', 26, 'liam@student.edu', 'liam123', true),
  new User('Mia Patel', '2002-07-28', 24, 'mia@student.edu', 'mia123', true),
];

app.use(cors());
app.use(express.json());

app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!matchedUser) {
    return res.json({ valid: false });
  }

  return res.json({
    username: matchedUser.username,
    birthdate: matchedUser.birthdate,
    age: matchedUser.age,
    email: matchedUser.email,
    valid: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
