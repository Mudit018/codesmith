import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className='flex max-w-6xl min-h-screen pt-[86px] mx-auto px-5 bg-gray-800 '>
          <div className='mx-auto w-full'>{children}</div>
        </div>
      </main>
    </>
  );
}
