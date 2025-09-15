import FadeInWrapper from '@/components/FadeInWrapper';

export default function Lessons() {
  const categories = [
    {
      title: "Work & Career",
      icon: "💼",
      lessons: [
        {
          title: "The 80/20 Rule of Productivity",
          insight: "80% of your results come from 20% of your efforts. Focus ruthlessly on the activities that move the needle.",
          context: "Learned this after spending months on low-impact tasks that felt productive but didn't drive results.",
          application: "Now I audit my tasks weekly and eliminate anything that doesn't directly contribute to my top 3 goals."
        },
        {
          title: "Feedback is a Gift, Even When It Hurts",
          insight: "The most painful feedback is often the most valuable. Embrace it, even when it's hard to hear.",
          context: "A mentor once told me my presentation skills were 'terrible.' It stung, but it was the push I needed to improve.",
          application: "I now actively seek feedback and thank people for being honest, even when it's uncomfortable."
        },
        {
          title: "Done is Better Than Perfect",
          insight: "Perfect is the enemy of progress. Ship early, iterate often, and learn from real users.",
          context: "Spent 6 months perfecting a product that nobody wanted. Should have launched with an MVP.",
          application: "I now set strict deadlines and ship when something is 'good enough' rather than perfect."
        },
        {
          title: "Your Network is Your Net Worth",
          insight: "The quality of your relationships directly impacts your opportunities and success.",
          context: "Every major opportunity in my career came through someone I knew, not through job applications.",
          application: "I invest significant time in building genuine relationships and helping others without expecting anything in return."
        }
      ]
    },
    {
      title: "Relationships & Communication",
      icon: "🤝",
      lessons: [
        {
          title: "Listen More Than You Speak",
          insight: "You have two ears and one mouth for a reason. Listen to understand, not to respond.",
          context: "Realized I was missing crucial information because I was too focused on what I wanted to say next.",
          application: "I now practice active listening and ask follow-up questions before sharing my own thoughts."
        },
        {
          title: "Vulnerability Builds Trust",
          insight: "Sharing your struggles and failures makes you more relatable and trustworthy, not weaker.",
          context: "Started being more open about my failures in team meetings and saw immediate improvement in team dynamics.",
          application: "I regularly share my mistakes and what I learned from them with my team and community."
        },
        {
          title: "Assume Positive Intent",
          insight: "Most people aren't trying to hurt you. Assume they have good reasons for their actions.",
          context: "A colleague seemed to be undermining me, but it turned out they were just trying to help in their own way.",
          application: "When someone's actions seem negative, I ask clarifying questions before jumping to conclusions."
        },
        {
          title: "Say No to Say Yes to What Matters",
          insight: "Every yes to something unimportant is a no to something important.",
          context: "Said yes to too many projects and ended up doing none of them well.",
          application: "I now have a clear priority framework and say no to anything that doesn't align with my top goals."
        }
      ]
    },
    {
      title: "Productivity & Systems",
      icon: "⚡",
      lessons: [
        {
          title: "Time Blocking Beats To-Do Lists",
          insight: "Scheduling specific time for tasks is more effective than just listing what needs to be done.",
          context: "Had 50+ items on my to-do list but never seemed to make progress. Time blocking changed everything.",
          application: "I now schedule every important task in my calendar and treat those blocks as non-negotiable meetings."
        },
        {
          title: "Energy Management > Time Management",
          insight: "Manage your energy, not just your time. Do your most important work when you have the most energy.",
          context: "Tried to do creative work at 3 PM when I was always tired. Moved it to 9 AM and productivity doubled.",
          application: "I schedule my most demanding tasks during my peak energy hours and save routine tasks for low-energy times."
        },
        {
          title: "Automate Everything You Can",
          insight: "If you do something more than twice, find a way to automate it.",
          context: "Was spending hours every week on repetitive tasks that could easily be automated.",
          application: "I now audit my workflows monthly and look for automation opportunities using tools like Zapier and scripts."
        },
        {
          title: "Batch Similar Tasks",
          insight: "Grouping similar activities together reduces context switching and increases efficiency.",
          context: "Was constantly switching between writing, emails, and calls. Batching them improved focus significantly.",
          application: "I now have specific days for specific types of work (e.g., Monday for planning, Tuesday for writing)."
        }
      ]
    },
    {
      title: "Learning & Growth",
      icon: "📚",
      lessons: [
        {
          title: "Learn by Doing, Not Just Reading",
          insight: "You can't learn to swim by reading about swimming. Get your hands dirty and learn through experience.",
          context: "Read 20 books on entrepreneurship but learned more from my first failed business than all the books combined.",
          application: "I now balance learning with doing, always trying to apply new knowledge immediately in real projects."
        },
        {
          title: "Teach What You Learn",
          insight: "The best way to solidify your understanding is to explain it to someone else.",
          context: "Started writing about what I learned and realized I didn't understand it as well as I thought.",
          application: "I regularly write about my learnings and teach others, which deepens my own understanding."
        },
        {
          title: "Embrace the Beginner's Mind",
          insight: "Approach everything with curiosity and openness, even in areas where you have expertise.",
          context: "Thought I knew everything about marketing until I learned about new platforms and strategies.",
          application: "I now approach every new topic with genuine curiosity and ask 'What can I learn here?'"
        },
        {
          title: "Failure is Data, Not Defeat",
          insight: "Every failure teaches you something valuable. The key is to extract the lesson and apply it.",
          context: "Failed at 3 different business ideas before finding one that worked. Each failure taught me something crucial.",
          application: "I now document what went wrong in every failure and create action plans to avoid similar mistakes."
        }
      ]
    },
    {
      title: "Money & Business",
      icon: "💰",
      lessons: [
        {
          title: "Revenue Solves Most Problems",
          insight: "Most business problems can be solved with more revenue. Focus on making money first, optimizing later.",
          context: "Spent months optimizing processes for a business that wasn't making money. Should have focused on sales first.",
          application: "I now prioritize revenue-generating activities over everything else in the early stages of any business."
        },
        {
          title: "Cash Flow is King",
          insight: "Profit is an opinion, cash flow is a fact. You can't pay bills with profit, only with cash.",
          context: "Had a profitable business on paper but was constantly stressed about paying bills due to poor cash flow management.",
          application: "I now track cash flow weekly and have 6 months of expenses in reserve before investing in growth."
        },
        {
          title: "Price is a Signal of Value",
          insight: "Your pricing communicates the value you provide. Don't compete on price, compete on value.",
          context: "Undervalued my services and attracted clients who didn't appreciate quality work.",
          application: "I now price based on value delivered, not time spent, and attract better clients who value quality."
        },
        {
          title: "Invest in Yourself First",
          insight: "The best investment you can make is in your own skills and knowledge.",
          context: "Spent money on fancy tools and software but neglected investing in my own development.",
          application: "I now allocate 20% of my income to learning, courses, and personal development before any other investments."
        }
      ]
    }
  ];

  const quickInsights = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "You are the average of the five people you spend the most time with.",
    "What gets measured gets managed.",
    "The obstacle is the way.",
    "Progress, not perfection.",
    "Done is better than perfect.",
    "Your network is your net worth.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who learn more skills and combine them in creative ways."
  ];

  return (
    <div className="cinematic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInWrapper>
            <h1 className="text-5xl font-bold text-white mb-6">
              Lessons Learned
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The hard-won wisdom from my journey as an entrepreneur, builder, and lifelong learner. 
              These are the insights that have shaped how I think, work, and live.
            </p>
          </FadeInWrapper>
        </div>

        {/* Quick Insights */}
        <FadeInWrapper delay={100}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Quick Insights
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Bite-sized wisdom that I live by
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickInsights.map((insight, index) => (
                <FadeInWrapper key={index} delay={index * 50}>
                  <div className="glass rounded-lg p-4 text-center">
                    <p className="text-gray-300 italic">"{insight}"</p>
                  </div>
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* Detailed Lessons by Category */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <FadeInWrapper key={category.title} delay={categoryIndex * 100}>
              <div>
                <div className="text-center mb-12">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {category.lessons.map((lesson, lessonIndex) => (
                    <FadeInWrapper key={lesson.title} delay={lessonIndex * 100}>
                      <div className="glass rounded-2xl p-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {lesson.title}
                            </h3>
                            
                            <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 mb-6">
                              <p className="text-purple-200 text-lg font-medium">
                                "{lesson.insight}"
                              </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">The Context</h4>
                                <p className="text-gray-300 leading-relaxed">
                                  {lesson.context}
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">How I Apply It</h4>
                                <p className="text-gray-300 leading-relaxed">
                                  {lesson.application}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeInWrapper>
                  ))}
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>

        {/* Call to Action */}
        <FadeInWrapper delay={600}>
          <div className="text-center mt-20">
            <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                What Lessons Have You Learned?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always curious about the insights others have gained from their experiences. 
                What's the most important lesson you've learned recently?
              </p>
              <a
                href="/contact"
                className="pill-button pill-primary"
              >
                Share Your Insights
              </a>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}
