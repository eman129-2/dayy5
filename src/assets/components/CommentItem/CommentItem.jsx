import './CommentItem.css';
import React, { useState } from 'react';
import useCommentStore from '../../../store/Counter';
import CommentList from '../CommentList/CommentList'

const CommentItem = ({ image, name, time, text }) => {
  const [reply, setReply] = useState('');
  const { incrementCount, decrementCount, deleteComment, addReply, comments } = useCommentStore();
  const comment = comments.find((comment) => comment.name === name);

  const handleReplyChange = (e) => setReply(e.target.value);

  const handleReplySubmit = () => {
    if (reply.trim() !== '') {
      addReply(name, reply);
      setReply('');
    }
  };

  const handleDelete = () => deleteComment(name);

  return (
    <div className="comment">
      <div className="comment-number">
        <button onClick={() => incrementCount(name)}>+</button>
        {comment.number}
        <button onClick={() => decrementCount(name)}>-</button>
      </div>
      <img src={image} alt={`${name}'s avatar`} className="comment-avatar" />
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-name">{name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="comment-text">{text}</div>
        <div className="comment-reply">
          <input
            type="text"
            value={reply}
            onChange={handleReplyChange}
            placeholder="Reply to this comment"
          />
          
          <button onClick={handleReplySubmit}>REPLY</button>
          <button onClick={handleDelete} className='delete'>DELETE</button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((replyText, index) => (
              <div key={index} className="reply-item">
                {replyText}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
