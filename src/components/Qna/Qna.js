import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div className='qna'>
            <div className="qnaContainer">
                <div className="question">
                    <h2>0.1 How React Work ?</h2>
                    <div className="answer">
                        <p>Answer : Basically react create a virtual dom as like as real dom. When change any thing in virtual dom, then react change the real dom using a efficient algorithm. Basically react application is the set of components. Here use more components. Components means part of the body. A navbar is a component of a website. React component return JSX , which mean Javascript Object Notation. You can write here HTML code, but not exact HTML code. It's give you just syntactical sugar.</p>
                    </div>
                </div>
            </div>
            <div className="qnaContainer">
                <div className="question">
                    <h2>0.2 Difference Between Props and State</h2>
                    <div className="answer">
                        <p>Answer <br />Props: Basically props work for data passing from parent to child component. It's immutable, can't be modified. Props are read only. <br />State: Here data pass only in the own component. It can be modified. In this case read and write both can do. </p>
                    </div>
                </div>
            </div>
            <div className="qnaContainer">
                <div className="question">
                    <h2>0.3 How useState Work?</h2>
                    <div className="answer">
                        <p>
                            Answer : useState is a react hook, where has a variable and setter function, If we can change the varible value, then we need to change it using setter function. <br />
                            For Example : const [state, setState] = useState(initialstate). Here state is the variable or a state and setState is the setter function , it change the state value.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qna;