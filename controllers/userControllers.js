
const users = [];


// Create a new user object and push it into the 'users' array
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const newUser = { username, password };
    users.push(newUser);

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred!!' });
  }
};

// Retrieve all users
exports.getUsers = async (req, res) => {
  try {
    
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred!!' });
  }
};

// Find a user with the provided username and password

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred!!' });
  }
};

