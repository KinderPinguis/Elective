import React from "react";
import './Rating.css';

interface RatingProps {
    className?: string;
    count: number;
    color?: string;
    value: number;
    size?: number;
}
interface FullStarProps {
    size?: number;
    color?: string;
}

const FullStar: React.FC<FullStarProps> = ({
                                               size = 20,
                                               color = "#ffd700",
                                           }) => {
    return (
        <div style={{ color: color }}>
            <svg height={size} viewBox="0 0 24 24">
                <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    fill={color}
                />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        </div>
    );
};
const Rating: React.FC<RatingProps> = ({
                                           className,
                                           count,
                                           value,
                                           color = "#ffd700",
                                           size = 20,
                                       }) => {
    return (
        <div className={`rating ${className}`}>
            {[...Array(count)].map((_, index) => (
                <FullStar key={index} size={size} color={color} />
            ))}
        </div>
    );
};

export default Rating;
