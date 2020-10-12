import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const ApprovalCard = () => {
    return (
        <div className="ui card">
            <div className="content">
                {/* Are you sure? */}
                <CommentDetail
                    author="Tenzin"
                    avatar={faker.image.avatar()}
                    date="Today at 6:00PM"
                    text="Nice Blog post!"
                />
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
};

export default ApprovalCard;