import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Is FinTrack free to use?",
    answer:
      "Yes. FinTrack is currently free to use. Premium features may be introduced in the future, while a free plan will always remain available.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes. FinTrack uses JWT authentication, encrypted password storage, and verified Google Sign-In. We follow modern security practices to help protect your account.",
  },
  {
    question: "Can I sign in with Google?",
    answer:
      "Absolutely. You can create an account or log in securely using your Google account with one click.",
  },
  {
    question: "Can I use FinTrack on mobile?",
    answer:
      "Yes. FinTrack is fully responsive and works across desktop, tablet, and mobile browsers. A dedicated mobile app is planned for the future.",
  },
  {
    question: "What features are coming next?",
    answer:
      "Upcoming features include recurring transactions, savings goals, AI-powered insights, bill reminders, CSV/PDF export, notifications, and much more.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Everything you need to know before getting started with
            FinTrack.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>

                <FiChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-6 leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;