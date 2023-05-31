import {getQuiz} from "../services/quiz.service"

export const dataQuiz = async () =>{
    console.log(dataQuiz)
    const data = []
    for (i = 0; i < 10; i++){
        data.push(await getQuiz(i))
    }
    return quizMap(data)
}

const quizMap = (data) =>{

    const filterQuiz = data.forEach((results) =>({
        question: results.question,
        correct: results.correct_answer,
        incorrect: results.incorrect_answers,
    }))

    const answers = answersQuiz(filterQuiz)
    return {
        answers: answers,
        dataQuiz: filterQuiz,
    }
}
