import React, { useState } from 'react';

const Discussion = ({ articleId, handleComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim()) {
      handleComment(articleId, comment);
      setComment('');
    }
  };

  return (
    <div className="discussion-container">
      <h3>Join the Discussion</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your thoughts..."
      ></textarea>
      <button onClick={handleSubmit}>Post Comment</button>
    </div>
  );
};

export default Discussion;
