'use client';

import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useThemeStore } from '@/stores/theme';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useThemeStore((state) => state.theme);
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} ${theme}`}>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen flex flex-col">
            <header className="header sticky top-0 z-50">
              <div className="container py-4">
                <nav className="flex items-center justify-between">
                  <a href="/" className="font-greia-poster text-2xl text-white">
                    GREIA
                  </a>
                  <div className="flex items-center space-x-6">
                    <a href="/properties" className="text-white hover:opacity-80">
                      Properties
                    </a>
                    <a href="/connect" className="text-white hover:opacity-80">
                      Connect
                    </a>
                    <a href="/services" className="text-white hover:opacity-80">
                      Services
                    </a>
                    <a href="/lifestyle" className="text-white hover:opacity-80">
                      Lifestyle
                    </a>
                    <button className="button-primary">
                      Sign In
                    </button>
                  </div>
                </nav>
              </div>
            </header>

            <main className="flex-grow">
              {children}
            </main>

            <footer className="footer mt-auto">
              <div className="container py-12">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-greia-poster text-xl text-white mb-4">
                      GREIA
                    </h3>
                    <p className="text-white/80">
                      Your operating system for modern life.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Platform</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/properties" className="text-white/80 hover:text-white">
                          Properties
                        </a>
                      </li>
                      <li>
                        <a href="/connect" className="text-white/80 hover:text-white">
                          Connect
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="text-white/80 hover:text-white">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/lifestyle" className="text-white/80 hover:text-white">
                          Lifestyle
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/about" className="text-white/80 hover:text-white">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white/80 hover:text-white">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="/careers" className="text-white/80 hover:text-white">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/privacy" className="text-white/80 hover:text-white">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/terms" className="text-white/80 hover:text-white">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    © {new Date().getFullYear()} GREIA. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}