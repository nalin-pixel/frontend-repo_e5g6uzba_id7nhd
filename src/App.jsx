import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FlavorGrid from './components/FlavorGrid'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Hero />
        <section id="flavors" className="mt-8">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Today’s Flavors</h2>
              <p className="text-white/70">Small-batch, made fresh daily</p>
            </div>
            <div className="hidden md:block text-white/60 text-sm">Tap a card to learn more</div>
          </div>
          <FlavorGrid />
        </section>

        <section id="about" className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
            <h3 className="text-white text-xl font-semibold mb-2">About Us</h3>
            We churn joy into every scoop using seasonal ingredients and sustainable dairy. Try our vegan coconut base too!
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
            <h3 className="text-white text-xl font-semibold mb-2">Hours & Location</h3>
            123 Sweet Street, Dessert City
            <br />Mon–Sun: 11am – 10pm
          </div>
        </section>
      </main>
      <footer className="mt-12 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Scoops — All rights reserved.
      </footer>
    </div>
  )
}

export default App