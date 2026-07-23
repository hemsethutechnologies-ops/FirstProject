import React, { useState, useEffect } from 'react';
import '../pages/PageStyles.css';
import '../pages/Projects.css';
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
import screenEcommerce from '../assets/project_screen_ecommerce.png';
import screenDashboard from '../assets/project_screen_dashboard.png';
import screenLanding from '../assets/project_screen_landing.png';

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
        <div className="sim-code-line"><span className="sim-code-ln">8</span><span className="sim-code-content">app.<span className="sim-code-function">listen</span>(<span className="sim-code-string">5000</span>, () =&gt; console.<span className="sim-code-function">log</span>(<span className="sim-code-string">'Server listening...'</span>));</span></div>
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

export default function ProjectTemplate({ title, description, projects, backgroundGradient }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState('landing'); // 'landing', 'dashboard', 'ecommerce', 'code'
  const [activeDetailsTab, setActiveDetailsTab] = useState('description'); // 'description', 'documentation', 'videos'
  const [isZoomed, setIsZoomed] = useState(false);
  
  const [levelFilter, setLevelFilter] = useState('All');

  const hasMajorAndMinor = React.useMemo(() => {
    const hasMajor = projects.some(p => p.projectLevel === 'Major');
    const hasMinor = projects.some(p => p.projectLevel === 'Minor');
    return hasMajor && hasMinor;
  }, [projects]);

  const filteredProjects = React.useMemo(() => {
    if (levelFilter === 'All') return projects;
    return projects.filter(p => p.projectLevel === levelFilter);
  }, [projects, levelFilter]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleLevelFilterChange = (filter) => {
    setLevelFilter(filter);
    setCurrentPage(1);
  };

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
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const handleCloseDetails = () => {
    setActiveProject(null);
    setIsZoomed(false);
    document.body.style.overflow = 'unset'; // Unlock background scroll
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
      <div 
        className="page-header" 
        style={{ background: backgroundGradient || 'linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-orange) 100%)' }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="page-content-wrap">
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
                <div className="item-image" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>
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
                        e.stopPropagation(); // Avoid opening the modal on click
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
            <h3>No projects found for this category.</h3>
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

                  {/* Specifications Card (Screenshot 1) */}
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
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}
    </main>
  );
}
