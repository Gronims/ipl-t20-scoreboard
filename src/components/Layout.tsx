// Basic layout component - equivalent to Next.js layout
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">
            My Next.js-style App
          </h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-muted-foreground">
          <p>&copy; 2024 My App. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}