import React from "react";
import './Rating.css';

enum starColor{
    full="#ffd700",
    half="#a3a3a3",
}
interface RatingProps {
    className?: string;
    count: number;
    color?: starColor;
    size?: number;
}
interface FullStarProps {
    size?: number;
    color?: starColor;
}

const FullStar: React.FC<FullStarProps> = ({
                                               size = 20,
                                               color = starColor.full,
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
                                           size = 20,
                                       }) => {
    return (
        <div className={`rating ${className}`}>
            {[...Array(5)].map((_, index) => {
                if(index < count){
                    return <FullStar key={index} size={size}/>
                }
                return <FullStar key={index} size={size} color={starColor.half}/>
            })}
        </div>
    );
};

export default Rating;
