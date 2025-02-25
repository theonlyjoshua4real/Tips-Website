import React from "react";
import {default as AccordionItem} from "./Accordion";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  const faqData = [
    {
      id: 1,
      header: "What is a betting tipster?",
      body: "A betting tipster is an expert who provides predictions and tips on the outcome of sports events. Tipsters analyze statistics, team form, player conditions, and other factors to give insights and recommendations that can help bettors make more informed decisions.",
    },
    {
      id: 2,
      header: "How do your tips work?",
      body: "Our tips are based on thorough research and analysis of various sports events. We consider factors like team form, player performance, historical data, and other relevant information to provide our predictions. Our goal is to help you make more informed betting decisions and increase your chances of winning.",
    },
    {
      id: 3,
      header: "How often are your tips updated?",
      body: "Our tips are updated daily to ensure you have the most up-to-date information. We cover a wide range of sports, including Basketball, American football, Baseball, and Soccer, and provide tips for upcoming matches and events.",
    },
    {
        id: 4,
        header: "Is there a fee to access your tips?",
        body: "We offer both free and premium tips. Our premium tips are available through a subscription service that provides exclusive insights, detailed analysis, and higher accuracy predictions. You can choose the subscription plan that best suits your needs.",
        },
    {
        id: 5,
        header: "Can I cancel my subscription?",
        body: "Yes, you can cancel your subscription at any time. If you wish to cancel, please visit your account settings on our website or contact our support team for assistance.",
        },
    {
        id: 6,
        header: "How do I contact customer support?",
        body: "If you have any questions or need assistance, you can contact our customer support team through our website's contact form or by emailing support@triumphbet.com. We are here to help you with any inquiries or issues you may have.",
        },
  ];

  return (
    <section className="padding-2">
        <h2 className="heading text-customYellow">FAQs</h2>
        {faqData.map((item)=>(
            <AccordionItem 
            key={item.id}
            id={item.id}
            open={open}
            handleOpen={handleOpen}
            header={item.header}
            body={item.body}
            />
        ))}
    </section>
  );
}