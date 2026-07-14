'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Footer() {
  const footerLinks = {
    Services: [
      'Market Intelligence',
      'Data Builds',
      'Campaign Management',
      'Pipeline Reporting',
    ],
    Company: [
      'About',
      'Process',
    ],
  }

  return (
    <footer className="bg-deep text-canvas pt-20 pb-8 border-t border-line-dark">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-line-dark">
            {/* Logo & Tagline */}
            <div className="md:col-span-1">
              <Image
                src="/logo-rounded.webp"
                alt="Harborne Data"
                width={48}
                height={48}
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm text-canvas">
                B2B Data & Pipeline Growth
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-semibold mb-4 text-canvas text-sm uppercase tracking-wide">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-canvas/70 hover:text-gold transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-canvas text-sm uppercase tracking-wide">
                Contact
              </h4>
              <a
                href="mailto:sami@harborne-data.com"
                className="text-sm text-canvas hover:text-gold transition-colors break-all"
              >
                sami@harborne-data.com
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-canvas/60">
            <p>
              © 2026 Harborne Data Ltd. All rights reserved.
            </p>
            <p>
              London, UK | Registered in England & Wales
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
