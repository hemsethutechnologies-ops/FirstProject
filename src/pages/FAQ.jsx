import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, BookOpen, Code2, Briefcase, GraduationCap, CreditCard, Globe } from 'lucide-react';
import './PageStyles.css';
import './FAQ.css';

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'general', label: 'General', icon: Globe },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'internships', label: 'Internships', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: GraduationCap },
  { id: 'payments', label: 'Payments', icon: CreditCard },
];

const faqs = [
  // General
  {
    id: 1,
    category: 'general',
    question: 'What is Hemsethu Technologies?',
    answer: 'Hemsethu Technologies is a leading IT training and project development company based in Hyderabad & Secunderabad, Telangana. We specialize in academic projects, software development, professional training, internships, and career placement assistance for students and professionals alike.',
  },
  {
    id: 2,
    category: 'general',
    question: 'Where are your offices located?',
    answer: 'We have offices in both Hyderabad and Secunderabad, Telangana, India. We also offer fully remote services and online training programs so students from across India can benefit from our offerings.',
  },
  {
    id: 3,
    category: 'general',
    question: 'How can I contact Hemsethu Technologies?',
    answer: 'You can reach us via phone at +91 8555 8879 86, email us at hemsethutechnologies@gmail.com, or visit our Contact page to fill out a request form. Our support team typically responds within 24 hours.',
  },
  {
    id: 4,
    category: 'general',
    question: 'Do you offer support after project or course completion?',
    answer: 'Yes! We provide post-completion support for all our projects and courses. Our team is available to assist with bug fixes, explanations, and guidance even after you receive your deliverables. The support duration varies by package — typically 15 to 30 days.',
  },

  // Courses
  {
    id: 5,
    category: 'courses',
    question: 'What courses does Hemsethu Technologies offer?',
    answer: 'We offer a wide range of industry-relevant courses including Frontend Development, Backend Development, Fullstack Masterclass, UI/UX Design, DevOps & Cloud, and Cybersecurity. All courses are taught by experienced industry professionals and include hands-on projects.',
  },
  {
    id: 6,
    category: 'courses',
    question: 'Are the courses available online or only offline?',
    answer: 'We offer both online and offline (classroom) modes. Online sessions are conducted via live interactive webinars with recorded sessions provided for revision. Offline classes are held at our Hyderabad and Secunderabad centers.',
  },
  {
    id: 7,
    category: 'courses',
    question: 'What is the duration of your training programs?',
    answer: 'Course durations vary: short-term programs run 4–6 weeks, while comprehensive masterclass programs span 3–6 months. We also offer weekend batches specifically designed for working professionals who cannot attend weekday sessions.',
  },
  {
    id: 8,
    category: 'courses',
    question: 'Do I need any prior experience to enroll in a course?',
    answer: 'Most of our courses are designed to be beginner-friendly, starting from the fundamentals. For advanced courses like DevOps & Cloud or Cybersecurity, a basic understanding of programming and networking is recommended. Our counselors can help you choose the right course based on your background.',
  },

  // Projects
  {
    id: 9,
    category: 'projects',
    question: 'What types of academic projects do you develop?',
    answer: 'We develop a comprehensive range of academic projects including IEEE projects, Python, Django, Machine Learning, Data Science, Artificial Intelligence, Android, Java, and .NET projects. We cater to B.E/B.Tech, M.E/M.Tech, MCA/MSc, Diploma, and Degree students.',
  },
  {
    id: 10,
    category: 'projects',
    question: 'How long does it take to complete a project?',
    answer: 'Project timelines depend on complexity. Simple academic projects typically take 5–10 working days. Medium-complexity projects (e.g., with ML models or APIs) take 15–25 days. Full-scale projects with custom features are delivered within 30–45 days. Urgent delivery is also available for an additional fee.',
  },
  {
    id: 11,
    category: 'projects',
    question: 'Will you provide project documentation and presentation support?',
    answer: 'Yes! Every project package includes complete documentation such as SRS (Software Requirements Specification), system design diagrams, and a project report. We also provide PPT presentation support and guide students through project viva/defense preparation.',
  },
  {
    id: 12,
    category: 'projects',
    question: 'Can I request a custom project with my own idea?',
    answer: 'Absolutely! We welcome custom project requests. You can share your project idea via our Contact page or call us directly. Our technical team will assess the feasibility, provide a timeline estimate, and give you a detailed quotation before commencing work.',
  },
  {
    id: 13,
    category: 'projects',
    question: 'Are the projects original and plagiarism-free?',
    answer: 'Yes, all projects developed by Hemsethu Technologies are 100% original and developed from scratch. We also offer a dedicated Plagiarism Check service for research papers and reports using industry-leading tools to ensure academic integrity.',
  },

  // Internships
  {
    id: 14,
    category: 'internships',
    question: 'What internship programs does Hemsethu offer?',
    answer: 'We offer Summer Internship Programs, Winter Internship Programs, Remote Internships, Pre-Placement Offers (PPO), and Intensive Bootcamps. These programs are designed to bridge the gap between academic learning and industry requirements.',
  },
  {
    id: 15,
    category: 'internships',
    question: 'Who is eligible to apply for an internship?',
    answer: 'Students in their 2nd, 3rd, or final year of B.E/B.Tech, M.Tech, MCA, or any CS/IT-related degree are eligible. Fresh graduates looking to upskill before joining the workforce are also welcome. Basic computer knowledge is preferred but not mandatory for all programs.',
  },
  {
    id: 16,
    category: 'internships',
    question: 'Will I receive a certificate after completing the internship?',
    answer: 'Yes, all interns who successfully complete the program receive an Industry-Recognized Internship Certificate from Hemsethu Technologies. This certificate is verifiable and can be added to your resume and LinkedIn profile. Performance-based Letters of Recommendation are also available.',
  },
  {
    id: 17,
    category: 'internships',
    question: 'Is the internship paid or unpaid?',
    answer: 'We offer both paid and unpaid internship tracks depending on the program and domain. Paid internships are typically available for candidates who qualify via a selection process. All internships provide real project experience, mentorship, and a verifiable certificate.',
  },

  // Certifications
  {
    id: 18,
    category: 'certifications',
    question: 'Do you provide industry-recognized certifications?',
    answer: 'Yes! Upon successful completion of our training programs, students receive an Industry-Recognized Training Certificate from Hemsethu Technologies. We also help students prepare for globally recognized exams such as AWS, Azure, Google Cloud, and CompTIA certifications.',
  },
  {
    id: 19,
    category: 'certifications',
    question: 'Is the training certificate valid for job applications?',
    answer: 'Our training certificates are recognized by numerous IT companies in Hyderabad, Bangalore, Pune, and other major tech hubs. They are issued with a unique certificate ID that employers can verify online, adding credibility to your candidacy.',
  },

  // Payments
  {
    id: 20,
    category: 'payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including UPI (GPay, PhonePe, Paytm), Net Banking, Credit/Debit Cards (Visa, Mastercard, RuPay), and cash payments at our office. EMI options are also available through select payment partners for course enrollments.',
  },
  {
    id: 21,
    category: 'payments',
    question: 'Do you offer any discounts or scholarships?',
    answer: 'Yes! We offer early-bird discounts, group enrollment discounts (for batches of 3 or more), and merit-based scholarships for academically outstanding students. Special discounts are also available during festive seasons. Contact our team to learn about current offers.',
  },
  {
    id: 22,
    category: 'payments',
    question: 'What is your refund policy?',
    answer: 'We offer a 7-day refund policy for course enrollments if you are not satisfied with the program content. For project development, refunds are processed on a case-by-case basis depending on the stage of completion. Please review our Terms & Conditions or contact support for specific cases.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} id={`faq-${faq.id}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <ChevronDown size={20} className="faq-chevron" />
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return faqs.filter((f) => {
      const matchCat = activeCategory === 'all' || f.category === activeCategory;
      const matchSearch = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenId(null);
  };

  return (
    <main className="page-wrapper">
      {/* Hero Header */}
      <div className="page-header faq-hero-header">
        <div className="faq-hero-badge">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </div>
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about Hemsethu Technologies — from courses and projects to payments and certifications.</p>

        {/* Search Bar */}
        <div className="faq-search-wrap">
          <Search size={20} className="faq-search-icon" />
          <input
            id="faq-search"
            type="text"
            className="faq-search-input"
            placeholder="Search questions…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenId(null);
            }}
          />
        </div>
      </div>

      <div className="page-content-wrap faq-content-wrap">
        {/* Category Tabs */}
        <div className="faq-categories" role="tablist">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              id={`faq-tab-${id}`}
              role="tab"
              aria-selected={activeCategory === id}
              className={`faq-cat-btn ${activeCategory === id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(id)}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filtered.length > 0 ? (
            filtered.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))
          ) : (
            <div className="faq-empty">
              <HelpCircle size={48} />
              <h3>No results found</h3>
              <p>Try a different keyword or browse all categories.</p>
            </div>
          )}
        </div>

        {/* Still need help CTA */}
        <div className="faq-cta-box">
          <div className="faq-cta-icon">
            <HelpCircle size={32} />
          </div>
          <div className="faq-cta-text">
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Our friendly support team is here to help.</p>
          </div>
          <a href="/contact" className="faq-cta-btn">Contact Support</a>
        </div>
      </div>
    </main>
  );
}
