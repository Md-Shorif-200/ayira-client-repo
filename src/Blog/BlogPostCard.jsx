import React from 'react';
// Import icons from react-icons
import { FaTag, FaUserAlt, FaComment } from 'react-icons/fa';

// This component receives a single 'post' object as a prop
const BlogPostCard = ({ post }) => {
  return (
    
 <div className="relative w-full  shadow-lg group">
  {/* Background Image */}
  {/* <img
    src={post.image}
    alt={post.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  /> */}


  <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 px-3 py-1 text-center ">
    <span className="text-base font-bold">{post.date.day}</span>
    <span className="block text-xs uppercase tracking-wider">{post.date.month}</span>
  </div>

  {/* Text Overlay without absolute */}
  <div className="px-6 pt-20 pb-6 bg-gradient-to-t from-black/80 to-transparent text-white mt-auto">
    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
    <p className="text-sm text-gray-200 mb-4">{post.summary}</p>

    {/* Meta Info: Category, Author, Comments */}
    <div className="flex items-center text-xs space-x-4 text-white">
      <div className="flex text-base items-center space-x-1">
        <FaTag />
        <span>{post.category}</span>
      </div>
      <div className="flex text-base items-center space-x-1">
        <FaUserAlt />
        <span>{post.author}</span>
      </div>
      <div className="flex text-base items-center space-x-1">
        <FaComment />
        <span>{post.comments}</span>
      </div>
    </div>
  </div>
</div>

  );
};

export default BlogPostCard;