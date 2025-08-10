export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-4 border-t border-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
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

        <p className="text-gray-400 mb-6">Creating unforgettable experiences together</p>

        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Secrete Party. All rights reserved.</p>
      </div>
    </footer>
  )
}
