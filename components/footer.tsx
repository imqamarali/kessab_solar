import { ArrowRight, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/data/partners";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import MrCard from "./MrCard";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-8 pb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image
              src="https://kessabsolar.com/wp-content/uploads/2026/04/Kessab-Logo-04-e1776929331100.png"
              alt="KESSAB Solar"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed text-sm">
              Delivering clean, efficient, and affordable solar energy solutions
              to over 1,000 satisfied customers worldwide.
            </p>
          </div>
          {[
            {
              heading: "Contact",
              links: [
                {
                  label: "info@kessabsolar.com",
                  href: "mailto:info@kessabsolar.com",
                },
                {
                  label: "info@kessab-qatar.com",
                  href: "mailto:info@kessab-qatar.com",
                },
                {
                  label: "+974 4417 8557",
                  href: "tel:+97444178557",
                },
                {
                  label: "+974 3368 0965",
                  href: "tel:+97433680965"
                },
                { label: "+971 56 101 6330", href: "tel:+971561016330" },
                { label: "Al-Rawda Building 2, Doha" },
              ],
            },
            {
              heading: "Solutions",
              links: [
                {
                  label: "Solar Water Pumping",
                  href: "#services",
                },
                { label: "Solar Street Light", href: "#services" },
                {
                  label: "Solar Camera",
                  href: "#services",
                },
                {
                  label: "Custom Solutions",
                  href: "#services",
                },
              ],
            },
            {
              heading: "Legal",
              links: [
                {
                  label: "Privacy Policy",
                  href: "/legal/privacy-policy",
                },
                {
                  label: "Terms of Service",
                  href: "/legal/terms-of-service",
                },
                {
                  label: "Risk Disclosure",
                  href: "/legal/risk-disclosure",
                },
                { label: "Compliance", href: "/legal/compliance" },
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-white">{section.heading}</h4>
              <ul className="space-y-2 text-slate-400">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-teal-400 text-sm transition-colors cursor-pointer flex items-center gap-2"
                  >
                    {section.heading === "Contact" ? (
                      link.label.includes("@") ? (
                        <Mail size={16} />
                      ) : "isWhatsApp" in link && link.isWhatsApp ? (
                        <WhatsAppIcon className="w-4 h-4" />
                      ) : (
                        <MapPin size={16} />
                      )
                    ) : (
                      <ArrowRight size={16} />
                    )}
                    {"href" in link && link.href ? (
                      <Link
                        href={link.href}
                        target={link.isWhatsApp ? "_blank" : undefined}
                        rel={
                          link.isWhatsApp ? "noopener noreferrer" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Logos Section */}
        <div className="border-t border-slate-800 mt-8 pt-6" style={{ display: 'none' }}>
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner) => (
                <div key={partner.id} className="group">
                  {partner.href ? (
                    <Link
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        width={96}
                        height={48}
                        className="h-12 w-auto"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={96}
                      height={48}
                      className="h-12 w-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="text-center mb-6">
            <p className="text-slate-300 font-semibold mb-4">Follow Our Solar Energy Journey</p>
            <div className="flex justify-center gap-6">
              <Link
                href="https://www.facebook.com/people/Kessab-solar-energy/61572577337733/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z"/>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/kessab.solar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.272.273 2.69.07 7.052.012 8.331 0 8.756 0 12c0 3.244.011 3.668.07 4.948.202 4.358 2.63 6.78 6.98 6.98 1.281.058 1.7.07 4.948.07 3.259 0 3.668-.012 4.948-.07 4.354-.2 6.782-2.617 6.979-6.98.059-1.28.071-1.699.071-4.948 0-3.259-.012-3.668-.071-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.012 15.259 0 12 0z"/>
                  <circle cx="12" cy="12" r="3.6"/>
                </svg>
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=97433680965&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.896 10.174 1.355 2.327 3.651 3.7 6.267 3.7 1.987 0 3.893-.6 5.507-1.75l.005-.003 3.915 1.027-1.052-3.834.003-.005c1.074-1.692 1.639-3.637 1.639-5.641 0-6.167-5.808-11.175-12.015-11.175"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-4 text-center text-sm text-slate-400">
          <p>&copy; 2025 KESSAB Solar Energy. All rights reserved.</p>
          <p className="text-xs mt-2">Delivering Clean, Efficient, and Affordable Solar Energy Solutions</p>
        </div>
      </div>
    </footer>
  );
}
