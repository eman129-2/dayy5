import './CommentList.css';
import CommentItem from '../CommentItem/CommentItem';
import useCommentStore from '../../../store/Counter';
import React, { useEffect } from 'react';
import commentsData from '../commentsData/commentsData';

const CommentList = () => {
  const { comments, initializeComments } = useCommentStore();

  useEffect(() => {
    initializeComments(commentsData); 
  }, [initializeComments]);

  return (
    <div className="comment-list">
      {comments.map((comment, id) => (
        <CommentItem
          key={id}
          number={comment.number}
          image={comment.image}
          name={comment.name}
          time={comment.time}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default CommentList;
