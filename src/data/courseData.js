import course1Img from '../assets/course-1.png';
import course2Img from '../assets/course-2.png';

export const courseData = [
  {
    id: 1,
    title: 'Fullstack Masterclass',
    category: 'Web Development',
    duration: '6 Months',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    price: '₹25,000',
    level: 'Beginner to Advanced',
    instructor: 'John Doe',
    overview: 'This comprehensive Fullstack Masterclass will take you from a complete beginner to a highly proficient fullstack developer. You will learn the entire MERN stack (MongoDB, Express, React, Node.js) through hands-on projects, building real-world applications that you can showcase in your portfolio.',
    descriptionExtra: 'Sounds amazing, right? By the end of this course, you will have built several production-ready applications, gained a deep understanding of modern web architectures, and be fully prepared to ace technical interviews for Fullstack roles.',
    requirements: [
      'Basic understanding of HTML and CSS is recommended but not mandatory',
      'No prior programming experience required',
      'A computer with Mac, Windows, or Linux',
      'A strong desire to learn and build real-world applications'
    ],
    whoIsFor: [
      'Beginners who want to learn web development from scratch',
      'Frontend developers looking to learn backend (Node/Express/MongoDB)',
      'Anyone looking to transition into a tech career',
      'Entrepreneurs who want to build their own web applications'
    ],
    whatYouWillLearn: [
      'Build responsive, dynamic user interfaces with React.js',
      'Create robust RESTful APIs using Node.js and Express',
      'Manage and model data effectively with MongoDB and Mongoose',
      'Implement user authentication and authorization securely',
      'Deploy full-stack applications to cloud platforms',
      'Master version control with Git and GitHub'
    ],
    syllabus: [
      {
        module: 'Module 1: Frontend Fundamentals',
        topics: ['HTML5 & Semantic Markup', 'Modern CSS & Flexbox/Grid', 'JavaScript Essentials (ES6+)', 'DOM Manipulation']
      },
      {
        module: 'Module 2: React Mastery',
        topics: ['React Hooks & State Management', 'Component Architecture', 'Routing with React Router', 'Context API & Redux']
      },
      {
        module: 'Module 3: Backend Development',
        topics: ['Node.js Basics', 'Express.js Framework', 'RESTful API Design', 'Middleware & Error Handling']
      },
      {
        module: 'Module 4: Database Integration',
        topics: ['NoSQL concepts with MongoDB', 'Mongoose ODM', 'Data Modeling & Relationships', 'Aggregation Framework']
      }
    ],
    projects: [
      {
        name: 'Major Project 1',
        desc: 'A full-featured online store with shopping cart, user authentication, and Stripe payment integration.'
      },
      {
        name: 'Major Project 2',
        desc: 'A real-time dashboard with user profiles, posts, likes, and live chat using Socket.io.'
      },
      {
        name: 'Major Project 3',
        desc: 'A robust RESTful API built with Node/Express featuring JWT authentication and pagination.'
      }
    ],
    trainingDetails: [
      '120+ Hours of Live Interactive Sessions',
      '1-on-1 Mentorship & Code Reviews',
      'Weekly Assignments & Quizzes',
      'Resume Building & Mock Interviews',
      'Guaranteed Placement Assistance'
    ]
  },
  {
    id: 2,
    title: 'Advanced Python & Django',
    category: 'Backend Dev',
    duration: '3 Months',
    img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=1000',
    price: '₹15,000',
    level: 'Intermediate',
    instructor: 'Jane Smith',
    overview: 'Dive deep into backend development with Python and Django. This course is designed for those who already have basic programming knowledge and want to build highly scalable, secure, and data-driven web applications.',
    descriptionExtra: 'Sounds amazing, right? This intensive program focuses on the core principles of backend engineering. You will build highly concurrent APIs, handle complex database schemas, and learn how to deploy enterprise-grade applications.',
    requirements: [
      'Basic understanding of Python syntax (variables, loops, functions)',
      'Familiarity with basic terminal commands',
      'Understanding of how the internet works (HTTP requests)'
    ],
    whoIsFor: [
      'Python developers looking to master web development',
      'Frontend developers wanting to become fullstack',
      'Professionals aiming for backend engineering roles'
    ],
    whatYouWillLearn: [
      'Advanced Python programming concepts',
      'Deep dive into the Django framework architecture',
      'Building robust APIs with Django Rest Framework',
      'Implementing Celery for background tasks',
      'Database optimization and ORM tricks'
    ],
    syllabus: [
      {
        module: 'Module 1: Python Deep Dive',
        topics: ['Decorators & Generators', 'Object-Oriented Programming in Python', 'Concurrency & Asyncio']
      },
      {
        module: 'Module 2: Django Fundamentals',
        topics: ['Models, Views, Templates (MVT)', 'Django ORM', 'Form Handling & Validation']
      },
      {
        module: 'Module 3: Advanced Django',
        topics: ['Django Rest Framework (DRF)', 'Authentication & Permissions', 'Caching Strategies', 'Deploying Django Apps']
      }
    ],
    projects: [
      {
        name: 'Major Project 1',
        desc: 'A secure API for a blogging platform with token-based authentication and role-based access control.'
      },
      {
        name: 'Major Project 2',
        desc: 'A Django-powered web app for tracking data with advanced filtering and Postgres database.'
      }
    ],
    trainingDetails: [
      '60+ Hours of Live Sessions',
      'Advanced Database Design Workshops',
      'Real-world Case Studies',
      'Career Counseling'
    ]
  }
];

// Fallback data for other IDs if accessed directly
export const getCourseById = (id) => {
  const course = courseData.find(c => c.id === parseInt(id));
  if (course) return course;
  
  // Return a generic template for undefined courses
  return {
    id: parseInt(id),
    title: 'Professional Tech Course',
    category: 'Technology',
    duration: 'Varies',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    price: 'Contact Us',
    level: 'All Levels',
    instructor: 'Expert Faculty',
    overview: 'A premium course designed to elevate your technical skills. Please contact our support team for the detailed brochure of this specific program.',
    descriptionExtra: 'Sounds amazing, right? Join us to accelerate your learning with dedicated mentorship and practical assignments.',
    requirements: [
      'A computer and an internet connection',
      'Willingness to learn new concepts'
    ],
    whoIsFor: [
      'Students and professionals looking to upskill',
      'Anyone passionate about technology'
    ],
    whatYouWillLearn: [
      'Industry standard best practices',
      'Hands-on project experience',
      'Preparation for certification exams',
      'Career guidance and mentorship'
    ],
    syllabus: [
      {
        module: 'Module 1: Fundamentals',
        topics: ['Introduction to concepts', 'Setting up the environment', 'Basic syntax and operations']
      },
      {
        module: 'Module 2: Advanced Topics',
        topics: ['Complex architectures', 'Performance optimization', 'Real-world case studies']
      }
    ],
    projects: [
      {
        name: 'Capstone Project',
        desc: 'An industry-grade project combining all learned concepts.'
      }
    ],
    trainingDetails: [
      'Comprehensive Curriculum',
      'Expert Instructors',
      'Certification of Completion'
    ]
  };
};
