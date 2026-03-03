import {assets} from "../utils";

const Card = () => {
    return (
        <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1 min-w-0 w-full">
                        <div className="rounded-xl overflow-hidden shadow-md w-full h-64 sm:h-80 md:h-96">
                            <img
                                src={assets.two_dogs}
                                alt="Dogs eating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6 tracking-tight">
                            Improve overall gastrointestinal health for better nutrient absorption
                        </h2>
                        <p className="text-[#6B7280] text-sm sm:text-[14.5px] font-light text-justify leading-relaxed">
                            Through rigorous scientific studies and consultations with veterinarians,
                            we have created a breakthrough formula exclusively tailored to combat the
                            health challenges prevalent in dogs. A staggering 91% of our customers have
                            reported significant improvements in their dogs' health after incorporating
                            our product into their diet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;
