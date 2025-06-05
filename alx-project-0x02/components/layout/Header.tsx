import Link from "next/link";
import React from "react";

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/home">Home</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 shadow-md p-4 text-white">
      <nav className="flex justify-between items-center mx-auto container">
        <div className="font-bold text-xl">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
