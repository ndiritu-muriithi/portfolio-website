import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Charles Ndiritu - Portfolio',
  description: 'Data Scientist | Software Engineer | IT Professional',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold text-gray-800">Charles Ndiritu</h1>
                <nav className="hidden md:flex space-x-8">
                  <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</a>
                  <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</a>
                  <a href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Projects</a>
                  <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
                </nav>
                {/* Mobile menu button */}
                <button className="md:hidden text-gray-600 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600">&copy; {new Date().getFullYear()} Charles Ndiritu. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="mailto:cnderitumuriithi@gmail.com" className="text-gray-600 hover:text-blue-600">
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/charles-muriithi-b9bb731a4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}