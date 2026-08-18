import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden border-b"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,214,160,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="container max-w-7xl mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
            Ready to Go Solar?
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
            Ready to Power Your World with <br />
            Clean Solar Energy?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join over 1,000 satisfied customers and experience the KESSAB Solar
            advantage with our proven solar solutions and expert installation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-10 py-4"
              asChild
            >
              <Link href="#contact">
                <Sparkles className="mr-2 w-4 h-4" />
                Get Your Solar Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-300 transition-all duration-300 px-10 py-4 bg-transparent"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=97433680965&text=I%20am%20interested%20in%20solar%20energy%20solutions&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 w-4 h-4" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>

          {/* Direct Contact Info */}
          <div className="grid md:grid-cols-3 gap-4 pt-8 border-t border-slate-700">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm text-slate-300">Call Us</p>
              <Link href="tel:+97444178557" className="text-green-400 hover:text-green-300 font-semibold">
                +974 4417 8557
              </Link>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm text-slate-300">Email Us</p>
              <Link href="mailto:info@kessabsolar.com" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                info@kessabsolar.com
              </Link>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm text-slate-300">Location</p>
              <p className="text-green-400 font-semibold text-sm">
                Doha, Qatar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
