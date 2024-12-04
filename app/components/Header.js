import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <h2>Header</h2>
        <nav>
          <Link href='./about'>about</Link>
        </nav>
    </div>
  );
};

export default Header;
