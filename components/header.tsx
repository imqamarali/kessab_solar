"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";

export default function Header({ nav = false }: { nav?: Boolean }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-background/70 backdrop-blur border-b border-muted sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/image.png"
                alt="KESSAB Solar"
                width={180}
                height={52}
                priority
                className="h-12 w-auto dark:invert dark:brightness-0"
              />
            </Link>
            <div className="hidden sm:block">
              <p className="font-semibold text-sm">KESSAB</p>
              <p className="text-xs text-muted-foreground">Solar Energy</p>
            </div>
          </div>
          {nav && (
            <nav className="hidden md:flex space-x-6 text-sm">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("capabilities")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium bg-transparent border-none cursor-pointer flex items-center gap-1"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Contact
              </button>
            </nav>
          )}
          <div className="flex gap-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="#contact">
                Contact Us
                <Sparkles className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
