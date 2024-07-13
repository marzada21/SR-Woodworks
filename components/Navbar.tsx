export default function Navbar() {
  return (
    <nav className="absolute flex justify-between m-10 w-[95vw] border-2">
        <a href="/" className="font-alegreya text-4xl tracking-[.10em]">Snake River Woodworks</a>
        <div className="flex items-center">
            <div className="px-6 flex flex-col">
                <span className="leading-none font-langar text-[18px]">01</span>
                <span className="hover-underline-animation text-[22px] font-alegreya">
                    <a href="/products">Products</a>
                </span>
            </div>
            <div className="px-6 flex flex-col ">
                <span className="leading-none font-langar text-[18px]">02</span>
                <span className="hover-underline-animation text-[22px] font-alegreya">
                    <a href="/custom">Custom</a>
                </span>
            </div>
            <div className="px-6 flex flex-col">
                <span className="leading-none font-langar text-[18px]">03</span>
                <span className="hover-underline-animation text-[22px] font-alegreya">
                    <a href="/products">Care / Maintenance</a>
                </span>
            </div>
            <div className="px-6 flex flex-col">
                <span className="leading-none font-langar text-[18px]">04</span>
                <span className="hover-underline-animation text-[22px] font-alegreya">
                    <a href="/products">About</a>
                </span>
            </div>

            <a href="/cart" className="pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[2.25em] h-[2.25em]">
                    <path
                        d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                    />
                </svg>
            </a>
        </div>
    </nav>
  )
}