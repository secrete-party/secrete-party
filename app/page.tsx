import ContributionForm from "@/components/contribution-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CircularGraphic from "@/components/circular-graphic"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">
            Your
            <br />
            <span className="text-white">Secrete Contribution</span>
          </h1>

          <div className="mb-20">
            <CircularGraphic />
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Experience</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Help make this celebration unforgettable. Enter your contribution details below,
              <br />
              and we'll follow up via Venmo to complete the process.
            </p>
          </div>

          <ContributionForm />

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            Your information is secure and will only be used for this contribution process.
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Submit Details</h3>
              <p className="text-gray-300 leading-relaxed">
                Enter your name and contribution amount using the form above.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Get Contacted</h3>
              <p className="text-gray-300 leading-relaxed">
                We'll reach out via Venmo to complete the contribution process.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Join the Fun</h3>
              <p className="text-gray-300 leading-relaxed">
                Your contribution helps create an unforgettable experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
