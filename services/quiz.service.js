import { axiosUtil } from "../utils/axios"

export const getQuiz = async (question) =>{
    const llamadaQuiz = {
        method: "GET",
        url: `https://opentdb.com/api.php?amount=10${question}`
    }
    return await axiosUtil(llamadaQuiz)
}