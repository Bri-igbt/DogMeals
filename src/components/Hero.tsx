import { assets } from '../utils'
import Feature from './Feature.jsx'



const Hero = () => {
    return (
        <section className="bg-white py-14 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-20">
                    What makes us different <br />
                    makes them stronger
                </h1>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    <div className="flex flex-col gap-16 w-80">
                        <Feature
                            bg="bg-green-100"
                            icon={assets.food001}
                            title="Real Food"
                            text="Wholesome recipes for dogs with real meat and veggies."
                        />

                        <Feature
                            bg="bg-yellow-100"
                            icon={assets.pet_bowl}
                            title="Premium Ingredient"
                            text="Elevating pet care with unmatched safety and quality."
                        />
                    </div>

                    <img
                        src={assets.frameImg}
                        alt='frame'
                        className='w-64 h-64'
                    />

                    <div className="flex flex-col gap-16 w-80 ">
                        <Feature
                            bg="bg-blue-100"
                            icon={assets.food002}
                            title="Made Fresh"
                            text="We prioritize maintaining the integrity of whole foods and nutrition."
                        />

                        <Feature
                            bg="bg-rose-100"
                            icon={assets.vet}
                            title="Vet Developed"
                            text="We raise the bar for dog nutrition, surpassing industry expectations."
                        />
                    </div>

                </div>

                <div className="mt-20">
                    <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold w-full sm:w-auto lg:w-[500px] px-6 sm:px-10 lg:px-12 py-4 rounded-lg shadow-md">
                        Get your dog's healthy meal today!
                    </button>

                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
                        <span>✔ 30-day money back guarantee</span>

                        <div className="flex gap-2 font-semibold text-gray-700">
                            <img src={assets.paypal} alt='paypal' className='w-14 h-8' />
                            <img src={assets.visa_logo} alt='visa' className='w-16 h-8'/>
                            <img src={assets.mastercard_logo} alt='mastercard' className='w-16 h-8'/>
                            <img src={assets.apple_pay} alt='apple' className='w-16 h-8' />
                            <img src={assets.google_pay} alt='google_play' className='w-16 h-8' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero