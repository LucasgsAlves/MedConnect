import React from "react";

function Card({ title, description, image, children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 w-80 h-96 ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-full">
        {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
        {description && (
          <p className="text-gray-600 mt-2 flex-grow">{description}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}

export default Card;