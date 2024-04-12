import {Col} from "antd";
import Rating from "./Rating";
import React from "react";

type ReviewProps={name: string, image: string, description:string, rating:number}
const Review : React.FC<ReviewProps>=({ name, image,description,rating}) => {
    return(
        <div>
        <Col className={"review-container"}>
            <img src={image} alt= "ManAvatarReview" style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
            <p className={"text-right"} style={{color:"#df7b07"}}>
                {name}<span style={{display: "flex", fontWeight:"normal"}}>{description}</span>
            </p>
        </Col>
        <Col>
            <Rating count={rating} size={20}/>
        </Col>
        </div>
    );
};
 export default Review;