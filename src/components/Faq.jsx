import React, { useRef, useState } from "react";

// Accordion Component
const Accordion = ({ items = [], allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const panelsRef = useRef([]);

  const isOpen = (index) => openIndexes.includes(index);

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full px-4 sm:max-w-7xl">
      {items.map((item, idx) => (
        <div key={item.id ?? idx} className="border-b border-b-[#1173b994] py-6">
          <h3>
            <button
              aria-expanded={isOpen(idx)}
              aria-controls={`accordion-panel-${idx}`}
              id={`accordion-button-${idx}`}
              onClick={() => toggleIndex(idx)}
              className="w-full text-left flex items-center justify-between focus:outline-none"
            >
              <span className="text-sm md:text-lg font-Secondary font-medium">{item.title}</span>
              <svg
                className={`w-7 h-7 transform transition-transform duration-200 ${
                  isOpen(idx) ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </h3>

          <div
            id={`accordion-panel-${idx}`}
            role="region"
            aria-labelledby={`accordion-button-${idx}`}
            ref={(el) => (panelsRef.current[idx] = el)}
            style={{
              maxHeight: isOpen(idx)
                ? panelsRef.current[idx]
                  ? `${panelsRef.current[idx].scrollHeight}px`
                  : "none"
                : "0px",
            }}
            className="overflow-hidden transition-all duration-300"
          >
            <div className="font-Secondary text-base text-gray-700 dark:text-gray-300 pt-2">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// FAQ Page
const Faq = () => {
  const faqItems = [
    {
      id: "1",
      title: "What Services Does Hidden Ideas Infotech Technologies Provide?",
      content:
        "We offer full-cycle digital product development, including mobile apps, custom websites, full-stack development, QA testing, UI/UX design, and AI/ML integration, tailored to your business needs.",
    },
    {
      id: "2",
      title: "Do You Work with Startups or Only Established Companies?",
      content:
        "We work with both. Whether you’re an early-stage startup or a growing enterprise, our team can scale to match your goals, timeline, and product vision.",
    },
    {
      id: "3",
      title: "How is Your Devlopment Process Structured?",
      content:
        "We follow an agile methodology, starting with research and strategy, then moving to design, development, testing, and launch. You’re involved at every stage for complete visibility and control.",
    },
    {
      id: "4",
      title: "What Technologies Does Your Team Specialize In?",
      content:
        "Our tech stack includes React, Next.js, Vue, Flutter, Node.js, Python, PHP, and more. We choose the best tools based on project scope, performance, and future scalability.",
    },
    {
      id: "5",
      title: "What Make Hidden Ideas Infotech Different From Other Development Agencies?",
      content:
        "Beyond code, we bring strategic thinking, seamless communication, and product ownership. Our clients love how we blend execution with empathy, acting as an extension of your team.",
    },
    {
      id: "6",
      title: "How Do I Get Started with A New Project?",
      content:
        "Just contact us through the form below. We’ll schedule a free discovery call, understand your needs, and share a tailored roadmap with estimated cost, time, and execution flow.",
    },
  ];

  return (
    <>
      <section className="pb-[50px] bg-[#7c78781a] dark:bg-black dark:text-white">
        <div className="container">
          <div className="row">
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="dark:text-white heading flex  justify-center px-[10px] font-bold mb-8 text-center uppercase tracking-wider font-Primary text-[24px] sm:text-[30px] md:text-[38px] wow animate__ animate__zoomIn  animated">
                Any Questions? We’re Here to Help
              </h2>
              <Accordion items={faqItems} allowMultiple={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
