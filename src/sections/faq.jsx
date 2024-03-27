import SectionHeader from 'components/section-header';
import React, { useState } from 'react';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default function FAQS() {
  const [faqs, setFaqs] = useState([
    {
      question: 'Why would I do this (as a project owner)?',
      answer: (
        <>
          <ul>
            <li>
              {' '}
              KYC (Know Your Customer) verification adds credibility and trust
              to your project within the Solana community.
            </li>
            <li>
              Investors are more likely to participate in projects with verified
              identities, reducing the risk of scams and fraudulent activities.
            </li>
            <li>It demonstrates your commitment to the project.</li>
          </ul>
        </>
      ),
      open: false,
    },
    {
      question: "I don't want to doxx myself",
      answer: (
        <>
          <ul>
            <li>
              We understand your concerns about privacy. Rest assured that
              SolanaKYC takes data protection seriously.
            </li>
            <li>
              Your personal information is encrypted and securely stored,
              adhering to industry-leading privacy standards.
            </li>
            <li>
              SolanaKYC only verifies the identities of project owners, not
              individual participants. Your personal information is kept
              confidential.
            </li>
          </ul>
        </>
      ),
      open: false,
    },
    {
      question: 'I got offered a discount via Telegram... legit?',
      answer: (
        <>
          <ul>
            <li>
              Be cautious of offers received via Telegram or other messaging
              platforms.
            </li>
            <li>
              SolanaKYC only accepts payments directly through our own official
              Telegram and does not offer discounts via third-party channels.
            </li>
            <li>
              To ensure legitimacy, always verify information and payments
              directly through the official SolanaKYC channel.
            </li>
          </ul>
        </>
      ),
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div>
      <SectionHeader
        slogan="Frequently asked questions and their answer"
        title="FAQ"
      />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
