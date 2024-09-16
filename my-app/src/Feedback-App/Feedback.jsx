import { Component } from "react";

class Feedback extends Component {
    state = { 
        good: 0,
        neutral: 0,
        bad: 0
     } 
     handleClick = (type) => {
        this.setState((prevState) => ({[type]: prevState[type] +=1}))
     }


     countTotalFeedback = () => {
        const sum = Object.values(this.state).reduce((sum, el) => sum+=el,0);
        return sum;
     }

     countPositiveFeedbackPercentage = () =>{
        const posFeedback = this.state.good / (this.countTotalFeedback() / 100);
        return Math.round(posFeedback)
     }
     
    render() { 
        return (
            <div>
                <h1>
                    Leave Your feedback
                </h1>

                <button onClick={() => this.handleClick('good')}>Good</button>
                <button onClick={() => this.handleClick('neutral')}>Neutral</button>
                <button onClick={() => this.handleClick('bad')}>Bad</button>

                <h2>Statistics</h2>
                {this.countTotalFeedback() > 0 ? (
                    <>
                    <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Possitive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                    </>
                ) : (
                    <p>There is no feedback!</p>
                )}
            </div>
        );
    }
}
 
export default Feedback;