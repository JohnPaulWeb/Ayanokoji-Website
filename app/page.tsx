import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { redirect } from "next/navigation";
import Testimonials from "./components/Testimonials";
import { auth } from "@/auth"

import { useState } from "react";

export default function Home() {
  // const session = await auth()

  //  if(session) {
  //   redirect('/dashboard')
  //  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4.5 22h15a1.5 1.5 0 0 0 1.5-1.5V7.5L16.5 2h-12A1.5 1.5 0 0 0 3 3.5v17A1.5 1.5 0 0 0 4.5 22z" />
            <path d="M14 2v6h6" />
          </svg>
          <span className="font-bold">Ayanokoji</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#pricing">Pricing</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/help">Help Center</a>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  A simple a year in 2024-2025{'|'}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    365 DAYS
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Back to normal I just want to thank you for the past year for the happiness and joy
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Try for free</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Ayanokoji. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Button variant="link" size="sm" className="text-xs" asChild>
            <a href="/terms">Terms of Service</a>
          </Button>
          <Button variant="link" size="sm" className="text-xs" asChild>
            <a href="/privacy">Privacy</a>
          </Button>
        </nav>
      </footer>
    </div>
  );
}
