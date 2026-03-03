import { assets } from '../utils'

const Feeds = () => {
    return (
        <section className="bg-white px-4 sm:px-6 sm:py-20 mb-20">
            <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1 min-w-0 text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
                            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
                        </h2>

                        <p className='text-sm font-light py-3'>
                            Our dog food formula contains carefully selected prebiotics that work in harmony with
                            the gut microbiota, providing the necessary nutrients for the growth and maintenance of
                            beneficial bacteria, ultimately supporting digestive health.
                        </p>
                    </div>

                    <div className="flex-1 min-w-0 order-1 lg:order-2">
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img
                                src={assets.square_chips}
                                alt="Dog food"
                                className="w-full max-w-full h-64 sm:h-full lg:h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feeds