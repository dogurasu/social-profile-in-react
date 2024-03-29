import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const App = () => {
    // naive approach
    return (
        <div className="ui container comments" style={{marginTop: "2rem"}}>
            <ApprovalCard>
                <div>
                    <h4 style={{margin: ".75rem 0"}}>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Tenzin"
                    avatar={faker.image.avatar()}
                    date="Today at 6:00PM"
                    text="Nice Blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Korra"
                    avatar={faker.image.avatar()}
                    date="10/13/2019"
                    text="I understand Kuvira"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Aang"
                    avatar={faker.image.avatar()}
                    date="12/25/2008"
                    text="Can we go penguin sledding?"
                />
            </ApprovalCard>
        </div>
    );
};

        {/* // copy and paste x3 */}
        {/* <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Tenzin
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice Blog post!</div>
            </div>
        </div> */}

ReactDOM.render(<App />, document.querySelector('#root'));