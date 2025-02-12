const express = require("express");
const cors = require("cors");

// Your project data
const projectData = {
  projects: [
    {
      topic: "React",
      projects: [
        {
          title: "Employee Registration",
          description: "Register employees management.",
          techStack: ["HTML", "CSS", "JavaScript", "React"],
          features: ["CRUD", "Search", "Login", "Logout"],
          challenges: "Search did filter.",
          solution: "Fixed the id issue",
          githubLink:
            "https://github.com/EdwardCodeTriber/Employee-Registrstion",
        },
        {
          title: "To-Do List",
          description: "Create a list .",
          techStack: ["HTML", "CSS", "JavaScript", "React"],
          features: ["CRUD", "Search"],
          challenges: "Saving data to JSON",
          solution: "Made a correct format.",
          githubLink: "https://github.com/EdwardCodeTriber/Final-TODO-List",
        },
        {
          title: "Recipe App",
          description: "Create a recipe, view other recipe .",
          techStack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
          features: ["CRUD", "Search"],
          challenges:
            "Conditional rendering, Logged in users see other users recipes",
          solution: "Found a good format to use Conditional rendering.",
          githubLink:
            "https://github.com/EdwardCodeTriber/Online-Recipe-website-",
        },
        {
          title: "Hotel App",
          description:
            "Create a hotel application for users to book a stay and pay .",
          techStack: ["HTML", "CSS", "JavaScript", "React", "Redux", "MUI"],
          features: ["CRUD", "Search", "Payment Gateway", "Reviews"],
          challenges:
            "State Managment issue, push notifications, payment gayeway, Login sessions",
          solution:
            "Finally understood how to solve these different issues through research, Documentation.",
          githubLink: "https://github.com/EdwardCodeTriber/T.E-Hotels",
        },
      ],
    },
    {
      topic: "Node",
      projects: [
        {
          title: "Timed App",
          description: "A app that ask question asynchronous",
          techStack: ["JavaScript", "Node.js", "Express"],
          features: ["Timed questions"],
          challenges: "Handling asynchronous operations.",
          solution: "Used async/await and Promises effectively.",
          githubLink: "https://github.com/EdwardCodeTriber/Event-Loops",
        },
        {
          title: "Employee System with a security feature",
          description:
            "A application done with reactJs and added a security feature of firebase with node to ensure secure sessions",
          techStack: [
            "JavaScript",
            "Node.js",
            "Express",
            "MUI",
            "Axios",
            "firebase",
          ],
          features: [
            "CRUD",
            "Search",
            "Login",
            "LogOut",
            "Server side running on Node.js",
            "Client side running on React.js",
          ],
          challenges:
            "Sessions persistance: Auto logges out after performing an action",
          solution: "Used firebase Auth to persist the logged in admin/user.",
          githubLink:
            "https://github.com/EdwardCodeTriber/employee-register-security-layer",
        },
        {
          title: "Node OpenAI(ChatBot)",
          description: "OpenAI Chat bot ",
          techStack: [
            "JavaScript",
            "Node.js",
            "body-parser",
            "dotenv",
            "express",
            "nodemon",
            "openai",
          ],
          features: ["Ask any quetion then receive a answer"],
          challenges: "Struggling to find a free OpenAI",
          solution: "Google OpenAI",
          githubLink: "https://github.com/EdwardCodeTriber/Node-OpenAI",
        },
        {
          title: "Card Guessing game",
          description:
            "Match cards, recieve score, repeat. 36 cards: 6 rows and 6 columns",
          techStack: [
            "JavaScript",
            "Node.js",
            "body-parser",
            "dotenv",
            "express",
            "nodemon",
            "openai",
          ],
          features: [
            "When the page is opened, automatically set the cards and hide their contents",
            "Users can reset the game whenever they choose, changing the position of the cards",
            "When the user wins, display a pop up to congratulate the user on winning.",
          ],
          challenges: "matched cards would reset continuasly ",
          solution:
            "Added a empty array on the useEffect dependency, so that it captures the matched values",
          githubLink: "https://github.com/EdwardCodeTriber/Card-Guessing-Game",
        },
      ],
    },
    {
      topic: "MongoDB",
      projects: [
        {
          title: "Recipe App Authentication",
          description: "A react app, added a mongo Auth",
          techStack: ["Node.js", "MongoDB", "cors", "React", "JavaScript"],
          features: ["Authentication"],
          challenges: "Cors. App would not communicate with backend",
          solution: "Used schema design best practices and indexing.",
          githubLink:
            "https://github.com/EdwardCodeTriber/Recipe-App-Authentication",
        },
        {
          title: "Library Management Systems with MongoDB Commands",
          description: "",
          techStack: ["MongoDB", "MongoDB Shell"],
          features: ["CRUD", "Advanced Queries with Operators"],
          challenges: "Understanding MongoDB commands",
          solution: "Learned how to create a LMS with MongoDB",
          githubLink: "https://github.com/EdwardCodeTriber/LMS-MongoDB",
        },
      ],
    },
    {
      topic: "React Native",
      projects: [
        {
          title: "Shopping App",
          description: "Make a shopping list.",
          techStack: ["JavaScript", "React Native"],
          features: ["CRUD", "View Completed"],
          challenges: "Building a cross-platform app.",
          solution: "Leveraged React Native components for iOS and Android.",
          githubLink: "https://github.com/EdwardCodeTriber/rn-Shopping_list",
        },
        {
          title: "Gallery App",
          description: "Take picture, create a album of photos",
          techStack: ["JavaScript", "React Native", "SQL"],
          features: ["CRUD", "View pictures", "Location of the Image", "Map View"],
          challenges: "pin pointing where the image was taken",
          solution: "Used useEffect to correctly capture the image on capture the store it locally with the location geolocation, then pin it on the map",
          githubLink: "https://github.com/EdwardCodeTriber/rn-Gallery-Application",
        },
        {
          title: "Restaurant App",
          description: "Make a shopping list.",
          techStack: [
            "Frontend: React Native",
            "Backend: Node.js",
            "Database: MongoDB",
            "Payment: Stripe",
            "Maps: React Native Maps",
            "HTTP Client: Axios",
            "State Management: React Hooks",
          ],
          features: [
            "Restaurant Discovery: Browse and search through a curated list of restaurants",
            "Real-time Booking: Check availability and make instant reservations",
            "Secure Payments: Integrated Stripe payment processing",
            "User Profiles: Personalized experience with favorite restaurants and booking history",
            "Reviews & Ratings: Share your dining experiences",
            "Interactive Maps: Find restaurants near you",
            "Smart Scheduling: View available time slots in real-time",
          ],
          challenges: [
            "Image not displaying on the front-end",
            "State persistance",
            "Payment high traffic",
          ],
          solution: "Used firebase and google picture for the url.",
          githubLink:
            "https://github.com/EdwardCodeTriber/Restaurant-reservations-app",
        },
      ],
    },
  ],
};

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get all projects
app.get("/api/projects", (req, res) => {
  res.json(projectData);
});

// Get projects by topic
app.get("/api/projects/:topic", (req, res) => {
  const topic = req.params.topic;
  const topicProjects = projectData.projects.find(
    (p) => p.topic.toLowerCase() === topic.toLowerCase()
  );

  if (topicProjects) {
    res.json(topicProjects);
  } else {
    res.status(404).json({ message: "Topic not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
