export default function Hero() {
  return (
    <div>
      <div className="bg-hero-bg bg-center bg-cover h-screen text-white">
        <div className="font-alegreya bg-overlay h-screen pl-24 flex flex-col justify-center">
          <h1 className="text-8xl w-2/3 tracking-[.10em] mb-4">
            Discover Hand-Crafted Excellence
          </h1>
            <a href="/products" className="w-80">
              <button className="border-[3px] border-white w-80 h-20 text-3xl tracking-[.10em] pl-1 btn-style700">
                Shop Now
              </button>
            </a>
        </div>
      </div>
    </div>
  )
}
