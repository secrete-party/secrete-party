import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <svg
              width="95.007mm"
              height="101.59mm"
              version="1.1"
              viewBox="0 0 95.007 101.59"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g transform="translate(.56255 -32.07)" strokeLinecap="round" strokeLinejoin="round">
                <path
                  transform="rotate(.65888 47.066 61.403)"
                  d="m47.892 111.63-44.739-74.626 86.997-1.432z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="8"
                />
                <path
                  d="m54.025 124.02a6.7579 7.062 0 0 1-6.7247 7.0619 6.7579 7.062 0 0 1-6.7908-6.9926 6.7579 7.062 0 0 1 6.658-7.1306 6.7579 7.062 0 0 1 6.8562 6.9225"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="5.1443"
                />
                <path
                  d="m37.24 95.996a19.299 19.059 0 0 1 19.288-0.03658l-9.6119 16.527z"
                  fill="#f48af2"
                  stroke="#f48af2"
                  strokeWidth="8"
                />
              </g>
            </svg>
          </div>
          <span className="text-xl font-bold">Secrete Party</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
            F.A.Q
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            Log In
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white px-6">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
