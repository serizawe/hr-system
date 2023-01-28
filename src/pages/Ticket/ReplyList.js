import React from 'react';

const ReplyList = ({ replies }) => {
  return (
    <div className="w-full bg-white rounded-lg p-4">
      {replies.map(reply => (
        <div key={reply._id} className="text-gray-700">
          <p className="text-lg">{reply.text}</p>
          <p className="text-sm text-gray-500">Replied by: {reply.userName} {reply.userSurname} on {reply.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ReplyList;
