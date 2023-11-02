import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
     fetch("http://localhost:4000/questions")
     .then((resp) => resp.json())
     .then((data) => setQuestions(data))
  }, [])
  console.log(questions)
  function handleAddQuestions(newQuestion){
          setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion) {
     const deleteQuestion = questions.filter((question) => question.id !== deletedQuestion.id) 
          setQuestions(deleteQuestion)
  }

  function handleUpdateAnswer(updateAnswer) {
     const updatedAnswer = questions.map((question) => {
          if(question.id === updateAnswer.id) {
             return updateAnswer
          }
          else {
            return question
          }
     })

     setQuestions(updatedAnswer)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestions={handleAddQuestions}/> : <QuestionList questions={questions} onDeleteQuestions={handleDeleteQuestion} onUpdateAnswer={handleUpdateAnswer}/>}
    </main>
  );
}

export default App;
