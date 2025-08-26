export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Logo */}
      <div className="text-4xl font-bold tracking-widest mb-4">
        AIMILION
      </div>

      {/* Intriguojantis užrašas */}
      <h1 className="text-2xl md:text-4xl font-light text-center mb-6">
        GOING WITH LIONS <br />
        <span className="text-gray-400">Something powerful is coming…</span>
      </h1>

      {/* Nuorodos */}
      <div className="flex space-x-6 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          Facebook
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          LinkedIn
        </a>
        <a href="mailto:info@aimilion.com" className="hover:text-gray-400">
          Email
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-500">
        © {new Date().getFullYear()} AIMILION. All rights reserved.
      </footer>
    </main>
  );
}
