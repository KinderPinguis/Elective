/*import Rating from './Rating';

const Reviewpage = () => {

    const { reviewIndex, setReviewIndex } = useSate(0)

    const reviewsData = [{ name: "JOHN SMITH", image: "/images/eeedd.jpg", description:"Food Enthousiast", rating:4}, { name: "ANNE-MARIE", image: "/images/eeedd.jpg", description:"Vegan", rating: 3}, {name: "BRYAN FREYER", image: "/images/eeedd.jpg", description:"Burger Lover", rating:5}]


    const moveToBack = () => {
        if (reviewIndex > 0) {
            setReviewIndex(reviewIndex - 1)
        }
    }

    const moveToNext = () => {
        if (reviewIndex <= 0 && reviewIndex < reviewsData.length) {
            setReviewIndex(reviewIndex + 1)
        }
    }

    return (
        <div>
            <Review
                name={reviewsData[reviewIndex].name}
                image={reviewsData[reviewIndex].image}
                reviewsData[reviewIndex].description
            />
            <Rating count={5} value={reviewsData[reviewIndex].rating} />
            <Button buttonImage={FaAngleLeft} onClick={moveToBack}/>
            <Button buttonImage={FaAngleRight} onClick={moveToNext}/>
        </div>
    );
};

export default ReviewPage;  */

export {}