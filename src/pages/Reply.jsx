// ReplyPage.js
import React, { useState,useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function ReplyPage() {
  const [reply, setReply] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [replies, setReplies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setSelectedQuery(location.state.query);
    }
  }, [location]);

  useEffect(() => {
    const storedReplies = JSON.parse(localStorage.getItem('replies')) || [];
    setReplies(storedReplies);
  }, []);

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleSendReply = async () => {
    try {
      const newReply = {
        queryId: selectedQuery._id,
        reply: reply,
      };
      const updatedReplies = [...replies, newReply];
      localStorage.setItem('replies', JSON.stringify(updatedReplies));
      setReplies(updatedReplies);
      navigate('/viewalluser');
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  const handleDeleteReply = (reply) => {
    try {
      const updatedReplies = replies.filter((r) => r.queryId !== reply.queryId || r.reply !== reply.reply);
      localStorage.setItem('replies', JSON.stringify(updatedReplies));
      setReplies(updatedReplies);
    } catch (error) {
      console.error('Error deleting reply:', error);
    }
  };

  return (
    <div>
      <center>
        <h1> SEND REPLY </h1>
      </center>
      {selectedQuery && (
        <div>
          <h2>{selectedQuery.uname}</h2>
          <p> User_ID: {selectedQuery.userid}</p>
          <p> User Query {selectedQuery.qdetails}</p>
          <textarea
            value={reply}
            onChange={handleReplyChange}
            placeholder="Enter your reply here..."
            rows={5}
            cols={50}
          />
          <button onClick={handleSendReply}>Send Reply</button>
          {replies
            .filter((reply) => reply.queryId === selectedQuery._id)
            .map((reply, index) => (
              <div key={index}>
                <p>Reply {index + 1}: {reply.reply}</p>
                <button onClick={() => handleDeleteReply(reply)}>Delete Reply</button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ReplyPage;