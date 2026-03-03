import {assets} from "../utils";

const Card = () => {
    return (
        <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1 min-w-0">
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img
                                src={assets.two_dogs}
                                alt="Dogs eating"
                                className="w-full max-w-full h-64 sm:h-80 lg:h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
                            Improve overall gastrointestinal health for better nutrient absorption
                        </h2>
                        <p className="text-sm font-light">
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

export default Card
