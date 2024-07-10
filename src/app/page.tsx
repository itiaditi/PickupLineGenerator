import React from 'react';

export default function Home() {
  return (
   
        <div 
          className="mainContainer" 
          style={{
            backgroundImage: `url('/main.png')`,
            minHeight: "100vh",
            width: "100%",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
            <div className='p-10'>
            <h1 className='text-white text-center'>Pickup line Generator</h1>
            </div>
        </div>
      
  );
}
