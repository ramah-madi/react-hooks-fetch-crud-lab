import React from "react";

function QuestionItem({ question, onDeleteQuestions, onUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;
 
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
     
  ));

  function handleDeleteClick() {
      fetch(`http://localhost:4000/questions/${id}`, {
        method: "DELETE"
      })
      .then((resp) => resp.json())
      .then(() => onDeleteQuestions(question))
  }

  function handleUpdateOptions(event) {
    const index = parseInt(event.target.value, 10)

    fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "correctIndex": {index}
        })
    })
    .then((resp) => resp.json())
    .then((updateAnswer) => onUpdateAnswer(updateAnswer))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateOptions}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
