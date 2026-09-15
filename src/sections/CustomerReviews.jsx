import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                Lo Que Dicen Nuestros{" "}
                <span className="text-coral-red"> Clientes</span>
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                La satisfacción de quienes confían en Good Style es nuestra
                mayor motivación. Lee sus experiencias reales con nuestra
                colección.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
