const courseModel1 = {
  id: 1, // Unique identifier for the course
  name: "Introduction to React Native",
  instructor: "John Doe", // Name of the course instructor
  description:
    "Learn the basics of React Native development and build your first mobile app.",
  enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
  thumbnail: "https://via.placeholder.com/600/92c952", // Link to the course thumbnail
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
  duration: "8 weeks", // Duration of the course
  schedule: "Tuesdays and Thursdays, 6:00 PM-8:00 PM",
  progressBar: "50%",
  dueDate: "February 28, 2024",
  location: "Online",
  prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
  syllabus: [
    {
      week: 1,
      topic: "Introduction to React Native",
      content:
        "Overview of React Native, setting up your development environment.",
    },
    {
      week: 2,
      topic: "Building Your First App",
      content: "Creating a simple mobile app using React Native components.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: 101,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    {
      id: 102,
      name: "Bob Smith",
      email: "bob@example.com",
    },
    // Additional enrolled students...
  ],
};

const courseModel2 = {
  id: 2, // Unique identifier for the course
  name: "Advanced React Native",
  instructor: "Jane Smith", // Name of the course instructor
  description: "Deep dive into advanced concepts of React Native development.",
  enrollmentStatus: "Closed", // Can be 'Open', 'Closed', or 'In Progress'
  thumbnail: "https://via.placeholder.com/600/771796", // Link to the course thumbnail
  thumbnailUrl: "https://via.placeholder.com/150/771796",
  duration: "12 weeks", // Duration of the course
  schedule: "Mondays and Wednesdays, 6:00 PM-8:00 PM",
  progressBar: "100%",
  dueDate: "February 28, 2024",
  location: "Online",
  prerequisites: ["Intermediate React Native knowledge"],
  syllabus: [
    {
      week: 1,
      topic: "Advanced State Management",
      content: "Exploring Redux and other state management libraries.",
    },
    {
      week: 2,
      topic: "Performance Optimization",
      content: "Optimizing performance using memoization and other techniques.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: 201,
      name: "Charlie Brown",
      email: "charlie@example.com",
    },
    {
      id: 202,
      name: "Diana Prince",
      email: "diana@example.com",
    },
    // Additional enrolled students...
  ],
};

const courseModel3 = {
  id: 3,
  name: "Machine Learning Fundamentals",
  instructor: "Dr. Jane Smith",
  description:
    "Learn the basics of machine learning and start building predictive models.",
  enrollmentStatus: "In Progress",
  thumbnail: "https://via.placeholder.com/600/24f355",
  thumbnailUrl: "https://via.placeholder.com/150/24f355",
  duration: "10 weeks",
  schedule: "Mondays and Fridays, 5:00 PM-7:00 PM",
  progressBar: "100%",
  dueDate: "February 28, 2024",
  location: "Online",
  prerequisites: [
    "Basic understanding of mathematics",
    "Familiarity with Python",
  ],
  syllabus: [
    {
      week: 1,
      topic: "Introduction to Machine Learning",
      content: "Overview of machine learning concepts and applications.",
    },
    {
      week: 2,
      topic: "Supervised Learning",
      content:
        "Understanding supervised learning algorithms such as linear regression and logistic regression.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: 301,
      name: "Eva Martinez",
      email: "eva@example.com",
    },
    {
      id: 302,
      name: "Frank Johnson",
      email: "frank@example.com",
    },
    // Additional enrolled students...
  ],
};

export { courseModel1, courseModel2, courseModel3 };
