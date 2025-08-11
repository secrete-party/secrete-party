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
            "Your information has been ... protected ... encryption" -Denzaroo
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
                but Trash Chef proved that we have fun taking some time to schtick. Let's level up.
                <br/><br/>
                Also, we should have a gathering place where we can all hang out whenever we want!
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Donate!</h3>
              <p className="text-gray-300 leading-relaxed">
                We're told suites will probably cost a little over than $3,000 this year.
                
                If you are down to donate, put in your name and Venmo account, BC will  
                Venmo request your contribution (unless it's milk or placenta, which you can't venmo yet). 
                If there is enough interest in executing this plan (as demonstrated by donations), I'll try to book a
                suite for our team. If there is not enough money in the pot by the time of the second ticket sale, or if
                we are not able to book, a suite everyone's money will be returned. If we end up with more contributions
                than we need, BC will return any extra money on a pro-rated basis (don't worry I know math).
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Enjoy the Benefits!</h3>
              <p className="text-gray-300 leading-relaxed">
              
                We'll either just leave the doors unlocked or give the whole squad key cards so we can come and go as we please,
              and we can do a little or as much schtick hosting as we want.
              </p>
            </div>
          </div>
        </div>
      </section>


      
      <Footer />
    </main>
  )
}
