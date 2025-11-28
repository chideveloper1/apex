// app/faq/page.tsx
"use client";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Apex Trades Funding?",
      answer:
        "Apex Trades Funding is a platform that provides funding and account management services — we help users deposit funds, manage wallets, and facilitate withdrawals in a secure environment.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click on 'Sign Up,' fill out the registration form (email, password, and other required details), verify your email, and log in. Complete your profile to access funding and other services.",
    },
    {
      question: "How can I fund my account?",
      answer:
        "You can fund your account by creating a deposit request: select payment method (BTC, ETH, USDT), enter the amount, and send your funds to the wallet address provided. Funds will reflect after confirmation.",
    },
    {
      question: "Is there a minimum deposit amount?",
      answer:
        "Yes — each payment method has its own minimum. Please check the deposit form for details before submitting.",
    },
    {
      question: "How long does it take for a deposit to reflect?",
      answer:
        "Deposit processing times depend on the payment method and blockchain confirmations. Most deposits are processed within 10–30 minutes.",
    },
    {
      question: "How do I withdraw funds?",
      answer:
        "Go to the 'Withdraw' section, enter the amount, choose your withdrawal method and destination, then submit. Withdrawals are processed once approved.",
    },
    {
      question: "Is my money safe with you?",
      answer:
        "Yes. We implement standard security measures including secure user accounts, transaction logging, and admin oversight to protect your funds and data.",
    },
    {
      question: "Do you require identity verification?",
      answer:
        "We encourage users to upload valid ID (passport or national ID). Verified users may get faster withdrawals, higher limits, or other benefits.",
    },
    {
      question: "Are there fees for deposit or withdrawal?",
      answer:
        "A small processing or network fee may apply, depending on the payment method. Fees are clearly shown on the deposit/withdrawal form before confirmation.",
    },
    {
      question: "Do you guarantee profit or returns?",
      answer:
        "No — while we provide funding infrastructure, trading outcomes depend on market conditions and individual skill. Please trade responsibly.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-800 text-white p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-slate-300 text-center mb-10">
        Find answers to the most common questions about Apex Trades Funding.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="bg-slate-700 rounded-xl p-4 border border-slate-600 group"
          >
            <summary className="cursor-pointer list-none font-semibold text-white text-lg sm:text-xl flex justify-between items-center">
              {faq.question}
              <span className="ml-2 transform transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 text-center text-slate-400 text-sm">
        <p>
          Need more help? Contact our support team via the contact form or live
          chat.
        </p>
      </div>
    </div>
  );
}
