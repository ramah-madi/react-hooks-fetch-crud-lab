import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestions, onUpdateAnswer }) {
  
  const questionItem = questions.map((question) => {
       return <QuestionItem key={question.id} question={question} onDeleteQuestions={onDeleteQuestions} onUpdateAnswer={onUpdateAnswer}/>
  })

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
