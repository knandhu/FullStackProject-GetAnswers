import React from 'react';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';
import Footer from './../home/footer';
import LeftNavigationBar from '../navbar/left_navigation_form';

class QuestionsIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchQuestions();
    }
    render() {
      return (
        <div id='qindex-main'>
          <div id='main'>

            <div id='left-nav'>
              <LeftNavigationBar />
            </div>
            
            <div id="q-index">
              <div id='main-bar'>
              <div id='askq'>
              <p>Top Questions</p>
                <nav> 
                <Link to="/questions/ask">
                  <button id="button" type="button">
                    Ask a Question
                  </button>
                </Link>
                </nav>
              </div>

              {this.props.question.map((question, idx) => (
                <ul id='qidxitem' key={idx}>
                  <QuestionIndexItem key={idx} question={question} />
                </ul>
              ))}
              <h2>Looking for more? Browse the complete list of questions, or popular tags.
                Help us answer unanswered questions.</h2>
              </div>
              <div id='side-bar'>
                <h3>Blog</h3>
                <h3>Hot Network Questions</h3>
              </div>
            </div>
            
          </div>
                
            <footer>
              <Footer />
            </footer>
          </div>
        );
    }
};

export default QuestionsIndex;