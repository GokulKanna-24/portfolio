import './App.css'

function App() {

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Gokul Kanna</h2>
          <p className="text-xl mb-6">A passionate developer crafting clean and efficient web experiences.</p>
          <a href="#projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">View Projects</a>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-lg leading-relaxed">
            I'm a frontend developer with a strong focus on user interfaces and web performance. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>
      </section>

      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">Project Title {id}</h4>
                <p className="text-gray-600 mb-4">Short description of the project. Technologies used, challenges faced, and outcomes.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
          <p className="mb-6 text-gray-700">Interested in working together? Feel free to reach out!</p>
          <a href="mailto:you@example.com" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
            Send Email
          </a>
        </div>
      </section>

      <footer className="bg-gray-200 text-center p-6 mt-12">
        <p className="text-sm">© 2025 Gokul Kanna. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
