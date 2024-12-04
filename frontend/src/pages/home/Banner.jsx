import BannerImage from "../../assets/banner.png"


const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
            <div className="md:w-1/2 w-full flex items-center md:justify-end">
                <img src={BannerImage} alt="banner" />
            </div>


            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-2xl font-medium mb-7">
                    New Releases This Week
                </h1>

                <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci minima unde saepe vel, veniam, amet commodi possimus, ullam atque quaerat ea quo quis molestiae. Recusandae odio illum et quisquam ex magnam minima explicabo voluptatibus, perspiciatis sapiente quidem molestiae doloribus nesciunt possimus necessitatibus eum eos cumque magni! Ipsa quam iste rem?
                </p>

                <button className="px-6 py-2 rounded bg-slate-700 hover:bg-slate-900 duration-200 text-white font-medium">
                    Subscribe
                </button>
            </div>



        </div>
    )
}

export default Banner