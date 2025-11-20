import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl mb-10">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">Scoops & Smiles</h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl mx-auto">Playful, creamy, and downright delightful. Crafted daily, served happily.</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
    </section>
  );
}

export default Hero;