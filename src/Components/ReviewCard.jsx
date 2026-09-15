import { Star } from "lucide-react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt={customerName}
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-1">
                {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                    <Star key={i} size={18} fill="#D72B2B" color="#D72B2B" />
                ))}
                <span className="ml-1 text-base font-montserrat text-slate-gray">
                    ({rating})
                </span>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                {customerName}
            </h3>
        </div>
    );
};

export default ReviewCard;
