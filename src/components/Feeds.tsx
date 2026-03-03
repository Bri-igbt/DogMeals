import { assets } from '../utils'

const Feeds = () => {
    return (
        <section className="bg-white px-4 sm:px-6 py-12 sm:py-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1 min-w-0 text-left order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6 tracking-tight">
                            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
                        </h2>

                        <p className="text-[#6B7280] text-sm sm:text-[14.5px] font-light text-justify leading-relaxed">
                            Our dog food formula contains carefully selected prebiotics that work in harmony with
                            the gut microbiota, providing the necessary nutrients for the growth and maintenance of
                            beneficial bacteria, ultimately supporting digestive health.
                        </p>
                    </div>

                    <div className="flex-1 min-w-0 w-full order-1 lg:order-2">
                        <div className="rounded-xl overflow-hidden shadow-md w-full h-64 sm:h-80 md:h-96">
                            <img
                                src={assets.square_chips}
                                alt="Dog food"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feeds