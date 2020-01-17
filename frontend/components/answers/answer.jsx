import React from 'react';
import ReactQuill from "react-quill";

class Answer extends React.Component{
  constructor(props) {
    super(props);  
    this.state = {
      answer: this.props.answer
    }
    this.props.allUsers();
  }


  componentDidMount() {
    // if (this.props.answer.id) {
    this.props.fetchAns(this.props.questionId, this.props.answer.id)
      .then(() => this.setState({
        answer: this.props.answer
      }));
}  

  render() {
 
  
    // if (this.props.answer.owner) {
    //   console.log('owner', this.props.answer.owner)
    // }
    return (
      <div>
        {/* {props.answer.response} */}
        <ReactQuill
          value={this.props.answer.response}
          modules={{
            toolbar: false
          }}
          readOnly={true}
          
        // contenteditable:
        />
        {this.props.owner ? <div id ='owner'>Posted By: {this.props.owner.username}</div> : null}
      </div>
    );
  }
}

export default Answer;