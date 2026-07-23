import React, { useState, useMemo } from 'react';
import '../../pages/PageStyles.css';
import '../../pages/Projects.css';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Check, 
  Cpu, 
  Server, 
  Code, 
  Database, 
  FileText, 
  Film, 
  Award, 
  HelpCircle, 
  HardDrive, 
  Layout, 
  RefreshCw 
} from 'lucide-react';

// Import project mockup screenshots
import screenEcommerce from '../../assets/project_screen_ecommerce.png';
import screenDashboard from '../../assets/project_screen_dashboard.png';
import screenLanding from '../../assets/project_screen_landing.png';

// Dynamic project details generator based on category
const getProjectDetails = (category) => {
  const cat = category.toLowerCase();
  
  if (cat.includes('django') || cat.includes('python')) {
    return {
      description: 'A robust web application featuring MVC architecture, administrative consoles, and secure database backends. Built utilizing Python and the Django framework, it provides exceptional security, speed, and scalability for business applications.',
      features: [
        'Secure User Authentication & JWT session controls',
        'Built-in Django Admin Interface for full CRUD management',
        'Robust relational database schema (PostgreSQL/MySQL)',
        'RESTful API Endpoints documented with Swagger/OpenAPI',
        'Automatic E-mail notifications & Celery background tasks'
      ],
      techStack: ['Python 3.10', 'Django 4.2', 'PostgreSQL', 'Django REST Framework', 'Celery', 'Tailwind CSS']
    };
  }
  
  if (cat.includes('ml') || cat.includes('machine learning') || cat.includes('data-science') || cat.includes('data science')) {
    return {
      description: 'An advanced analytics platform powered by machine learning algorithms to process raw datasets, build training models, and deliver real-time predictions. Integrates model evaluators and data cleaning modules.',
      features: [
        'Exploratory Data Analysis (EDA) visualizations built-in',
        'Machine Learning model training & metrics dashboard (Accuracy/F1)',
        'Predictive REST API endpoints for external integrations',
        'Support for structured CSV and live stream data inputs',
        'Automated feature scaling & missing data imputation'
      ],
      techStack: ['Python 3.10', 'Scikit-Learn', 'Pandas & NumPy', 'TensorFlow / Keras', 'Seaborn & Matplotlib', 'Flask API']
    };
  }
  
  if (cat.includes('ai') || cat.includes('artificial intelligence')) {
    return {
      description: 'A next-generation AI application utilizing large language models and semantic searches to solve complex text processing, classification, and generative automation tasks. Integrates vector search databases.',
      features: [
        'Large Language Model (LLM) prompts & token management',
        'Semantic similarity search using Vector Database embeddings',
        'AI Agent pipelines for multi-turn task planning',
        'Context-aware chat memory with Redis caching',
        'Interactive chat UI with streaming responses'
      ],
      techStack: ['Python 3.10', 'OpenAI API / Claude', 'LangChain', 'Pinecone / ChromaDB', 'FastAPI', 'Next.js']
    };
  }
  
  if (cat.includes('android') || cat.includes('mobile')) {
    return {
      description: 'A native mobile application built on the MVVM design pattern, offering smooth offline caching, push notifications, and high-performance interactive interfaces matching Android Material Design 3 guidelines.',
      features: [
        'Clean MVVM Architecture with Repository patterns',
        'Offline-first synchronization using Room Database storage',
        'Google Maps API & real-time GPS location tracking',
        'Push notifications using Firebase Cloud Messaging (FCM)',
        'Vibrant animations with Jetpack Compose components'
      ],
      techStack: ['Kotlin / Java', 'Jetpack Compose', 'Android SDK', 'Room DB', 'Retrofit & OkHttp', 'Firebase']
    };
  }
  
  if (cat.includes('java')) {
    return {
      description: 'An enterprise Spring Boot application designed with Microservices architecture. Implements modern security controls, distributed databases, messaging queues, and automated scaling configurations.',
      features: [
        'Microservices coordination with Eureka & API Gateway',
        'Spring Security with OAuth2 & stateless JWT controls',
        'Hibernate / JPA database connectivity with MySQL',
        'JMS / RabbitMQ for event-driven message queuing',
        'Docker container files for automated deployments'
      ],
      techStack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'Hibernate / JPA', 'MySQL', 'Docker']
    };
  }
  
  if (cat.includes('dotnet') || cat.includes('c#')) {
    return {
      description: 'A professional enterprise web API platform built using ASP.NET Core. Integrates Entity Framework Core, structured repositories, and cloud-ready dependency injectors for enterprise systems.',
      features: [
        'ASP.NET Core Web API with fully integrated controllers',
        'Database abstraction using Entity Framework Core repositories',
        'JSON Web Token (JWT) identity access controls',
        'AutoMapper and fluent validations for data validation',
        'Unit testing with xUnit and Mocking frameworks'
      ],
      techStack: ['C# 11', '.NET 7', 'EF Core', 'MS SQL Server', 'Swagger / OpenAPI', 'Microsoft Azure']
    };
  }

  // Default response (IEEE / Python / general)
  return {
    description: 'A comprehensive academic and industrial project covering core concepts of software engineering. Built with a focus on code readability, solid structure, and extensive documentation.',
    features: [
      'Comprehensive module outline with source code',
      'Entity-Relationship Diagrams (ERD) & structural designs',
      'Step-by-step installation guides and code documentations',
      'User control dashboard & data CRUD operations',
      'Report generation & CSV/PDF exporting tools'
    ],
    techStack: ['HTML5 & CSS3', 'JavaScript ES6', 'Git / GitHub', 'SQL Database', 'System Documentation']
  };
};

// Specifications builder based on project categories and ID variations
const getProjectSpecs = (category, projectId) => {
  const cat = category.toLowerCase();
  const isEven = projectId % 2 === 0;
  const isMod3 = projectId % 3 === 0;

  if (cat.includes('django') || cat.includes('python')) {
    return {
      specs: [
        { label: 'API', value: 'DJANGO REST API', icon: 'api' },
        { label: 'Web Framework', value: 'PYTHON DJANGO 4.2', icon: 'framework' },
        { label: 'IDE', value: 'VS CODE / PYCHARM', icon: 'ide' },
        { label: 'Database', value: 'POSTGRESQL / SQLITE', icon: 'database' },
        { label: 'DFD Diagram', value: 'Available', icon: 'dfd' },
        { label: 'Videos', value: isEven ? 'Available' : 'Not Available', icon: 'video' },
        { label: 'E-R Diagram', value: 'Available', icon: 'er' },
        { label: 'UML Diagrams', value: 'Available', icon: 'uml' },
        { label: 'Final PPT', value: 'Available', icon: 'ppt' },
        { label: 'SRS', value: 'Available', icon: 'srs' }
      ],
      doc: {
        review1: 'Available',
        review2: 'Available',
        review3: isEven ? 'Available' : 'Not Available',
        architecture: 'Available',
        literature: 'Available',
        testCases: isMod3 ? 'Not Available' : 'Available',
        dataDictionary: isEven ? 'Available' : 'Not Available',
        futureEnhancement: 'Available',
        srsDoc: 'Available',
        allModules: 'Available',
        documentation: 'Available (Full)',
        screenshots: 'Available'
      },
      videos: {
        install: 'Available',
        execute: 'Available',
        explanation: isEven ? 'Available' : 'Not Available'
      }
    };
  }

  if (cat.includes('ml') || cat.includes('machine learning') || cat.includes('data-science') || cat.includes('data science')) {
    return {
      specs: [
        { label: 'API', value: 'FLASK REST / FASTAPI', icon: 'api' },
        { label: 'Web Framework', value: 'STREAMLIT / FLASK', icon: 'framework' },
        { label: 'IDE', value: 'JUPYTER / VS CODE', icon: 'ide' },
        { label: 'Database', value: 'SQLITE / NOT REQUIRED', icon: 'database' },
        { label: 'DFD Diagram', value: 'Available', icon: 'dfd' },
        { label: 'Videos', value: isEven ? 'Available' : 'Not Available', icon: 'video' },
        { label: 'E-R Diagram', value: 'Not Required', icon: 'er' },
        { label: 'UML Diagrams', value: 'Not Available', icon: 'uml' },
        { label: 'Final PPT', value: 'Available', icon: 'ppt' },
        { label: 'SRS', value: 'Available', icon: 'srs' }
      ],
      doc: {
        review1: 'Available',
        review2: 'Available',
        review3: 'Available',
        architecture: 'Available',
        literature: 'Available',
        testCases: 'Not Available',
        dataDictionary: 'Not Available',
        futureEnhancement: 'Available',
        srsDoc: 'Available',
        allModules: 'Available',
        documentation: 'Available (Full)',
        screenshots: 'Available'
      },
      videos: {
        install: 'Available',
        execute: 'Available',
        explanation: isEven ? 'Available' : 'Not Available'
      }
    };
  }

  if (cat.includes('ai') || cat.includes('artificial intelligence')) {
    return {
      specs: [
        { label: 'API', value: 'FASTAPI STREAMING REST', icon: 'api' },
        { label: 'Web Framework', value: 'NEXT.JS 13 / REACT', icon: 'framework' },
        { label: 'IDE', value: 'VS CODE', icon: 'ide' },
        { label: 'Database', value: 'PINECONE VECTOR DB', icon: 'database' },
        { label: 'DFD Diagram', value: 'Available', icon: 'dfd' },
        { label: 'Videos', value: 'Not Available', icon: 'video' },
        { label: 'E-R Diagram', value: 'Not Required', icon: 'er' },
        { label: 'UML Diagrams', value: 'Available', icon: 'uml' },
        { label: 'Final PPT', value: 'Available', icon: 'ppt' },
        { label: 'SRS', value: 'Available', icon: 'srs' }
      ],
      doc: {
        review1: 'Available',
        review2: 'Available',
        review3: 'Not Available',
        architecture: 'Available',
        literature: 'Available',
        testCases: 'Not Required',
        dataDictionary: 'Not Required',
        futureEnhancement: 'Available',
        srsDoc: 'Available',
        allModules: 'Available',
        documentation: 'Available',
        screenshots: 'Available'
      },
      videos: {
        install: 'Not Available',
        execute: 'Available',
        explanation: 'Not Available'
      }
    };
  }

  if (cat.includes('android') || cat.includes('mobile')) {
    return {
      specs: [
        { label: 'API', value: 'RETROFIT CLIENT REST', icon: 'api' },
        { label: 'Web Framework', value: 'JETPACK COMPOSE', icon: 'framework' },
        { label: 'IDE', value: 'ANDROID STUDIO', icon: 'ide' },
        { label: 'Database', value: 'ROOM DATABASE (SQLITE)', icon: 'database' },
        { label: 'DFD Diagram', value: 'Available', icon: 'dfd' },
        { label: 'Videos', value: 'Available', icon: 'video' },
        { label: 'E-R Diagram', value: 'Available', icon: 'er' },
        { label: 'UML Diagrams', value: 'Available', icon: 'uml' },
        { label: 'Final PPT', value: 'Available', icon: 'ppt' },
        { label: 'SRS', value: 'Available', icon: 'srs' }
      ],
      doc: {
        review1: 'Available',
        review2: 'Available',
        review3: 'Available',
        architecture: 'Available',
        literature: 'Available',
        testCases: 'Available',
        dataDictionary: 'Available',
        futureEnhancement: 'Available',
        srsDoc: 'Available',
        allModules: 'Available',
        documentation: 'Available (Full)',
        screenshots: 'Available'
      },
      videos: {
        install: 'Available',
        execute: 'Available',
        explanation: 'Available'
      }
    };
  }

  if (cat.includes('java')) {
    return {
      specs: [
        { label: 'API', value: 'SPRING REST CONTROLLER', icon: 'api' },
        { label: 'Web Framework', value: 'SPRING BOOT 3.0', icon: 'framework' },
        { label: 'IDE', value: 'INTELLIJ IDEA / ECLIPSE', icon: 'ide' },
        { label: 'Database', value: 'MYSQL DATABASE', icon: 'database' },
        { label: 'DFD Diagram', value: 'Available', icon: 'dfd' },
        { label: 'Videos', value: 'Not Available', icon: 'video' },
        { label: 'E-R Diagram', value: 'Available', icon: 'er' },
        { label: 'UML Diagrams', value: 'Available', icon: 'uml' },
        { label: 'Final PPT', value: 'Available', icon: 'ppt' },
        { label: 'SRS', value: 'Available', icon: 'srs' }
      ],
      doc: {
        review1: 'Available',
        review2: 'Available',
        review3: 'Available',
        architecture: 'Available',
        literature: 'Available',
        testCases: 'Not Available',
        dataDictionary: 'Available',
        futureEnhancement: 'Available',
        srsDoc: 'Available',
        allModules: 'Available',
        documentation: 'Available (Full)',
        screenshots: 'Available'
      },
      videos: {
        install: 'Not Available',
        execute: 'Available',
        explanation: 'Not Available'
      }
    };
  }

  // Default (.NET / C# / general)
  return {
    specs: [
      { label: 'API', value: 'ASP.NET CORE WEB API', icon: 'api' },
      { label: 'Web Framework', value: '.NET CORE 7.0', icon: 'framework' },
      { label: 'IDE', value: 'VISUAL STUDIO 2022', icon: 'ide' },
      { label: 'Database', value: 'MICROSOFT SQL SERVER', icon: 'database' },
      { label: 'DFD Diagram', value: 'Available', icon: 'dfd' },
      { label: 'Videos', value: isEven ? 'Available' : 'Not Available', icon: 'video' },
      { label: 'E-R Diagram', value: 'Available', icon: 'er' },
      { label: 'UML Diagrams', value: 'Available', icon: 'uml' },
      { label: 'Final PPT', value: 'Available', icon: 'ppt' },
      { label: 'SRS', value: 'Available', icon: 'srs' }
    ],
    doc: {
      review1: 'Available',
      review2: 'Available',
      review3: isEven ? 'Available' : 'Not Available',
      architecture: 'Available',
      literature: 'Available',
      testCases: isMod3 ? 'Not Available' : 'Available',
      dataDictionary: 'Available',
      futureEnhancement: 'Available',
      srsDoc: 'Available',
      allModules: 'Available',
      documentation: 'Available (Full)',
      screenshots: 'Available'
    },
    videos: {
      install: 'Available',
      execute: 'Available',
      explanation: isEven ? 'Available' : 'Not Available'
    }
  };
};

// Simulated Code Editor Component (Custom IDE code mockup)
function SimulatedCodeScreen({ category }) {
  let codeSnippet = null;
  const cat = category.toLowerCase();
  
  if (cat.includes('django') || cat.includes('python')) {
    codeSnippet = (
      <>
        <div className="sim-code-line"><span className="sim-code-ln">1</span><span className="sim-code-content"><span className="sim-code-keyword">from</span> django.db <span className="sim-code-keyword">import</span> models</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">2</span><span className="sim-code-content"><span className="sim-code-keyword">from</span> django.contrib.auth <span className="sim-code-keyword">import</span> get_user_model</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">3</span><span className="sim-code-content"></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">4</span><span className="sim-code-content"><span className="sim-code-keyword">class</span> <span className="sim-code-function">ProjectModel</span>(models.Model):</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">5</span><span className="sim-code-content">    title = models.CharField(max_length=<span className="sim-code-string">255</span>)</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">6</span><span className="sim-code-content">    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">7</span><span className="sim-code-content">    created_at = models.DateTimeField(auto_now_add=<span className="sim-code-keyword">True</span>)</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">8</span><span className="sim-code-content"></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">9</span><span className="sim-code-content">    <span className="sim-code-keyword">def</span> <span className="sim-code-function">__str__</span>(self):</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">10</span><span className="sim-code-content">        <span className="sim-code-keyword">return</span> self.title</span></div>
      </>
    );
  } else if (cat.includes('java')) {
    codeSnippet = (
      <>
        <div className="sim-code-line"><span className="sim-code-ln">1</span><span className="sim-code-content"><span className="sim-code-keyword">package</span> com.hemshethu.project;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">2</span><span className="sim-code-content"><span className="sim-code-keyword">import</span> org.springframework.boot.SpringApplication;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">3</span><span className="sim-code-content"></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">4</span><span className="sim-code-content"><span className="sim-code-keyword">@SpringBootApplication</span></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">5</span><span className="sim-code-content"><span className="sim-code-keyword">public class</span> <span className="sim-code-function">Application</span> &#123;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">6</span><span className="sim-code-content">    <span className="sim-code-keyword">public static void</span> main(String[] args) &#123;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">7</span><span className="sim-code-content">        SpringApplication.run(Application.<span className="sim-code-keyword">class</span>, args);</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">8</span><span className="sim-code-content">    &#125;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">9</span><span className="sim-code-content">&#125;</span></div>
      </>
    );
  } else if (cat.includes('dotnet') || cat.includes('c#')) {
    codeSnippet = (
      <>
        <div className="sim-code-line"><span className="sim-code-ln">1</span><span className="sim-code-content"><span className="sim-code-keyword">using</span> Microsoft.AspNetCore.Mvc;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">2</span><span className="sim-code-content"><span className="sim-code-keyword">namespace</span> Hemshethu.Controllers;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">3</span><span className="sim-code-content"></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">4</span><span className="sim-code-content">[<span className="sim-code-function">ApiController</span>, <span className="sim-code-function">Route</span>(<span className="sim-code-string">"api/[controller]"</span>)]</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">5</span><span className="sim-code-content"><span className="sim-code-keyword">public class</span> <span className="sim-code-function">ProjectController</span> : ControllerBase &#123;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">6</span><span className="sim-code-content">    [<span className="sim-code-function">HttpGet</span>]</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">7</span><span className="sim-code-content">    <span className="sim-code-keyword">public</span> IActionResult <span className="sim-code-function">Get</span>() =&gt; Ok(<span className="sim-code-keyword">new</span> &#123; Status = <span className="sim-code-string">"Success"</span> &#125;);</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">8</span><span className="sim-code-content">&#125;</span></div>
      </>
    );
  } else {
    // Default JS / Node.js
    codeSnippet = (
      <>
        <div className="sim-code-line"><span className="sim-code-ln">1</span><span className="sim-code-content"><span className="sim-code-keyword">const</span> express = <span className="sim-code-function">require</span>(<span className="sim-code-string">'express'</span>);</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">2</span><span className="sim-code-content"><span className="sim-code-keyword">const</span> app = <span className="sim-code-function">express</span>();</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">3</span><span className="sim-code-content"></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">4</span><span className="sim-code-content">app.<span className="sim-code-function">get</span>(<span className="sim-code-string">'/api/health'</span>, (req, res) =&gt; &#123;</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">5</span><span className="sim-code-content">    res.<span className="sim-code-function">json</span>(&#123; status: <span className="sim-code-string">'running'</span>, timestamp: Date.<span className="sim-code-function">now</span>() &#125;);</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">6</span><span className="sim-code-content">&#125;);</span></div>
        <div className="sim-code-line"><span className="sim-code-ln">7</span><span className="sim-code-content"></span></div>
        <div className="sim-code-line"><span className="sim-code-ln">8</span><span className="sim-code-content">app.<span className="sim-code-listen">listen</span>(<span className="sim-code-string">5000</span>, () =&gt; console.<span className="sim-code-function">log</span>(<span className="sim-code-string">'Server listening...'</span>));</span></div>
      </>
    );
  }

  return (
    <div className="simulated-screen-container">
      <div className="sim-screen-header">
        <div className="sim-screen-dots">
          <span className="sim-screen-dot red"></span>
          <span className="sim-screen-dot yellow"></span>
          <span className="sim-screen-dot green"></span>
        </div>
        <div className="sim-screen-url-bar">ide://hemshethu/source-code</div>
      </div>
      <div className="sim-screen-body">
        <div className="sim-code-editor">
          {codeSnippet}
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
  const allProjects = [
    // Artificial Intelligence
    { id: 1, title: 'AI Conversational Chatbot Assistant', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 2, title: 'Real-Time Face Recognition security', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 3, title: 'NLP Text Summarizer & Synthesizer', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 4, title: 'Object Detection & Classification App', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 5, title: 'AI Image Generator (Stable Diffusion API)', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 6, title: 'Autonomous Self-Driving Car Simulator', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 7, title: 'Speech-to-Text Multi-Language Translator', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 8, title: 'Generative AI Code Assistant Extension', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },

    // Python Django
    { id: 9, title: 'E-Commerce Marketplace Platform', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 10, title: 'Blog Content Management System (CMS)', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 11, title: 'RESTful API User Auth Service', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 12, title: 'Student Management Portal', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 13, title: 'Task Management Kanban Board', category: 'Python Django', price: 'Premium', img: 'Web' },
    { id: 14, title: 'Real Estate Property Listing Portal', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 15, title: 'Online Examination & Quiz System', category: 'Python Django', price: 'Free', img: 'Web' },
    { id: 16, title: 'Hospital Appointment Booking App', category: 'Python Django', price: 'Premium', img: 'Web' },

    // Machine Learning (Major - 30 Custom Projects)
    { id: 17, title: 'Real-Time Face Mask Detection', category: 'Machine Learning', description: 'Detects whether a person is wearing a mask using live video feed for public safety monitoring.', tech: 'Python, OpenCV, CNN, TensorFlow/Keras, MobileNetV2', projectLevel: 'Major', img: 'ML' },
    { id: 18, title: 'Plant Disease Detection from Leaf Images', category: 'Machine Learning', description: 'Identifies crop diseases from leaf photos to help farmers take early action.', tech: 'CNN, TensorFlow, Keras, Image Augmentation, Flask', projectLevel: 'Major', img: 'ML' },
    { id: 19, title: 'Automatic Number Plate Recognition (ANPR)', category: 'Machine Learning', description: 'Detects and reads vehicle license plates from images/video for toll systems or parking.', tech: 'OpenCV, YOLO, Tesseract OCR, Python', projectLevel: 'Major', img: 'ML' },
    { id: 20, title: 'Credit Card Fraud Detection', category: 'Machine Learning', description: 'Flags fraudulent transactions using anomaly detection on imbalanced datasets.', tech: 'Scikit-learn, XGBoost, SMOTE, Pandas, Random Forest', projectLevel: 'Major', img: 'ML' },
    { id: 21, title: 'Customer Churn Prediction', category: 'Machine Learning', description: 'Predicts which customers are likely to leave a service (telecom/banking).', tech: 'Logistic Regression, XGBoost, Scikit-learn, Power BI', projectLevel: 'Major', img: 'ML' },
    { id: 22, title: 'Heart Disease Prediction System', category: 'Machine Learning', description: 'Predicts risk of heart disease based on patient health parameters.', tech: 'Scikit-learn, Random Forest, SVM, Flask/Streamlit', projectLevel: 'Major', img: 'ML' },
    { id: 23, title: 'Resume Screening and Job Matching System', category: 'Machine Learning', description: 'Automatically ranks resumes against job descriptions using text similarity.', tech: 'NLP, spaCy, TF-IDF/BERT, Cosine Similarity, Python', projectLevel: 'Major', img: 'ML' },
    { id: 24, title: 'AI-Powered Customer Support Chatbot', category: 'Machine Learning', description: 'Handles customer queries using intent recognition and conversational AI.', tech: 'NLTK/spaCy, RASA/Dialogflow, LSTM/Transformers, Flask', projectLevel: 'Major', img: 'ML' },
    { id: 25, title: 'Stock Price Prediction using LSTM', category: 'Machine Learning', description: 'Forecasts future stock prices using historical time-series data.', tech: 'LSTM, Keras, TensorFlow, Pandas, Matplotlib', projectLevel: 'Major', img: 'ML' },
    { id: 26, title: 'Sales Forecasting for Retail', category: 'Machine Learning', description: 'Predicts future sales trends to optimize inventory and supply chain.', tech: 'ARIMA, Prophet, XGBoost, Pandas, Power BI', projectLevel: 'Major', img: 'ML' },
    { id: 27, title: 'Intrusion Detection System', category: 'Machine Learning', description: 'Detects malicious network traffic/attacks in real-time.', tech: 'Random Forest, SVM, NSL-KDD Dataset, Scikit-learn', projectLevel: 'Major', img: 'ML' },
    { id: 28, title: 'Phishing Website Detection', category: 'Machine Learning', description: 'Classifies URLs as legitimate or phishing using feature-based ML.', tech: 'Random Forest, Decision Trees, Feature Engineering, Flask', projectLevel: 'Major', img: 'ML' },
    { id: 29, title: 'Fake News Detection System', category: 'Machine Learning', description: 'Classifies news articles as real or fake using NLP techniques.', tech: 'NLP, TF-IDF, Naive Bayes/LSTM, Scikit-learn', projectLevel: 'Major', img: 'ML' },
    { id: 30, title: 'Sentiment Analysis on Social Media Data', category: 'Machine Learning', description: 'Analyzes public sentiment on Twitter/Reddit for brands or events.', tech: 'NLP, BERT, Tweepy API, VADER, Python', projectLevel: 'Major', img: 'ML' },
    { id: 31, title: 'Movie/Product Recommendation System', category: 'Machine Learning', description: 'Suggests items to users based on collaborative and content-based filtering.', tech: 'Surprise Library, Cosine Similarity, Matrix Factorization (SVD), Pandas', projectLevel: 'Major', img: 'ML' },
    { id: 32, title: 'Object Detection for Surveillance Systems', category: 'Machine Learning', description: 'Detects and tracks objects/people in CCTV footage in real time.', tech: 'YOLOv8, OpenCV, PyTorch, Deep SORT', projectLevel: 'Major', img: 'ML' },
    { id: 33, title: 'Speech Emotion Recognition', category: 'Machine Learning', description: 'Detects human emotions (happy, sad, angry) from voice recordings.', tech: 'Librosa, CNN, MFCC Feature Extraction, TensorFlow', projectLevel: 'Major', img: 'ML' },
    { id: 34, title: 'Traffic Sign Recognition System', category: 'Machine Learning', description: 'Classifies traffic signs for use in driver assistance/autonomous vehicles.', tech: 'CNN, GTSRB Dataset, TensorFlow, OpenCV', projectLevel: 'Major', img: 'ML' },
    { id: 35, title: 'Employee Attrition Prediction', category: 'Machine Learning', description: 'Predicts which employees are likely to resign based on HR data.', tech: 'Logistic Regression, Random Forest, Scikit-learn, Power BI', projectLevel: 'Major', img: 'ML' },
    { id: 36, title: 'Human Activity Recognition using Sensor Data', category: 'Machine Learning', description: 'Classifies physical activities (walking, running, sitting) using smartphone sensors.', tech: 'LSTM, CNN, Accelerometer/Gyroscope Data, Keras', projectLevel: 'Major', img: 'ML' },
    { id: 37, title: 'License Plate-Based Vehicle Parking System', category: 'Machine Learning', description: 'Automates parking entry/exit using plate detection and billing.', tech: 'OpenCV, YOLO, Tesseract OCR, Python, MySQL', projectLevel: 'Major', img: 'ML' },
    { id: 38, title: 'AI Resume Builder & Skill Gap Analyzer', category: 'Machine Learning', description: 'Analyzes resumes and suggests skill improvements based on job trends.', tech: 'NLP, BERT, Named Entity Recognition (NER), Flask', projectLevel: 'Major', img: 'ML' },
    { id: 39, title: 'Crop Yield Prediction System', category: 'Machine Learning', description: 'Predicts agricultural yield based on soil, weather, and historical data.', tech: 'Random Forest, XGBoost, Pandas, Weather API Integration', projectLevel: 'Major', img: 'ML' },
    { id: 40, title: 'Real Estate Price Prediction', category: 'Machine Learning', description: 'Predicts property prices based on location, size, and amenities.', tech: 'Linear Regression, XGBoost, Scikit-learn, Streamlit', projectLevel: 'Major', img: 'ML' },
    { id: 41, title: 'Voice-Based Virtual Assistant', category: 'Machine Learning', description: 'Executes tasks (search, reminders, app control) via voice commands.', tech: 'SpeechRecognition, NLP, Python, pyttsx3, Wolfram Alpha API', projectLevel: 'Major', img: 'ML' },
    { id: 42, title: 'Driver Drowsiness Detection System', category: 'Machine Learning', description: 'Monitors driver\'s eyes/face to detect fatigue and prevent accidents.', tech: 'OpenCV, Dlib, CNN, Facial Landmark Detection', projectLevel: 'Major', img: 'ML' },
    { id: 43, title: 'Automated Attendance System using Face Recognition', category: 'Machine Learning', description: 'Marks attendance automatically by recognizing faces via camera.', tech: 'OpenCV, face_recognition library, CNN, SQLite', projectLevel: 'Major', img: 'ML' },
    { id: 44, title: 'AI-Based Personal Finance Tracker & Predictor', category: 'Machine Learning', description: 'Categorizes expenses and predicts future spending patterns.', tech: 'NLP (transaction categorization), Time-Series Forecasting, Pandas', projectLevel: 'Major', img: 'ML' },
    { id: 45, title: 'Cyberbullying Detection on Social Media', category: 'Machine Learning', description: 'Detects abusive/harassing text content across platforms.', tech: 'NLP, LSTM/BERT, TF-IDF, Scikit-learn', projectLevel: 'Major', img: 'ML' },
    { id: 46, title: 'Multilingual Chatbot for Government Services', category: 'Machine Learning', description: 'Provides citizen services info in multiple regional languages.', tech: 'NLP, mBERT/IndicBERT, Rasa, Flask', projectLevel: 'Major', img: 'ML' },

    // Android
    { id: 47, title: 'Personal Expense Tracker Application', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 48, title: 'On-Demand Food Delivery Client App', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 49, title: 'GPS Location Tracker & Map Widget', category: 'Android', price: 'Free', img: 'Android' },
    { id: 50, title: 'Daily Fitness Tracker & Step Counter', category: 'Android', price: 'Free', img: 'Android' },
    { id: 51, title: 'Real-Time Messaging Chat Application', category: 'Android', price: 'Premium', img: 'Android' },
    { id: 52, title: 'Offline Notes & PDF Reader Utility', category: 'Android', price: 'Free', img: 'Android' },
    { id: 53, title: 'Weather Forecast & API Dashboard', category: 'Android', price: 'Free', img: 'Android' },
    { id: 54, title: 'QR Code Scanner & Inventory Manager', category: 'Android', price: 'Premium', img: 'Android' },

    // Data Science
    { id: 55, title: 'Customer Churn & Behavior Analysis', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 56, title: 'Covid-19 Global Data Dashboard', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 57, title: 'Superstore Sales Forecasting pipeline', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 58, title: 'Sentiment Analysis on Product Reviews', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 59, title: 'E-Commerce Customer Segmentation Analysis', category: 'Data Science', price: 'Premium', img: 'Data' },
    { id: 60, title: 'HR Employee Attrition & Performance Analysis', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 61, title: 'Global Climate Change Temperature Visualization', category: 'Data Science', price: 'Free', img: 'Data' },
    { id: 62, title: 'Social Media Network Text Mining Tool', category: 'Data Science', price: 'Premium', img: 'Data' },

    // Java
    { id: 63, title: 'Library Management Enterprise System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 64, title: 'Hospital Patient Management Portal', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 65, title: 'ATM Simulator Desktop Software', category: 'Java', price: 'Free', img: 'Java' },
    { id: 66, title: 'Secure Cryptographic File Storage Tool', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 67, title: 'Online Hotel Booking Microservice', category: 'Java', price: 'Premium', img: 'Java' },
    { id: 68, title: 'Employee Payroll Management System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 69, title: 'Student Grading & Analytics System', category: 'Java', price: 'Free', img: 'Java' },
    { id: 70, title: 'Secure E-Voting & Verification Portal', category: 'Java', price: 'Premium', img: 'Java' },

    // .NET
    { id: 71, title: 'Enterprise Resource ERP Portal', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 72, title: 'C# MVC Online Billing Application', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 73, title: 'Corporate Inventory Tracking Utility', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 74, title: 'HR Payroll Management System', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 75, title: 'Real-Time Stock Market Dashboard', category: '.NET', price: 'Premium', img: 'DotNet' },
    { id: 76, title: 'E-Commerce API Service Gateway', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 77, title: 'Warehouse Logistics Management Suite', category: '.NET', price: 'Free', img: 'DotNet' },
    { id: 78, title: 'Multi-Tenant SaaS CRM Platform', category: '.NET', price: 'Premium', img: 'DotNet' },

    // Python (General)
    { id: 79, title: 'Multi-threaded Web Scraper & Parser', category: 'Python', price: 'Free', img: 'Python' },
    { id: 80, title: 'Desktop Task Automation Assistant', category: 'Python', price: 'Free', img: 'Python' },
    { id: 81, title: 'GUI PDF Editor & Splitter Tool', category: 'Python', price: 'Premium', img: 'Python' },
    { id: 82, title: 'Bulk Email Sending Application', category: 'Python', price: 'Free', img: 'Python' },
    { id: 83, title: 'Secure Password Manager (PyQt5)', category: 'Python', price: 'Premium', img: 'Python' },
    { id: 84, title: 'Automated Trading Bot Dashboard', category: 'Python', price: 'Free', img: 'Python' },
    { id: 85, title: 'Local Image Processor & Filter Tool', category: 'Python', price: 'Free', img: 'Python' },
    { id: 86, title: 'Network Packets Sniffer & Analyzer', category: 'Python', price: 'Premium', img: 'Python' },

    // IEEE (30 Advanced Machine Learning projects)
    { id: 87, title: 'Deepfake Detection using CNN-RNN Hybrid Model', category: 'IEEE', description: 'Identifies manipulated video/audio content by combining spatial and temporal feature analysis to detect deepfakes with higher accuracy than single-model approaches.', tech: 'CNN, LSTM/RNN, TensorFlow, OpenCV, FaceForensics++ Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 88, title: 'Hybrid Deep Learning Model for Brain Tumor Classification', category: 'IEEE', description: 'Combines CNN with transfer learning architectures to classify MRI brain scans into tumor types with comparative benchmarking.', tech: 'CNN, VGG16/ResNet, Transfer Learning, Keras, BraTS Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 89, title: 'Explainable AI for Diabetic Retinopathy Detection', category: 'IEEE', description: 'Detects diabetic retinopathy stages from retinal images while using Grad-CAM to visualize and explain model decisions.', tech: 'CNN, Grad-CAM, TensorFlow, EfficientNet, APTOS Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 90, title: 'Federated Learning-Based Intrusion Detection System', category: 'IEEE', description: 'Detects network intrusions across distributed nodes without centralizing sensitive data, preserving privacy while maintaining detection accuracy.', tech: 'Federated Learning, TensorFlow Federated, Random Forest, NSL-KDD Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 91, title: 'Multilingual Fake News Detection using Transformer Models', category: 'IEEE', description: 'Detects fake news across multiple languages using multilingual transformer embeddings and comparative analysis with traditional ML.', tech: 'mBERT, XLM-RoBERTa, NLP, Scikit-learn, Python', projectLevel: 'Major', img: 'IEEE' },
    { id: 92, title: 'Hybrid CNN-LSTM Model for Human Activity Recognition', category: 'IEEE', description: 'Recognizes complex human activities from wearable sensor data using a hybrid spatial-temporal deep learning architecture.', tech: 'CNN, LSTM, Keras, UCI HAR Dataset, Python', projectLevel: 'Major', img: 'IEEE' },
    { id: 93, title: 'Ensemble Learning-Based Credit Risk Prediction Model', category: 'IEEE', description: 'Combines multiple ensemble techniques (bagging, boosting, stacking) to improve credit default prediction accuracy with comparative evaluation.', tech: 'XGBoost, LightGBM, Random Forest, Stacking Ensemble, Scikit-learn', projectLevel: 'Major', img: 'IEEE' },
    { id: 94, title: 'Attention-Based Neural Machine Translation System', category: 'IEEE', description: 'Translates text between languages using attention mechanisms and transformer architecture, benchmarked against traditional seq2seq models.', tech: 'Transformers, Attention Mechanism, PyTorch, BLEU Score Evaluation', projectLevel: 'Major', img: 'IEEE' },
    { id: 95, title: 'Graph Neural Network-Based Recommendation System', category: 'IEEE', description: 'Models user-item interactions as a graph to generate more accurate recommendations compared to traditional collaborative filtering.', tech: 'Graph Neural Networks (GNN), PyTorch Geometric, Python, MovieLens Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 96, title: 'Hybrid Model for Crop and Weed Classification using Drone Imagery', category: 'IEEE', description: 'Classifies crops and weeds from UAV-captured images using a hybrid CNN model for precision agriculture applications.', tech: 'CNN, YOLOv8, Drone/UAV Imagery, TensorFlow', projectLevel: 'Major', img: 'IEEE' },
    { id: 97, title: 'Transfer Learning-Based Skin Cancer Classification', category: 'IEEE', description: 'Classifies skin lesion images into cancer types using pretrained deep learning models with performance comparison across architectures.', tech: 'CNN, ResNet50, InceptionV3, Transfer Learning, ISIC Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 98, title: 'Hate Speech Detection using BERT-Based Deep Learning', category: 'IEEE', description: 'Detects hate speech and offensive content on social media using contextual embeddings and compares performance with classical NLP models.', tech: 'BERT, NLP, TensorFlow, HuggingFace Transformers', projectLevel: 'Major', img: 'IEEE' },
    { id: 99, title: 'Adversarial Attack Detection in Deep Learning Models', category: 'IEEE', description: 'Identifies adversarial perturbations designed to fool image classification models and proposes defense mechanisms.', tech: 'CNN, Adversarial Training, TensorFlow, FGSM/PGD Attacks', projectLevel: 'Major', img: 'IEEE' },
    { id: 100, title: 'Multi-Modal Emotion Recognition using Audio and Text', category: 'IEEE', description: 'Combines speech and text features to recognize human emotions with higher accuracy than single-modality models.', tech: 'CNN, LSTM, Librosa, NLP, Multimodal Fusion', projectLevel: 'Major', img: 'IEEE' },
    { id: 101, title: 'Time-Series Anomaly Detection using Autoencoders', category: 'IEEE', description: 'Detects anomalies in sensor/IoT time-series data using unsupervised deep learning with reconstruction error analysis.', tech: 'Autoencoders, LSTM, TensorFlow, Python', projectLevel: 'Major', img: 'IEEE' },
    { id: 102, title: 'Hybrid Recommendation System using Deep Learning and Collaborative Filtering', category: 'IEEE', description: 'Combines neural collaborative filtering with content-based features to improve recommendation accuracy and address cold-start problems.', tech: 'Neural Collaborative Filtering, TensorFlow, Matrix Factorization, Python', projectLevel: 'Major', img: 'IEEE' },
    { id: 103, title: 'Real-Time Object Detection for Autonomous Vehicles', category: 'IEEE', description: 'Detects pedestrians, vehicles, and obstacles in real-time video for self-driving car applications with speed-accuracy tradeoff analysis.', tech: 'YOLOv8, OpenCV, PyTorch, KITTI Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 104, title: 'Deep Learning-Based COVID-19 Detection from Chest X-Rays', category: 'IEEE', description: 'Classifies chest X-ray images to detect COVID-19 using CNN architectures with comparative study across multiple models.', tech: 'CNN, VGG19, TensorFlow, COVID-19 Radiography Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 105, title: 'Blockchain-Integrated Machine Learning for Secure Data Sharing', category: 'IEEE', description: 'Combines blockchain with ML models to enable secure and verifiable data sharing for healthcare or IoT applications.', tech: 'Blockchain, Machine Learning, Python, Smart Contracts', projectLevel: 'Major', img: 'IEEE' },
    { id: 106, title: 'Speech-to-Text Conversion using Deep Learning for Regional Languages', category: 'IEEE', description: 'Converts spoken regional language audio into text using deep learning-based speech recognition models.', tech: 'RNN, CTC Loss, TensorFlow, Librosa', projectLevel: 'Major', img: 'IEEE' },
    { id: 107, title: 'Predictive Maintenance using IoT Sensor Data and Machine Learning', category: 'IEEE', description: 'Predicts equipment failure in industrial settings using sensor data patterns and time-series forecasting.', tech: 'LSTM, Random Forest, IoT Sensor Data, Python', projectLevel: 'Major', img: 'IEEE' },
    { id: 108, title: 'GAN-Based Image Synthesis for Data Augmentation', category: 'IEEE', description: 'Generates synthetic training images using Generative Adversarial Networks to improve model performance on limited datasets.', tech: 'GAN, DCGAN, TensorFlow/PyTorch, Python', projectLevel: 'Major', img: 'IEEE' },
    { id: 109, title: 'Cyberbullying Detection using Deep Learning and Sentiment Analysis', category: 'IEEE', description: 'Detects cyberbullying content on social platforms using deep contextual embeddings combined with sentiment features.', tech: 'BERT, LSTM, NLP, Scikit-learn', projectLevel: 'Major', img: 'IEEE' },
    { id: 110, title: 'Hybrid Model for Parkinson\'s Disease Detection using Voice Analysis', category: 'IEEE', description: 'Detects early signs of Parkinson\'s disease from voice recordings using acoustic feature extraction and hybrid ML models.', tech: 'SVM, Random Forest, Librosa, MFCC Features', projectLevel: 'Major', img: 'IEEE' },
    { id: 111, title: 'Reinforcement Learning-Based Traffic Signal Control System', category: 'IEEE', description: 'Optimizes traffic signal timing using reinforcement learning to reduce congestion, compared against traditional fixed-timing systems.', tech: 'Reinforcement Learning, Q-Learning, Python, SUMO Simulator', projectLevel: 'Major', img: 'IEEE' },
    { id: 112, title: 'Multi-Class Plant Disease Detection using Vision Transformers', category: 'IEEE', description: 'Classifies multiple plant diseases from leaf images using Vision Transformer architecture, benchmarked against CNN models.', tech: 'Vision Transformer (ViT), PyTorch, PlantVillage Dataset', projectLevel: 'Major', img: 'IEEE' },
    { id: 113, title: 'Deep Learning-Based Driver Drowsiness Detection with Alert System', category: 'IEEE', description: 'Detects driver fatigue using facial landmark and eye-closure analysis with real-time alert generation for accident prevention.', tech: 'CNN, Dlib, OpenCV, Facial Landmark Detection', projectLevel: 'Major', img: 'IEEE' },
    { id: 114, title: 'Explainable AI for Loan Default Prediction using SHAP', category: 'IEEE', description: 'Predicts loan defaults using ensemble models while providing feature-level explanations through SHAP values for regulatory transparency.', tech: 'XGBoost, SHAP, Scikit-learn, Pandas', projectLevel: 'Major', img: 'IEEE' },
    { id: 115, title: 'Cross-Lingual Text Summarization using Transformer Models', category: 'IEEE', description: 'Summarizes text content across different languages using transformer-based encoder-decoder architectures.', tech: 'mT5, Transformers, HuggingFace, NLP', projectLevel: 'Major', img: 'IEEE' },
    { id: 116, title: 'Federated Learning for Privacy-Preserving Healthcare Diagnosis', category: 'IEEE', description: 'Trains diagnostic ML models across multiple hospitals without sharing raw patient data, ensuring privacy compliance.', tech: 'Federated Learning, CNN, TensorFlow Federated, Healthcare Imaging Data', projectLevel: 'Major', img: 'IEEE' },

    // Machine Learning (Minor - 30 Custom Projects)
    { id: 117, title: 'Iris Flower Classification', category: 'Machine Learning', description: 'Classifies iris flowers into species based on petal and sepal measurements — a classic beginner ML dataset.', tech: 'Python, Scikit-learn, Pandas, Matplotlib', projectLevel: 'Minor', img: 'ML' },
    { id: 118, title: 'Titanic Survival Prediction', category: 'Machine Learning', description: 'Predicts passenger survival on the Titanic based on age, class, and other features.', tech: 'Python, Pandas, Scikit-learn, Logistic Regression', projectLevel: 'Minor', img: 'ML' },
    { id: 119, title: 'House Price Prediction using Regression', category: 'Machine Learning', description: 'Predicts housing prices based on area, location, and number of rooms.', tech: 'Linear Regression, Scikit-learn, Pandas, NumPy', projectLevel: 'Minor', img: 'ML' },
    { id: 120, title: 'Diabetes Prediction using Machine Learning', category: 'Machine Learning', description: 'Predicts likelihood of diabetes based on patient health metrics.', tech: 'Scikit-learn, Logistic Regression, Pandas, Seaborn', projectLevel: 'Minor', img: 'ML' },
    { id: 121, title: 'Spam Email Classification', category: 'Machine Learning', description: 'Classifies emails as spam or not spam using text features.', tech: 'NLP, Naive Bayes, Scikit-learn, CountVectorizer', projectLevel: 'Minor', img: 'ML' },
    { id: 122, title: 'Sentiment Analysis of Product Reviews', category: 'Machine Learning', description: 'Determines whether product reviews are positive or negative.', tech: 'NLP, TF-IDF, Scikit-learn, NLTK', projectLevel: 'Minor', img: 'ML' },
    { id: 123, title: 'Handwritten Digit Recognition', category: 'Machine Learning', description: 'Recognizes handwritten digits (0-9) using the MNIST dataset.', tech: 'CNN, TensorFlow/Keras, MNIST Dataset', projectLevel: 'Minor', img: 'ML' },
    { id: 124, title: 'Twitter Sentiment Analysis', category: 'Machine Learning', description: 'Analyzes tweets to determine public sentiment on a topic or brand.', tech: 'NLP, Tweepy API, VADER, Python', projectLevel: 'Minor', img: 'ML' },
    { id: 125, title: 'Customer Segmentation using K-Means Clustering', category: 'Machine Learning', description: 'Groups customers into segments based on purchasing behavior.', tech: 'K-Means Clustering, Scikit-learn, Pandas, Matplotlib', projectLevel: 'Minor', img: 'ML' },
    { id: 126, title: 'Loan Approval Prediction System', category: 'Machine Learning', description: 'Predicts whether a loan application will be approved based on applicant details.', tech: 'Logistic Regression, Random Forest, Scikit-learn, Pandas', projectLevel: 'Minor', img: 'ML' },
    { id: 127, title: 'Fake News Detection (Basic Model)', category: 'Machine Learning', description: 'Classifies news headlines/articles as real or fake.', tech: 'NLP, TF-IDF, Naive Bayes, Scikit-learn', projectLevel: 'Minor', img: 'ML' },
    { id: 128, title: 'Wine Quality Prediction', category: 'Machine Learning', description: 'Predicts the quality rating of wine based on chemical properties.', tech: 'Random Forest, Scikit-learn, Pandas, NumPy', projectLevel: 'Minor', img: 'ML' },
    { id: 129, title: 'Movie Recommendation System (Content-Based)', category: 'Machine Learning', description: 'Recommends movies to users based on genre and content similarity.', tech: 'Cosine Similarity, TF-IDF, Pandas, Scikit-learn', projectLevel: 'Minor', img: 'ML' },
    { id: 130, title: 'Email Spam Filter using Naive Bayes', category: 'Machine Learning', description: 'Filters spam emails using probabilistic text classification.', tech: 'Naive Bayes, NLP, Scikit-learn, Pandas', projectLevel: 'Minor', img: 'ML' },
    { id: 131, title: 'Student Performance Prediction', category: 'Machine Learning', description: 'Predicts student exam scores or pass/fail outcomes based on study habits and attendance.', tech: 'Linear Regression, Scikit-learn, Pandas, Matplotlib', projectLevel: 'Minor', img: 'ML' },
    { id: 132, title: 'Air Quality Index Prediction', category: 'Machine Learning', description: 'Predicts AQI levels based on pollutant concentration data.', tech: 'Regression Models, Scikit-learn, Pandas, NumPy', projectLevel: 'Minor', img: 'ML' },
    { id: 133, title: 'Weather Prediction using Machine Learning', category: 'Machine Learning', description: 'Predicts temperature or rainfall based on historical weather data.', tech: 'Random Forest, Scikit-learn, Pandas, Matplotlib', projectLevel: 'Minor', img: 'ML' },
    { id: 134, title: 'Employee Salary Prediction', category: 'Machine Learning', description: 'Predicts employee salary based on experience, role, and education.', tech: 'Linear Regression, Scikit-learn, Pandas', projectLevel: 'Minor', img: 'ML' },
    { id: 135, title: 'Breast Cancer Detection (Basic Model)', category: 'Machine Learning', description: 'Classifies tumors as benign or malignant using diagnostic features.', tech: 'SVM, Logistic Regression, Scikit-learn, Pandas', projectLevel: 'Minor', img: 'ML' },
    { id: 136, title: 'Fruit Classification using Image Processing', category: 'Machine Learning', description: 'Classifies different types of fruits from images.', tech: 'CNN, TensorFlow/Keras, OpenCV', projectLevel: 'Minor', img: 'ML' },
    { id: 137, title: 'Book Recommendation System', category: 'Machine Learning', description: 'Recommends books to users based on ratings and preferences.', tech: 'Collaborative Filtering, Pandas, Scikit-learn', projectLevel: 'Minor', img: 'ML' },
    { id: 138, title: 'Music Genre Classification', category: 'Machine Learning', description: 'Classifies music tracks into genres based on audio features.', tech: 'Librosa, CNN, TensorFlow, MFCC Feature Extraction', projectLevel: 'Minor', img: 'ML' },
    { id: 139, title: 'Language Detection using Machine Learning', category: 'Machine Learning', description: 'Detects the language of a given text input.', tech: 'NLP, Naive Bayes, Scikit-learn, langdetect', projectLevel: 'Minor', img: 'ML' },
    { id: 140, title: 'Emotion Detection from Text', category: 'Machine Learning', description: 'Classifies text into emotions like happy, sad, angry, or neutral.', tech: 'NLP, LSTM, TensorFlow, Scikit-learn', projectLevel: 'Minor', img: 'ML' },
    { id: 141, title: 'Credit Card Fraud Detection (Basic Model)', category: 'Machine Learning', description: 'Identifies fraudulent transactions using a small labeled dataset.', tech: 'Logistic Regression, Scikit-learn, Pandas', projectLevel: 'Minor', img: 'ML' },
    { id: 142, title: 'Face Detection using OpenCV', category: 'Machine Learning', description: 'Detects human faces in images or webcam feed in real time.', tech: 'OpenCV, Haar Cascades, Python', projectLevel: 'Minor', img: 'ML' },
    { id: 143, title: 'Calories Burnt Prediction', category: 'Machine Learning', description: 'Predicts calories burnt during exercise based on activity and biometric data.', tech: 'Linear Regression, XGBoost, Scikit-learn, Pandas', projectLevel: 'Minor', img: 'ML' },
    { id: 144, title: 'Online Payment Fraud Detection', category: 'Machine Learning', description: 'Identifies fraudulent online payment transactions using classification models.', tech: 'Random Forest, Scikit-learn, Pandas, NumPy', projectLevel: 'Minor', img: 'ML' },
    { id: 145, title: 'Text Summarization (Basic Extractive Model)', category: 'Machine Learning', description: 'Generates a short summary from a longer piece of text.', tech: 'NLP, NLTK, Gensim, TF-IDF', projectLevel: 'Minor', img: 'ML' },
    { id: 146, title: 'Chatbot using Rule-Based NLP', category: 'Machine Learning', description: 'Responds to user queries using predefined rules and pattern matching.', tech: 'NLTK, Python, Regular Expressions', projectLevel: 'Minor', img: 'ML' }
  ];

  const categories = ['All', ...new Set(allProjects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState('landing');
  const [activeDetailsTab, setActiveDetailsTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  
  const [levelFilter, setLevelFilter] = useState('All');
  const itemsPerPage = 6;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setLevelFilter('All');
    setCurrentPage(1);
  };

  const handleLevelFilterChange = (filter) => {
    setLevelFilter(filter);
    setCurrentPage(1);
  };

  const filteredProjects = useMemo(() => {
    let projs = allProjects;
    if (activeCategory !== 'All') {
      projs = projs.filter(p => p.category === activeCategory);
    }
    if (levelFilter !== 'All') {
      projs = projs.filter(p => p.projectLevel === levelFilter);
    }
    return projs;
  }, [activeCategory, levelFilter]);

  const hasMajorAndMinor = useMemo(() => {
    let projs = allProjects;
    if (activeCategory !== 'All') {
      projs = projs.filter(p => p.category === activeCategory);
    }
    const hasMajor = projs.some(p => p.projectLevel === 'Major');
    const hasMinor = projs.some(p => p.projectLevel === 'Minor' || p.category === 'Python');
    return hasMajor && hasMinor;
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleOpenDetails = (proj) => {
    setActiveProject(proj);
    setActiveTab('landing');
    setActiveDetailsTab('description');
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetails = () => {
    setActiveProject(null);
    setIsZoomed(false);
    document.body.style.overflow = 'unset';
  };

  const handleRequestSource = (projId, projTitle) => {
    const phoneNumber = '918555887986';
    const text = `Hello Hemsethu Technologies, I am interested in requesting the source code for the project: "${projTitle}" (Project ID: ${projId}).`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getScreenMedia = (tab) => {
    switch (tab) {
      case 'landing':
        return (
          <img 
            src={screenLanding} 
            alt="Landing Page Mockup" 
            className="preview-screenshot-img" 
            onClick={() => setIsZoomed(true)} 
            style={{ cursor: 'zoom-in' }} 
          />
        );
      case 'dashboard':
        return (
          <img 
            src={screenDashboard} 
            alt="Dashboard UI Mockup" 
            className="preview-screenshot-img" 
            onClick={() => setIsZoomed(true)} 
            style={{ cursor: 'zoom-in' }} 
          />
        );
      case 'ecommerce':
        return (
          <img 
            src={screenEcommerce} 
            alt="E-Commerce Mockup" 
            className="preview-screenshot-img" 
            onClick={() => setIsZoomed(true)} 
            style={{ cursor: 'zoom-in' }} 
          />
        );
      case 'code':
        return <SimulatedCodeScreen category={activeProject.category} />;
      default:
        return null;
    }
  };

  return (
    <main className="page-wrapper projects-page">
      <div className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)'}}>
        <h1>Projects Catalog</h1>
        <p>Browse our extensive library of industry-standard projects across all domains.</p>
      </div>

      <div className="page-content-wrap">
        <div className="category-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {hasMajorAndMinor && (
          <div className="category-filters" style={{ marginBottom: '40px' }}>
            <button 
              className={`filter-tab ${levelFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleLevelFilterChange('All')}
            >
              All Projects
            </button>
            <button 
              className={`filter-tab ${levelFilter === 'Major' ? 'active' : ''}`}
              onClick={() => handleLevelFilterChange('Major')}
            >
              Major Projects
            </button>
            <button 
              className={`filter-tab ${levelFilter === 'Minor' ? 'active' : ''}`}
              onClick={() => handleLevelFilterChange('Minor')}
            >
              Minor Projects
            </button>
          </div>
        )}

        {currentProjects.length > 0 ? (
          <div className="items-grid">
            {currentProjects.map(proj => (
              <div 
                key={proj.id} 
                className="item-card"
                onClick={() => handleOpenDetails(proj)}
                style={{ cursor: 'pointer' }}
              >
                <div className="item-image" style={{backgroundColor: '#e0f2fe', color: '#0369a1'}}>
                  <h3>{proj.img} Project</h3>
                </div>
                <div className="item-details">
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="proj-category-badge">{proj.category}</span>
                    <span className={`proj-level-badge ${proj.projectLevel === 'Minor' || proj.category === 'Python' ? 'minor' : 'major'}`}>
                      {proj.projectLevel || (proj.category === 'Python' ? 'Minor' : 'Major')} Project
                    </span>
                  </div>
                  <h3 className="item-title">{proj.title}</h3>
                  <p className="item-desc">{proj.description || `A comprehensive project covering the core concepts of ${proj.category}. Includes complete source code and documentation.`}</p>
                  <div className="item-footer">
                    <button 
                      className="item-btn btn-outline" 
                      style={{ width: '100%' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRequestSource(proj.id, proj.title);
                      }}
                    >
                      Request Source
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-found">
            <h3>No projects found for this category and filter.</h3>
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination-controls">
            <button 
              className="page-btn prev-next" 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i} 
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button 
              className="page-btn prev-next" 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* ==========================================================================
         Project Details Modal
         ========================================================================== */}
      {activeProject && (
        <div className="project-details-overlay" onClick={handleCloseDetails}>
          <div className="project-details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={handleCloseDetails}>
              <X size={20} />
            </button>

            {/* Left Content Side */}
            <div className="modal-details-content">
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="modal-category-badge">{activeProject.category}</span>
                <span className={`proj-level-badge ${activeProject.projectLevel === 'Minor' || activeProject.category === 'Python' ? 'minor' : 'major'}`}>
                  {activeProject.projectLevel || (activeProject.category === 'Python' ? 'Minor' : 'Major')} Project
                </span>
              </div>
              <h2 className="modal-project-title">{activeProject.title}</h2>

              {/* Three Specs Tabs Bar */}
              <div className="details-tab-bar">
                <button 
                  className={`details-tab-btn ${activeDetailsTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveDetailsTab('description')}
                >
                  <span className="tab-radio-dot"></span>
                  Description
                </button>
                <button 
                  className={`details-tab-btn ${activeDetailsTab === 'documentation' ? 'active' : ''}`}
                  onClick={() => setActiveDetailsTab('documentation')}
                >
                  <span className="tab-radio-dot"></span>
                  Documentation & PPT
                </button>
                <button 
                  className={`details-tab-btn ${activeDetailsTab === 'videos' ? 'active' : ''}`}
                  onClick={() => setActiveDetailsTab('videos')}
                >
                  <span className="tab-radio-dot"></span>
                  Video Files
                </button>
              </div>

              {/* Tab 1 Content: Description */}
              {activeDetailsTab === 'description' && (
                <>
                  <div>
                    <h3 className="modal-section-title">Project Overview</h3>
                    <p className="modal-desc-text">
                      {activeProject.description || getProjectDetails(activeProject.category).description}
                    </p>
                  </div>

                  {/* Specifications Card */}
                  <div>
                    <h3 className="modal-section-title">Technical Specifications</h3>
                    <div className="specs-grid-layout">
                      <div className="spec-row-item">
                        <div className="spec-label-block">
                          <Award size={16} />
                          <span>Project Level:</span>
                        </div>
                        <span className="spec-val-block" style={{ fontWeight: '850', color: activeProject.projectLevel === 'Minor' || activeProject.category === 'Python' ? '#0d9488' : '#4f46e5' }}>
                          {activeProject.projectLevel || (activeProject.category === 'Python' ? 'Minor' : 'Major')}
                        </span>
                      </div>
                      {getProjectSpecs(activeProject.category, activeProject.id).specs.map((spec, idx) => (
                        <div key={idx} className="spec-row-item">
                          <div className="spec-label-block">
                            {spec.icon === 'api' && <Cpu size={16} />}
                            {spec.icon === 'framework' && <Layout size={16} />}
                            {spec.icon === 'ide' && <Code size={16} />}
                            {spec.icon === 'database' && <Database size={16} />}
                            {spec.icon === 'dfd' && <FileText size={16} />}
                            {spec.icon === 'video' && <Film size={16} />}
                            {spec.icon === 'er' && <HardDrive size={16} />}
                            {spec.icon === 'uml' && <RefreshCw size={16} />}
                            {spec.icon === 'ppt' && <Award size={16} />}
                            {spec.icon === 'srs' && <FileText size={16} />}
                            <span>{spec.label}:</span>
                          </div>
                          <span className="spec-val-block">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="modal-section-title">Key Core Features</h3>
                    <div className="modal-features-list">
                      {getProjectDetails(activeProject.category).features.map((feature, idx) => (
                        <div key={idx} className="modal-feature-item">
                          <Check size={18} className="modal-feature-check" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="modal-section-title">Technologies & Library Stack</h3>
                    <div className="modal-tech-stack-grid">
                      {(activeProject.tech 
                        ? activeProject.tech.split(', ') 
                        : getProjectDetails(activeProject.category).techStack
                      ).map((tech, idx) => (
                        <span key={idx} className="modal-tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Tab 2 Content: Documentation & PPT */}
              {activeDetailsTab === 'documentation' && (
                <div>
                  <h3 className="modal-section-title">Documentation & PPT Availability</h3>
                  <div className="specs-three-columns">
                    {/* Column 1 */}
                    <div className="doc-column-panel">
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">1st Review PPT:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.review1 === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.review1}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">2nd Review PPT:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.review2 === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.review2}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">3rd Review PPT:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.review3 === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.review3}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Architecture Diagram:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.architecture === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.architecture}
                        </span>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="doc-column-panel">
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Literature Survey:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.literature === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.literature}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Test Cases:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.testCases === 'Available' ? 'avail' : getProjectSpecs(activeProject.category, activeProject.id).doc.testCases === 'Not Required' ? 'not-req' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.testCases}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Data Dictionary:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.dataDictionary === 'Available' ? 'avail' : getProjectSpecs(activeProject.category, activeProject.id).doc.dataDictionary === 'Not Required' ? 'not-req' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.dataDictionary}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Future Enhancement:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.futureEnhancement === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.futureEnhancement}
                        </span>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="doc-column-panel">
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">SRS:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.srsDoc === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.srsDoc}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">All Modules:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.allModules === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.allModules}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Documentation:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.documentation.includes('Available') ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.documentation}
                        </span>
                      </div>
                      <div className="doc-checklist-item">
                        <span className="doc-checklist-lbl">Screen Shots:</span>
                        <span className={`doc-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).doc.screenshots === 'Available' ? 'avail' : 'not-avail'}`}>
                          {getProjectSpecs(activeProject.category, activeProject.id).doc.screenshots}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3 Content: Video Files */}
              {activeDetailsTab === 'videos' && (
                <div>
                  <h3 className="modal-section-title">Project Video Resources</h3>
                  <div className="video-files-panel">
                    <div className="video-checklist-item">
                      <span className="video-checklist-lbl">How to Install Softwares:</span>
                      <span className={`video-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).videos.install === 'Available' ? 'avail' : 'not-avail'}`}>
                        {getProjectSpecs(activeProject.category, activeProject.id).videos.install}
                      </span>
                    </div>
                    <div className="video-checklist-item">
                      <span className="video-checklist-lbl">How to Execute Project:</span>
                      <span className={`video-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).videos.execute === 'Available' ? 'avail' : 'not-avail'}`}>
                        {getProjectSpecs(activeProject.category, activeProject.id).videos.execute}
                      </span>
                    </div>
                    <div className="video-checklist-item">
                      <span className="video-checklist-lbl">Project Explanation Video:</span>
                      <span className={`video-checklist-status status-badge ${getProjectSpecs(activeProject.category, activeProject.id).videos.explanation === 'Available' ? 'avail' : 'not-avail'}`}>
                        {getProjectSpecs(activeProject.category, activeProject.id).videos.explanation}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Previews Side */}
            <div className="modal-previews-panel">
              <div className="previews-title-container">
                <h3 className="previews-panel-title">Interactive Screens Previews</h3>
                <span className="previews-panel-subtitle">Click screens to expand fully. Select a tab below:</span>
              </div>

              {/* Graphic Screen Mock */}
              <div className="simulated-screen-container">
                <div className="sim-screen-header">
                  <div className="sim-screen-dots">
                    <span className="sim-screen-dot red"></span>
                    <span className="sim-screen-dot yellow"></span>
                    <span className="sim-screen-dot green"></span>
                  </div>
                  <div className="sim-screen-url-bar">
                    {activeTab === 'landing' && 'https://hemshethu.in/landing'}
                    {activeTab === 'dashboard' && 'https://app.hemshethu.in/dashboard'}
                    {activeTab === 'ecommerce' && 'https://app.hemshethu.in/shop'}
                    {activeTab === 'code' && 'ide://hemshethu/source-code'}
                  </div>
                </div>
                <div className="sim-screen-body">
                  {getScreenMedia(activeTab)}
                </div>
              </div>

              {/* Slider Controller Navigation */}
              <div className="slider-tab-navigation">
                <button 
                  className={`slider-tab-btn ${activeTab === 'landing' ? 'active' : ''}`}
                  onClick={() => setActiveTab('landing')}
                >
                  Landing Page
                </button>
                <button 
                  className={`slider-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Dashboard UI
                </button>
                <button 
                  className={`slider-tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ecommerce')}
                >
                  Product Grid
                </button>
                <button 
                  className={`slider-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                  onClick={() => setActiveTab('code')}
                >
                  Source Code
                </button>
              </div>

              <div className="modal-footer-row">
                <button 
                  className="btn-modal-action download"
                  onClick={() => {
                    handleRequestSource(activeProject.id, activeProject.title);
                  }}
                >
                  Request Source Files
                </button>
                <button 
                  className="btn-modal-action close"
                  onClick={handleCloseDetails}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
         Lightbox Zoom View for Screenshots
         ========================================================================== */}
      {isZoomed && activeTab !== 'code' && (
        <div className="lightbox-overlay" onClick={() => setIsZoomed(false)}>
          <button className="btn-close-lightbox" onClick={() => setIsZoomed(false)}>
            <X size={24} />
          </button>
          <img 
            src={
              activeTab === 'landing' ? screenLanding :
              activeTab === 'dashboard' ? screenDashboard :
              screenEcommerce
            } 
            alt="Expanded Preview" 
            className="lightbox-img" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
