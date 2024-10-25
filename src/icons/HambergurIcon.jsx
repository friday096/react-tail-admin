import React from 'react';

const HamburgerIcon = ({ width = 24, height = 24 }) => {
    return (
        <svg 
            width={width} 
            height={height} 
            fill="none" 
            stroke="black" // Change stroke color to black
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
            />
        </svg>  
    );
};

export default HamburgerIcon;
