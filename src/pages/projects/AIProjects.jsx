import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

export default function AIProjects() {
  const projects = [
    { id: 1, title: 'AI Conversational Chatbot Assistant', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 2, title: 'Real-Time Face Recognition security', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 3, title: 'NLP Text Summarizer & Synthesizer', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 4, title: 'Object Detection & Classification App', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 5, title: 'AI Image Generator (Stable Diffusion API)', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' },
    { id: 6, title: 'Autonomous Self-Driving Car Simulator', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 7, title: 'Speech-to-Text Multi-Language Translator', category: 'Artificial Intelligence', price: 'Free', img: 'AI' },
    { id: 8, title: 'Generative AI Code Assistant Extension', category: 'Artificial Intelligence', price: 'Premium', img: 'AI' }
  ];

  return (
    <ProjectTemplate 
      title="Artificial Intelligence"
      description="Innovative projects covering Computer Vision, Natural Language Processing, and Deep Neural Networks."
      projects={projects}
      backgroundGradient="linear-gradient(135deg, var(--primary-dark) 0%, #db2777 100%)"
    />
  );
}
