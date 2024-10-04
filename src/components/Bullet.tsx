import React from 'react';

const Bullet = ({ size = 16, color = "#ea6f54" }: { size?: number, color?: string }) => {
    return (
        <svg
            className='mr-2'
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill={color}
        >
            <circle cx="8" cy="8" r="4" />
        </svg>
    );
}

export default Bullet;
