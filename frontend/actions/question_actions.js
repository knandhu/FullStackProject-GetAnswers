import * as QuestionAPIUtil from './../util/question_api_util';
import QuestionsIndex from '../components/questions/questions_index';
import QuestionDetailForm from '../components/questions/question_detail_form';
// import { receiveErrors } from './session_actions';
import { createHistory } from 'history';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_QUESTION_ERRORS = 'CLEAR_QUESTION_ERRORS';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const fetchAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions,
});

const receiveQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question,
});

const removeQuestion = (question) => ({
    type: REMOVE_QUESTION,
    question,
});


const receiveQErrors = err => ({
    type: RECEIVE_QUESTION_ERRORS,
    err,
});

const clearErrors = () => ({
    type: CLEAR_QUESTION_ERRORS,
})

export const fetchQuestions = () => dispatch => {  
    return(
        QuestionAPIUtil.fetchQuestions().then((questions) =>dispatch(fetchAllQuestions(questions))
    ))

};
  

export const fetchQuestion = (questionId) => dispatch => {

    QuestionAPIUtil.fetchQuestion(questionId).then(question =>
        dispatch(receiveQuestion(question))
    )

};
export const createQuestion = (question) => dispatch => {
    return (
        QuestionAPIUtil.createQuestion(question).then((question) => dispatch(fetchQuestion(question)),
        (err)=>dispatch(receiveQErrors(err.responseJSON))));
};

export const updateQuestion = (question) => dispatch => {
    return (QuestionAPIUtil.updateQuestion(question).then((question) => dispatch(receiveQuestion(question)),
        (err) => dispatch(receiveQErrors(err.responseJSON))));
};


export const deleteQuestion = (question) => (dispatch) => {
    // console.log(QuestionAPIUtil.deleteQuestion(question));
  
    return(
        QuestionAPIUtil.deleteQuestion(question)
            .then(() => dispatch(removeQuestion(question)))
            // .then((questions) => dispatch(fetchQuestions(questions)))
                // dispatch(removeQuestion(question)))
    )};
