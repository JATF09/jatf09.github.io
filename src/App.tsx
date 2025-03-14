import React, { useState } from 'react';
import { Building2, Home, Plane as Crane, Mail, Phone, MapPin, Menu, X, ChevronRight, MessageSquare, Linkedin, Facebook, Instagram, Building } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const services = [
    {
      icon: <Home className="w-12 h-12 text-[#003366]" />,
      title: "Construcción Residencial",
      description: "Casas personalizadas con materiales de primera calidad"
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#003366]" />,
      title: "Proyectos Comerciales",
      description: "Edificios inteligentes y oficinas modernas"
    },
    {
      icon: <Building className="w-12 h-12 text-[#003366]" />,
      title: "Remodelaciones",
      description: "Transformamos espacios con diseños innovadores"
    },
    {
      icon: <Crane className="w-12 h-12 text-[#003366]" />,
      title: "Gestión de Obras",
      description: "Supervisión profesional desde el diseño hasta la entrega"
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      title: "Edificio Corporativo Azure"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Residencia Moderna"
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      title: "Torre Comercial"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Casa Sustentable"
    },
    {
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
      title: "Proyecto en Construcción"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      title: "Complejo Residencial"
    }
  ];

  const testimonials = [
    {
      quote: "¡Transformaron nuestra visión en una casa increíble!",
      author: "Juan Pérez",
      role: "Arquitecto"
    },
    {
      quote: "Profesionales puntuales y con atención al detalle.",
      author: "Empresa Inmobiliaria XYZ",
      role: "Cliente Corporativo"
    },
    {
      quote: "Excelente equipo y resultados excepcionales.",
      author: "María González",
      role: "Propietaria"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-[#003366]" />
              <span className="ml-2 text-xl font-bold text-[#003366]">CONSTRUCTORA WMC</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-[#003366]">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-[#003366]">Servicios</a>
              <a href="#proyectos" className="text-gray-600 hover:text-[#003366]">Proyectos</a>
              <a href="#nosotros" className="text-gray-600 hover:text-[#003366]">Nosotros</a>
              <a href="#contacto" className="text-gray-600 hover:text-[#003366]">Contacto</a>
              <button className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded-md font-semibold hover:bg-[#003366] hover:text-white transition duration-300">
                Solicitar Presupuesto
              </button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#inicio" className="block px-3 py-2 text-gray-600">Inicio</a>
              <a href="#servicios" className="block px-3 py-2 text-gray-600">Servicios</a>
              <a href="#proyectos" className="block px-3 py-2 text-gray-600">Proyectos</a>
              <a href="#nosotros" className="block px-3 py-2 text-gray-600">Nosotros</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-600">Contacto</a>
              <button className="w-full text-left px-3 py-2 text-[#003366] font-semibold">
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Construyendo Futuros Sólidos desde 1995</h1>
            <p className="text-xl mb-8">Expertos en construcción residencial, comercial y gestión de proyectos</p>
            <div className="flex space-x-4">
              <a href="#proyectos" className="bg-[#FFD700] text-[#003366] px-6 py-3 rounded-md font-semibold hover:bg-[#003366] hover:text-white transition duration-300">
                Ver Nuestros Proyectos
              </a>
              <a href="#contacto" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#003366] transition duration-300">
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#003366] mb-16">
            Nuestra Experiencia en Construcción
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#003366] mb-16">
            Nuestros Trabajos Hablan por Nosotros
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-[#003366] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FFD700] hover:text-[#003366] transition duration-300">
              Ver Más Proyectos
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#003366] mb-6">
                20+ años liderando el sector con pasión y profesionalismo
              </h2>
              <p className="text-gray-600 mb-6">
                Certificados ISO 9001, comprometidos con la excelencia en cada proyecto que emprendemos.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-[#003366] text-white px-4 py-2 rounded-full">Seguridad</span>
                <span className="bg-[#003366] text-white px-4 py-2 rounded-full">Transparencia</span>
                <span className="bg-[#003366] text-white px-4 py-2 rounded-full">Innovación</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo de trabajo"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#003366] mb-16">
            Confían en Nuestra Experiencia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-[#FFD700] mb-6">
                  <MessageSquare className="w-12 h-12" />
                </div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-[#003366]">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#003366] mb-16">
            Construyamos Juntos su Proyecto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Tipo de Proyecto</label>
                  <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]">
                    <option>Casa</option>
                    <option>Edificio</option>
                    <option>Remodelación</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]" 
                    rows={4}
                  ></textarea>
                </div>
                <button className="w-full bg-[#003366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#FFD700] hover:text-[#003366] transition duration-300 flex items-center justify-center">
                  <Mail className="mr-2" />
                  Enviar Solicitud
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#003366] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#003366]">Dirección</h3>
                  <p className="text-gray-600">Av. Principal #123, Col. Centro</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#003366] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#003366]">Teléfono</h3>
                  <p className="text-gray-600">+52 555-1234</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#003366] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#003366]">Email</h3>
                  <p className="text-gray-600">contacto@constructoraWMC.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">CONSTRUCTORA WMC</span>
              </div>
              <p className="text-gray-300">
                Construyendo el futuro con calidad y compromiso
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-[#FFD700]">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-[#FFD700]">Servicios</a></li>
                <li><a href="#proyectos" className="hover:text-[#FFD700]">Proyectos</a></li>
                <li><a href="#nosotros" className="hover:text-[#FFD700]">Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-[#FFD700]">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Av. Principal #123, Col. Centro</li>
                <li>+52 555-1234</li>
                <li>contacto@constructoraWMC.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#FFD700]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#FFD700]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#FFD700]">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            © 2024 CONSTRUCTORA WMC. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/525551234"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.4 6L0 24l6.2-1.4c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8.8.8-3.8-.2-.4C2.5 15.6 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8C20.6 6.6 21.6 9 21.6 12c0 5.5-4.5 10-9.6 10zm5.2-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6 0-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.3z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;