import ContributionForm from "@/components/contribution-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CircularGraphic from "@/components/circular-graphic"
import CyclingSlogans from "@/components/cycling-slogans"

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Womb Service Experience</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Help make this celebration unforgettable. Enter your contribution details below,
              <br />
              and we'll follow up via Venmo to complete the process.
            </p>

            <CyclingSlogans />
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
            Your information has been 265 bit encryption
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
              <h3 className="text-xl font-bold mb-4">Let's Level Up</h3>
              <p className="text-gray-300 leading-relaxed">
                It's time that our crew got a suite. We don't need to commit to doing art the whole time,
                but our Trash Chef reality show proved that it's worth setting aside some time to schtick.
                <br/>
                <br/>
                And, when we're not schticking, wouldn't it be nice to have a dedicated gathering place where we can hang out,
                stash stuff, take snack breaks, etc. anytime we want?
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Donate</h3>
              <p className="text-gray-300 leading-relaxed">
                Put in your info and we'll 
                Venmo request your contribution (unless it's milk or placenta). 
                If we have enough money for a suite in time for either ticket sale, we'll try to book one.
                If there is not enough interest or if
                they are all booked up, everyone's money will be returned.
                If we get more contributions
                than we need, we will return anything extra in proportion to the amount donated.
                <br/>
                <br/>
                Please let us know if you would want to stay in a bedroom attached to the suite
                and you'd be willing to chip in more (the regular price of a king/queen room at Bally's) to do so .
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Enjoy the Benefits</h3>
              <p className="text-gray-300 leading-relaxed">
                We can do as little or as much schtick hosting as we want, and 
                we'll either just leave the doors unlocked or give the whole squad keys so we can come and go as we please.
            
              </p>
            </div>
          </div>
        </div>
      </section>


      
      <Footer />
    </main>
  )
}
