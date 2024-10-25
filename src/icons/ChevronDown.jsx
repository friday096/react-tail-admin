// ChevronDown.js
import React from 'react';

const ChevronDown = ({ width = 24, height = 24, className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill='none'
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${className}`}
            width={width}
            height={height}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default ChevronDown;
