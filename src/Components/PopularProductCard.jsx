import { Star } from "lucide-react";

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full group">
            <div className="overflow-hidden rounded-2xl bg-gray-50">
                <img
                    src={imgURL}
                    alt={name}
                    className="w-[280px] h-[280px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="mt-4 flex justify-start gap-1.5 items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="#D72B2B" color="#D72B2B" />
                ))}
                <p className="font-montserrat text-sm leading-normal text-slate-gray ml-1">
                    (5.0)
                </p>
            </div>
            <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
                {name}
            </h3>
            <p className="mt-1 font-semibold font-montserrat text-coral-red text-xl leading-normal">
                {price}
            </p>
        </div>
    );
};

export default PopularProductCard;
