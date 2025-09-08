"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"; // Assuming you have an Accordion component
  
  export function Faq() {
    const faqs = [
      {
        question: "What is AI Insights?",
        answer: "AI Insights is a platform dedicated to providing high-quality articles, tutorials, and news about the field of Artificial Intelligence. Our goal is to make AI accessible and understandable for everyone.",
      },
      {
        question: "Who is the content for?",
        answer: "Our content is designed for a wide audience, from beginners who are just starting their AI journey to experts looking for deep dives into specific topics. We cover everything from basic concepts to advanced research.",
      },
      {
        question: "Is the content free?",
        answer: "Yes, all of our articles and tutorials are completely free to access. We believe in open and accessible education for all.",
      },
      {
        question: "How often is new content published?",
        answer: "We strive to publish new content regularly. Please check our blog section for the latest articles. You can also subscribe to our newsletter to get updates directly in your inbox.",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Have questions? We have answers. Here are some of the most common questions we get.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }





