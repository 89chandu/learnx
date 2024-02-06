// src/components/Post.jsx
import React from 'react';

const Post = () => {
  return (
    <div className="container mx-auto mt-2"> {/* Adjusted margin-top here */}
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <img
          src="https://placekitten.com/50/50"
          alt="Author"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-sm text-gray-500">Posted by</p>
          <p className="font-bold">Author Name</p>
        </div>
        <div className="ml-auto flex items-center">
          <span className="text-gray-500 mr-2">Posted at</span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 4"></path>
            </svg>
            <span className="text-gray-500">2 hours ago</span>
          </span>
        </div>
      </div>

      {/* Blog Paragraph */}
      <div className="mb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula quam vel
          tellus interdum, non tincidunt arcu gravida. Proin id fringilla urna. Nulla facilisi.
          Integer ac massa non ex blandit suscipit non eu odio. Nullam aliquet auctor enim id
          consectetur. Curabitur congue hendrerit justo, ac ullamcorper turpis imperdiet nec.
        </p>
      </div>

      {/* Blog Image */}
      <img
        src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
        alt="Blog Post"
        className="w-full mb-4"
      />

      {/* Comment and Share Icons */}
      <div className="flex items-center text-gray-500">
        <div className="flex items-center mr-4">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 6.75a8.71 8.71 0 0 0-2.32-4.7"></path>
            <path d="M20 11a10.52 10.52 0 0 1-3 .44 10.47 10.47 0 0 1-5.1-1.3"></path>
            <path d="M4 4v16h7"></path>
          </svg>
          <span>12</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 6.75a8.71 8.71 0 0 0-2.32-4.7"></path>
            <path d="M20 11a10.52 10.52 0 0 1-3 .44 10.47 10.47 0 0 1-5.1-1.3"></path>
            <path d="M4 4v16h7"></path>
          </svg>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
