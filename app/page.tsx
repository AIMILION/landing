export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Header su logotipu ir pavadinimu */}
      <header className="p-6">
        <div className="flex flex-col items-start">
          {/* Logotipas */}
          <img src="/logo.png" alt="AIMILION Logo" className="h-10 mb-2" />

          {/* Pavadinimas + šūkis */}
          <h1 className="text-xl font-bold tracking-widest">AIMILION</h1>
          <p className="text-sm text-gray-400">GOING WITH LIONS</p>
        </div>
      </header>

      {/* Centrinis laukimo užrašas */}
      <section className="flex flex-grow items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-light text-center">
          Something powerful is coming…
        </h2>
      </section>

      {/* Footer su linkais kairėje */}
      <footer className="p-6">
        <div className="flex flex-col space-y-2 text-sm text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:info@aimilion.com" className="hover:text-white">
            Email
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-600">
          © {new Date().getFullYear()} AIMILION. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
