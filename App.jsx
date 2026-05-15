
export default function App() {
  const services = [
    { title: 'Interior Painting', icon: '🏠' },
    { title: 'Exterior Painting', icon: '🎨' },
    { title: 'Roof Painting', icon: '🏡' },
    { title: 'Plastering & Repairs', icon: '🛠️' },
    { title: 'Fence & Deck Painting', icon: '🪵' },
    { title: 'Commercial Painting', icon: '🏢' },
  ];

  const projects = [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <div className="bg-white text-gray-800">
      <header className="bg-[#08111f] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#d6a247]">
              COLOUR KING
            </h1>
            <p className="uppercase tracking-[4px] text-xs text-gray-300">
              Painting & Decorating
            </p>
          </div>

          <nav className="hidden md:flex gap-8 uppercase text-sm font-semibold">
            <a href="#" className="hover:text-[#d6a247]">Home</a>
            <a href="#services" className="hover:text-[#d6a247]">Services</a>
            <a href="#projects" className="hover:text-[#d6a247]">Projects</a>
            <a href="#contact" className="hover:text-[#d6a247]">Contact</a>
          </nav>

          <button className="bg-[#d6a247] px-6 py-3 rounded-md font-bold hover:bg-[#bf8c36] transition">
            GET A QUOTE
          </button>
        </div>
      </header>

      <section className="relative min-h-[750px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#08111f]/95 via-[#08111f]/80 to-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[4px] text-[#d6a247] mb-5 text-sm">
              Professional Painting & Decorating Services
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              BRINGING COLOUR
              <br />
              <span className="text-[#d6a247]">TO LIFE.</span>
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              High quality painting and decorating services for homes and businesses across Sydney.
            </p>

            <div className="flex flex-wrap gap-5 mb-14">
              <button className="bg-[#d6a247] hover:bg-[#bf8c36] transition px-8 py-4 rounded-md font-bold">
                0481 825 464
              </button>

              <button className="border border-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-black transition">
                OUR SERVICES
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['High Quality', 'Experienced', 'Fully Insured', 'Satisfaction Guaranteed'].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg">{item}</h3>
                  <p className="text-gray-300 text-sm mt-1">Premium Service</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#d6a247] text-sm mb-3">
              Our Services
            </p>

            <h2 className="text-5xl font-black text-[#08111f]">
              COMPLETE PAINTING & DECORATING SOLUTIONS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-7 text-center hover:shadow-2xl transition bg-white">
                <div className="text-5xl mb-5">{service.icon}</div>

                <h3 className="font-bold text-lg mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Premium finishes and reliable workmanship tailored for your project.
                </p>

                <button className="mt-5 text-[#d6a247] font-semibold text-sm">
                  LEARN MORE →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#08111f] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-[#d6a247] text-sm mb-3">
            Our Work
          </p>

          <h2 className="text-5xl font-black mb-16">RECENT PROJECTS</h2>

          <div className="grid md:grid-cols-4 gap-5">
            {projects.map((project, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={project}
                  className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                  alt=""
                />
              </div>
            ))}
          </div>

          <button className="mt-10 border border-[#d6a247] px-8 py-4 rounded-md font-bold text-[#d6a247] hover:bg-[#d6a247] hover:text-black transition">
            VIEW MORE PROJECTS
          </button>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <p className="uppercase tracking-[4px] text-[#d6a247] text-sm mb-3">
              Get a Free Quote
            </p>

            <h2 className="text-5xl font-black text-[#08111f] mb-6">
              LET’S DISCUSS YOUR NEXT PROJECT
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              Fill out the form and we’ll get back to you with a free no-obligation quote.
            </p>

            <div className="space-y-5 text-lg">
              <p>📞 0481 825 464</p>
              <p>✉️ colourkingpainting@gmail.com</p>
              <p>📍 Serving Sydney & Surrounding Areas</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input placeholder="Your Name" className="border p-4 rounded-md" />
              <input placeholder="Phone Number" className="border p-4 rounded-md" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input placeholder="Email Address" className="border p-4 rounded-md" />
              <input placeholder="Suburb" className="border p-4 rounded-md" />
            </div>

            <select className="border p-4 rounded-md w-full mb-4">
              <option>What service do you need?</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="border p-4 rounded-md w-full mb-6"
            ></textarea>

            <button className="w-full bg-[#d6a247] py-4 rounded-md text-white font-bold hover:bg-[#bf8c36] transition">
              SEND ENQUIRY
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#08111f] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-black text-[#d6a247] mb-4">
              COLOUR KING
            </h3>

            <p className="text-gray-300 leading-relaxed">
              High quality painting and decorating services with a commitment to customer satisfaction.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Roof Painting</li>
              <li>Commercial Painting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>📞 0481 825 464</li>
              <li>✉️ colourkingpainting@gmail.com</li>
              <li>📍 Sydney & Surrounding Areas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © 2026 Colour King Painting & Decorating Pty Ltd
        </div>
      </footer>
    </div>
  );
}
