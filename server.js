const express = require('express');
const cors = require('cors');

// Your project data
const projectData = {
    "projects": [
      {
        "topic": "React",
        "projects": [
          {
            "title": "Employee Registration",
            "description": "Register employees management.",
            "techStack": ["HTML", "CSS", "JavaScript", "React"],
            "features": ["CRUD", "Search", "Login", "Logout"],
            "challenges": "Search did filter.",
            "solution": "Fixed the id issue",
            "githubLink": "https://github.com/EdwardCodeTriber/Employee-Registrstion"
          },
          {
            "title": "To-Do List",
            "description": "Create a list .",
            "techStack": ["HTML", "CSS", "JavaScript", "React"],
            "features": ["CRUD", "Search"],
            "challenges": "Saving data to JSON",
            "solution": "Made a correct format.",
            "githubLink": "https://github.com/EdwardCodeTriber/Final-TODO-List"
          },
          {
            "title": "Recipe App",
            "description": "Create a recipe, view other recipe .",
            "techStack": ["HTML", "CSS", "JavaScript", "React", "Redux"],
            "features": ["CRUD", "Search"],
            "challenges": "Conditional rendering, Logged in users see other users recipes",
            "solution": "Found a good format to use Conditional rendering.",
            "githubLink": "https://github.com/EdwardCodeTriber/Online-Recipe-website-"
          }
        ]
      },
      {
        "topic": "Node",
        "projects": [
          {
            "title": "Timed App",
            "description": "A app that ask question asynchronous",
            "techStack": ["JavaScript", "Node.js", "Express"],
            "features": ["Timed questions"],
            "challenges": "Handling asynchronous operations.",
            "solution": "Used async/await and Promises effectively.",
            "githubLink": "https://github.com/EdwardCodeTriber/Event-Loops"
          }
        ]
      },
      {
        "topic": "MongoDB",
        "projects": [
          {
            "title": "Recipe App Authentication",
            "description": "A react app, added a mongo Auth",
            "techStack": ["Node.js", "MongoDB", "cors", "React", "JavaScript"],
            "features": ["Authentication"],
            "challenges": "Cors. App would not communicate with backend",
            "solution": "Used schema design best practices and indexing.",
            "githubLink": "https://github.com/EdwardCodeTriber/Recipe-App-Authentication"
          }
        ]
      },
      {
        "topic": "React Native",
        "projects": [
          {
            "title": "Shopping App",
            "description": "Make a shopping list.",
            "techStack": ["JavaScript", "React Native"],
            "features": ["CRUD", "View Completed"],
            "challenges": "Building a cross-platform app.",
            "solution": "Leveraged React Native components for iOS and Android.",
            "githubLink": "https://github.com/EdwardCodeTriber/rn-Shopping_list"
          }
        ]
      }
    ]
};

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get all projects
app.get('/api/projects', (req, res) => {
    res.json(projectData);
});

// Get projects by topic
app.get('/api/projects/:topic', (req, res) => {
    const topic = req.params.topic;
    const topicProjects = projectData.projects.find(p => p.topic.toLowerCase() === topic.toLowerCase());
    
    if (topicProjects) {
        res.json(topicProjects);
    } else {
        res.status(404).json({ message: 'Topic not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});