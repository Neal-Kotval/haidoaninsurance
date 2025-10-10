export default function ENHero() {
  return (
    <main className="relative bg-[var(--background)] py-20 px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[var(--primary)] leading-tight">
          Protect Your Future with Confidence
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[var(--foreground)]">
          Affordable American Insurance for Auto, Home, Life, Business, and Commercial needs.
        </p>

        <p className="mt-4 text-[var(--foreground)] text-md sm:text-lg">
          Bilingual: <span className="font-semibold">English & Vietnamese</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
          {[
            "Life Insurance",
            "Home & Auto",
            "Business Coverage",
            "Commercial Insurance",
            "Financial Planning",
            "Risk Assessment"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-medium text-sm shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-block bg-[var(--primary)] text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-[var(--secondary)] transition-colors"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Profile Image Section */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0">
        <div className="absolute top-4 left-4 w-full h-full bg-[var(--tertiary)] rounded-3xl transform rotate-2"></div>
        <div className="absolute -top-4 -left-4 w-full h-full bg-[var(--tertiary)] rounded-3xl transform -rotate-2"></div>

        <img
          src="/IMG_4452.JPEG"
          alt="Hai Doan Financial Agent"
          className="relative w-full h-full object-scale-down rounded-3xl shadow-lg border-4 border-white"
        />
      </div>
    </main>
  );
}
