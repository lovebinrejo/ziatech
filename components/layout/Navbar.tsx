"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/news",     label: "News" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="ZIA Tech Solutions home">
          <Image
            src="/logo.svg"
            alt="ZIA Tech Solutions"
            width={200}
            height={50}
            priority
            className="h-10 w-auto dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            alt="ZIA Tech Solutions"
            width={200}
            height={50}
            priority
            className="h-10 w-auto hidden dark:block"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-primary-900 bg-primary-50 dark:text-primary-200 dark:bg-primary-950"
                    : "text-gray-600 hover:text-primary-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                )}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#0d9488" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")}
            onMouseOut={(e)  => (e.currentTarget.style.backgroundColor = "#0d9488")}
          >
            <Phone className="h-4 w-4" />
            Get a Quote
          </Link>
        </div>

        {/* Mobile: theme + burger */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-2" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      pathname === href
                        ? "bg-primary-50 text-primary-900 dark:bg-primary-950 dark:text-primary-200"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: "#0d9488" }}
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
