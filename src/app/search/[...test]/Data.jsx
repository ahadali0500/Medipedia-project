'use client'
import React, { useState } from 'react';

export default function Data(props) {
  const [selectedAnswers, setSelectedAnswers] = useState(props.data.map(() => null));
  const [disabledQuestions, setDisabledQuestions] = useState(props.data.map(() => false));

  const handleOptionClick = (questionIndex, option) => {
    // Prevent further actions if the question is already answered
    if (disabledQuestions[questionIndex]) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = option; // Update the selected answer for the question

    const newDisabledQuestions = [...disabledQuestions];
    newDisabledQuestions[questionIndex] = true; // Mark the question as answered to disable further selections

    setSelectedAnswers(newSelectedAnswers);
    setDisabledQuestions(newDisabledQuestions);
  };

  const getOptionClass = (questionIndex, option) => {
    const isCorrect = props.data[questionIndex].ans === option;
    const isSelected = selectedAnswers[questionIndex] === option;

    if (disabledQuestions[questionIndex]) {
      if (isCorrect) {
        return "mcq-opt correct"; // Highlight the correct answer in green
      } else if (isSelected && !isCorrect) {
        return "mcq-opt incorrect"; // Highlight the selected wrong answer in red
      }
    }
    return "mcq-opt"; // Default class for options not yet selected or when question is not answered
  };

  return (
    <div className="accordion" id="accordionExample">
      {props.data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {item.ques}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                {['A', 'B', 'C', 'D', 'E'].map((option, optIndex) => {
                  const optKey = `op${optIndex + 1}`;
                  return item[optKey] ? (
                    <div
                      key={optIndex}
                      className={`col-lg-6 col-md-12 ${getOptionClass(index, option)}`}
                      onClick={() => handleOptionClick(index, option)}
                      style={{ cursor: 'pointer', userSelect: 'none' }}
                    >
                      {option}: {item[optKey]}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
