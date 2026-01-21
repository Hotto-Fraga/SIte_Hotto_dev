"use client"

import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu'
import '@/styles/Footer/Footer.css'

const navigation = {
  explorar: [
    { name: 'Technologies', href: '#technologies' },
    { name: 'Mini Projects', href: '#projects' },
  ],
  portfolio: [
    { name: 'About me', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer>
      <div className="container py-12">
        
        {/* Layout Principal: Grid de 3 Colunas */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Coluna 1: Informações de Contacto e Marca */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                <span className="text-white font-bold text-lg transform -rotate-45">HD</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Hotto Dev
              </h3>
            </div>

            {/* Informações de Contacto */}
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <LuMapPin className="footer-contact-icon text-orange-500" />
                <div className="text-sm text-foreground">
                  Lisboa, Portugal
                </div>
              </div>
              
              <div className="footer-contact-item">
                <LuPhone className="footer-contact-icon text-orange-500" />
                <div className="text-sm">
                  <a href="tel:+351967458496" className="footer-contact-link">
                    +351 967 458 496
                  </a>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <LuMail className="footer-contact-icon text-orange-500" />
                <div className="text-sm">
                  <a href="mailto:me@hotto.dev" className="footer-contact-link">
                    me@hotto.dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação (Links) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            
            {/* Secção Explorar */}
            <div className="footer-nav-section">
              <h4 className="footer-nav-title">
                Explore
              </h4>
              <ul className="footer-nav-list">
                {navigation.explorar.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="footer-nav-link">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Secção Empresa */}
            <div className="footer-nav-section">
              <h4 className="footer-nav-title">
                Portfolio
              </h4>
              <ul className="footer-nav-list">
                {navigation.portfolio.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="footer-nav-link">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Secção de Direitos Autorais */}
        <p className="footer-copyright-year">
          &copy; {new Date().getFullYear()} Hotto Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}