import { useState } from "react";

    const Feedback = () => {
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)

    const  handleClick = (type) => {
        if(type === 'good'){
            setGood((prev) => prev+1)
        } else if(type === 'neutral'){
            setNeutral((prev) => prev+1)
        } else if(type === 'bad'){
            setBad((prev) => prev+1)
        }
     }

    const countTotalFeedback = () => {
        return good + neutral + bad;
     }

    const countPositiveFeedbackPercentage = () =>{
        const posFeedback = good / (countTotalFeedback() / 100);
        return Math.round(posFeedback)
     }
     
        return (
            <div>
                <h1>
                    Leave Your feedback
                </h1>

                <button onClick={() => handleClick('good')}>Good</button>
                <button onClick={() => handleClick('neutral')}>Neutral</button>
                <button onClick={() => handleClick('bad')}>Bad</button>

                <h2>Statistics</h2>
                {countTotalFeedback() > 0 ? (
                    <>
                    <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {countTotalFeedback()}</p>
                <p>Possitive feedback: {countPositiveFeedbackPercentage()}%</p>
                    </>
                ) : (
                    <p>There is no feedback!</p>
                )}
            </div>
        );
    }



// import { Component } from "react";

// class Feedback extends Component {
//     state = { 
//         good: 0,
//         neutral: 0,
//         bad: 0
//      } 
//      handleClick = (type) => {
//         this.setState((prevState) => ({[type]: prevState[type] +=1}))
//      }


//      countTotalFeedback = () => {
//         const sum = Object.values(this.state).reduce((sum, el) => sum+=el,0);
//         return sum;
//      }

//      countPositiveFeedbackPercentage = () =>{
//         const posFeedback = this.state.good / (this.countTotalFeedback() / 100);
//         return Math.round(posFeedback)
//      }
     
//     render() { 
//         return (
//             <div>
//                 <h1>
//                     Leave Your feedback
//                 </h1>

//                 <button onClick={() => this.handleClick('good')}>Good</button>
//                 <button onClick={() => this.handleClick('neutral')}>Neutral</button>
//                 <button onClick={() => this.handleClick('bad')}>Bad</button>

//                 <h2>Statistics</h2>
//                 {this.countTotalFeedback() > 0 ? (
//                     <>
//                     <p>Good: {this.state.good}</p>
//                 <p>Neutral: {this.state.neutral}</p>
//                 <p>Bad: {this.state.bad}</p>
//                 <p>Total: {this.countTotalFeedback()}</p>
//                 <p>Possitive feedback: {this.countPositiveFeedbackPercentage()}%</p>
//                     </>
//                 ) : (
//                     <p>There is no feedback!</p>
//                 )}
//             </div>
//         );
//     }
// }
 
 export default Feedback;