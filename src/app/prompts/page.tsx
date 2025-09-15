'use client';

import FadeInWrapper from '@/components/FadeInWrapper';
import { useState } from 'react';

export default function Prompts() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = async (text: string, promptTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(promptTitle);
      setTimeout(() => setCopiedPrompt(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedPrompt(promptTitle);
        setTimeout(() => setCopiedPrompt(null), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const categories = [
    {
      title: "Sales & Marketing",
      description: "Prompts to help you sell better, market smarter, and grow your business",
      icon: "📈",
      prompts: [
        {
          title: "Email Subject Line Generator",
          prompt: "Create 10 compelling email subject lines for [PRODUCT/SERVICE] that will increase open rates. Focus on curiosity, urgency, and value. Target audience: [AUDIENCE]. Tone: [TONE].",
          useCase: "Email marketing campaigns",
          difficulty: "Beginner"
        },
        {
          title: "Sales Pitch Refiner",
          prompt: "Help me refine this sales pitch: [YOUR PITCH]. Make it more compelling by: 1) Leading with the customer's pain point, 2) Positioning our solution as the obvious choice, 3) Including social proof, 4) Creating urgency. Keep it under 2 minutes when spoken.",
          useCase: "Sales presentations",
          difficulty: "Intermediate"
        },
        {
          title: "Customer Persona Builder",
          prompt: "Create a detailed customer persona for [PRODUCT/SERVICE]. Include: demographics, psychographics, pain points, goals, objections, preferred communication channels, and buying behavior. Make it specific and actionable.",
          useCase: "Marketing strategy",
          difficulty: "Beginner"
        },
        {
          title: "Content Calendar Generator",
          prompt: "Create a 30-day content calendar for [INDUSTRY] business targeting [AUDIENCE]. Include: post types, topics, hashtags, and optimal posting times. Focus on [GOAL: brand awareness/lead generation/sales].",
          useCase: "Content marketing",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "Learning & Development",
      description: "Prompts to accelerate your learning and skill development",
      icon: "🎓",
      prompts: [
        {
          title: "Skill Learning Path",
          prompt: "Create a 90-day learning path for [SKILL]. Include: weekly milestones, recommended resources, practice exercises, and how to measure progress. Start from [CURRENT LEVEL] and aim for [TARGET LEVEL].",
          useCase: "Skill development",
          difficulty: "Beginner"
        },
        {
          title: "Knowledge Synthesizer",
          prompt: "I just learned about [TOPIC]. Help me synthesize this knowledge by: 1) Summarizing key concepts, 2) Connecting it to what I already know, 3) Identifying practical applications, 4) Suggesting next learning steps.",
          useCase: "Learning retention",
          difficulty: "Beginner"
        },
        {
          title: "Expert Interview Questions",
          prompt: "Generate 15 insightful questions to ask [EXPERT TYPE] about [TOPIC]. Mix: technical questions, experience-based questions, and future-focused questions. Aim for a 30-minute conversation.",
          useCase: "Expert interviews",
          difficulty: "Intermediate"
        },
        {
          title: "Learning Project Ideas",
          prompt: "Suggest 5 hands-on projects to learn [SKILL] by doing. Each project should: 1) Take 1-2 weeks, 2) Build on previous projects, 3) Be portfolio-worthy, 4) Solve a real problem. Include specific deliverables.",
          useCase: "Practical learning",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "Creativity & Innovation",
      description: "Prompts to boost creativity and generate innovative ideas",
      icon: "💡",
      prompts: [
        {
          title: "Idea Generator",
          prompt: "Generate 20 innovative business ideas that solve [PROBLEM] for [TARGET AUDIENCE]. Consider: emerging technologies, changing consumer behavior, and untapped markets. Rate each idea for feasibility and market potential.",
          useCase: "Brainstorming sessions",
          difficulty: "Beginner"
        },
        {
          title: "Creative Problem Solver",
          prompt: "I'm facing this challenge: [CHALLENGE]. Help me solve it using creative problem-solving techniques: 1) Reframe the problem, 2) Generate 10 wild ideas, 3) Find the most practical solution, 4) Create an action plan.",
          useCase: "Problem solving",
          difficulty: "Intermediate"
        },
        {
          title: "Innovation Workshop Facilitator",
          prompt: "Design a 2-hour innovation workshop for [TEAM SIZE] people to generate ideas for [CHALLENGE]. Include: icebreakers, ideation techniques, evaluation criteria, and next steps. Make it engaging and productive.",
          useCase: "Team workshops",
          difficulty: "Advanced"
        },
        {
          title: "Trend Analyzer",
          prompt: "Analyze these trends: [TREND 1, TREND 2, TREND 3]. Identify: 1) How they might converge, 2) New opportunities they create, 3) Potential challenges, 4) How to prepare for them. Focus on [INDUSTRY].",
          useCase: "Strategic planning",
          difficulty: "Advanced"
        }
      ]
    },
    {
      title: "Productivity & Systems",
      description: "Prompts to optimize your workflow and productivity",
      icon: "⚡",
      prompts: [
        {
          title: "Workflow Optimizer",
          prompt: "Analyze my current workflow: [DESCRIBE WORKFLOW]. Identify: 1) Bottlenecks and inefficiencies, 2) Automation opportunities, 3) Tools that could help, 4) A streamlined process. Focus on [GOAL].",
          useCase: "Process improvement",
          difficulty: "Intermediate"
        },
        {
          title: "Task Prioritizer",
          prompt: "Help me prioritize these tasks: [LIST TASKS]. Use the Eisenhower Matrix and consider: deadlines, impact, effort, and dependencies. Provide a ranked list with reasoning for each decision.",
          useCase: "Task management",
          difficulty: "Beginner"
        },
        {
          title: "Meeting Optimizer",
          prompt: "Review this meeting agenda: [AGENDA]. Suggest improvements for: 1) Time allocation, 2) Participant roles, 3) Decision-making process, 4) Follow-up actions. Aim for maximum productivity.",
          useCase: "Meeting efficiency",
          difficulty: "Beginner"
        },
        {
          title: "Habit Builder",
          prompt: "Help me build the habit of [HABIT]. Create: 1) A 30-day plan with daily actions, 2) Environmental design suggestions, 3) Accountability systems, 4) Progress tracking methods. Start from [CURRENT SITUATION].",
          useCase: "Habit formation",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "Writing & Communication",
      description: "Prompts to improve your writing and communication skills",
      icon: "✍️",
      prompts: [
        {
          title: "Content Outline Generator",
          prompt: "Create a detailed outline for [CONTENT TYPE] about [TOPIC]. Include: hook, main points, supporting evidence, examples, and call-to-action. Target audience: [AUDIENCE]. Length: [WORD COUNT].",
          useCase: "Content creation",
          difficulty: "Beginner"
        },
        {
          title: "Tone Adjuster",
          prompt: "Rewrite this text in [TONE]: [YOUR TEXT]. Maintain the core message but adjust: word choice, sentence structure, formality level, and emotional appeal. Target audience: [AUDIENCE].",
          useCase: "Tone adaptation",
          difficulty: "Beginner"
        },
        {
          title: "Story Structure Builder",
          prompt: "Help me structure this story: [STORY IDEA]. Use the hero's journey framework and include: character development, conflict escalation, resolution, and key turning points. Make it engaging and memorable.",
          useCase: "Storytelling",
          difficulty: "Intermediate"
        },
        {
          title: "Presentation Script Writer",
          prompt: "Write a presentation script for [TOPIC] lasting [DURATION]. Include: opening hook, clear structure, smooth transitions, audience engagement, and strong conclusion. Target audience: [AUDIENCE].",
          useCase: "Presentations",
          difficulty: "Intermediate"
        }
      ]
    }
  ];

  const featuredPrompts = [
    {
      title: "The Ultimate Business Plan Generator",
      prompt: "Create a comprehensive business plan for [BUSINESS IDEA]. Include: executive summary, market analysis, competitive landscape, marketing strategy, operations plan, financial projections, and risk assessment. Make it investor-ready.",
      category: "Business Planning",
      difficulty: "Advanced",
      uses: 1250
    },
    {
      title: "Daily Reflection Journal",
      prompt: "Help me reflect on my day with these questions: 1) What went well today? 2) What could have gone better? 3) What did I learn? 4) What will I do differently tomorrow? 5) What am I grateful for? Keep responses concise but meaningful.",
      category: "Personal Development",
      difficulty: "Beginner",
      uses: 890
    },
    {
      title: "Customer Interview Script",
      prompt: "Create a customer interview script to understand [PROBLEM] better. Include: warm-up questions, problem discovery questions, solution validation questions, and closing questions. Aim for 30 minutes and make it conversational.",
      category: "Research",
      difficulty: "Intermediate",
      uses: 650
    }
  ];

  return (
    <div className="cinematic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInWrapper>
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Prompt Library
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A curated collection of AI prompts that I use daily to boost productivity, 
              enhance creativity, and solve complex problems. These aren't just prompts—they're 
              proven frameworks for better thinking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                <span className="text-green-400 font-medium">50+ Prompts</span>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-medium">5 Categories</span>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                <span className="text-purple-400 font-medium">Free to Use</span>
              </div>
            </div>
          </FadeInWrapper>
        </div>

        {/* Featured Prompts */}
        <FadeInWrapper delay={100}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Most Popular Prompts
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                The prompts I use most frequently and that get the best results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPrompts.map((prompt, index) => (
                <FadeInWrapper key={prompt.title} delay={index * 100}>
                  <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                        {prompt.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {prompt.uses} uses
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {prompt.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {prompt.prompt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        prompt.difficulty === 'Beginner' 
                          ? 'bg-green-500/20 text-green-400'
                          : prompt.difficulty === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {prompt.difficulty}
                      </span>
                      
                      <button 
                        onClick={() => copyToClipboard(prompt.prompt, prompt.title)}
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                      >
                        {copiedPrompt === prompt.title ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy Prompt
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <FadeInWrapper key={category.title} delay={categoryIndex * 100}>
              <div>
                <div className="text-center mb-12">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.prompts.map((prompt, promptIndex) => (
                    <FadeInWrapper key={prompt.title} delay={promptIndex * 100}>
                      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">
                            {prompt.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            prompt.difficulty === 'Beginner' 
                              ? 'bg-green-500/20 text-green-400'
                              : prompt.difficulty === 'Intermediate'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {prompt.difficulty}
                          </span>
                        </div>
                        
                        <p className="text-gray-400 text-sm mb-4">
                          Use case: {prompt.useCase}
                        </p>
                        
                        <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                          <p className="text-gray-300 text-sm font-mono leading-relaxed">
                            {prompt.prompt}
                          </p>
                        </div>

                        <button 
                          onClick={() => copyToClipboard(prompt.prompt, prompt.title)}
                          className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
                        >
                          {copiedPrompt === prompt.title ? (
                            <>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied to Clipboard!
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              Copy Prompt
                            </>
                          )}
                        </button>
                      </div>
                    </FadeInWrapper>
                  ))}
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>

        {/* How to Use Section */}
        <FadeInWrapper delay={600}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                How to Use These Prompts
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get the most out of these prompts with these best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Customize</h3>
                <p className="text-gray-300 text-sm">Replace placeholders with your specific context and requirements</p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Iterate</h3>
                <p className="text-gray-300 text-sm">Refine the prompt based on results and your specific needs</p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Experiment</h3>
                <p className="text-gray-300 text-sm">Try different variations to find what works best for you</p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Share</h3>
                <p className="text-gray-300 text-sm">Share your successful variations with others</p>
              </div>
            </div>
          </div>
        </FadeInWrapper>

        {/* Download Section */}
        <FadeInWrapper delay={700}>
          <div className="text-center mt-20">
            <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Download the Complete Library
              </h3>
              <p className="text-gray-300 mb-6">
                Get all prompts in a convenient PDF format, plus bonus prompts and templates 
                that aren't available on the website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="pill-button pill-primary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
                <button className="pill-button pill-secondary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Subscribe for Updates
                </button>
              </div>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}