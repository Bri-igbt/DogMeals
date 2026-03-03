import { assets } from "../utils";

const Foundation = () => {
    return (
        <section className="py-10 px-3">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch gap-10">
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                Nutrition is the foundation for longer, healthier lives in dogs.
                            </h2>

                            <p className="text-gray-600 text-sm leading-relaxed text-balance py-4">
                                Invest in your dog's future with our scientifically formulated superfood-powered supplements.
                                Give them the nutrition they deserve and watch them thrive with vitality,
                                energy, and the joy of a longer, healthier life.
                            </p>

                            <div>
                                <h4 className="font-semibold text-gray-800 pb-2">Key Points:</h4>

                                <div className="flex text-center items-center gap-6 border-b border-gray-300 pb-2">
                                    <span className="text-orange-500 font-bold text-2xl">97%</span>
                                    <p className="text-gray-600 text-left ">
                                        Dogs choose our dog food over leading brands because of its
                                        real functional ingredients and delicious flavor.
                                    </p>
                                </div>

                                <div className="flex gap-6 text-center items-center border-b border-gray-300 pb-2">
                                    <span className="text-orange-500 font-bold text-2xl">84%</span>
                                    <p className="text-gray-600 text-left pt-2">
                                        Our dog food provides superior nutrition and a patented probiotic
                                        for optimal nutrient absorption.
                                    </p>
                                </div>

                                <div className="flex gap-6  text-center items-center">
                                    <span className="text-orange-500 font-bold text-2xl">92%</span>
                                    <p className="text-gray-600  text-left pt-2">
                                        Our dog food's high protein and fat digestibility contribute
                                        to ideal stool quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="bg-orange-500 hover:bg-orange-600 transition text-sm sm:text-base text-white font-semibold w-full sm:w-fit px-8 py-4 rounded-lg shadow-md">
                                Give your furry friend the gift of wholesome nutrition
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 flex">
                        <div className="w-full rounded-2xl border-4 border-blue-500 overflow-hidden">
                            <img
                                src={assets.happy_dog_bites}
                                alt="Happy Dog"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Foundation;