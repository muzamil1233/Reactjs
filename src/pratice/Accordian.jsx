import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'; // Optional, for custom styling

function AccordionItem({ title, content, isOpen, onClick }) {
    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={onClick}>
                <span>{title}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isOpen && (
                <div className="accordion-content">
                    {content}
                </div>
            )}
        </div>
    );
}

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const accordionData = [
        {
            title: "What is React?",
            content: "React is a JavaScript library for building user interfaces.",
        },
        {
            title: "What is a component?",
            content: "A component is a reusable piece of the UI.",
        },
        {
            title: "What is state in React?",
            content: "State is a built-in object to store property values that belong to a component.",
        },
    ];

    const toggleIndex = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleIndex(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;


