// Card.tsx

import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md mb-4 transition duration-300 ease-in-out transform hover:scale-110">
      <h2 className="text-3xl text-black font-bold mb-4 text-center cursor-pointer">
        <Link href={link}>{title}</Link>
      </h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
