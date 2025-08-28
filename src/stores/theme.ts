import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'theme-ocean' | 'theme-sunset' | 'theme-neutral';

interface ThemeState {
  theme: Theme;
  darkMode: boolean;
  setTheme: (theme: Theme) => void;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'theme-ocean',
      darkMode: false,
      setTheme: (theme) => set({ theme }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'theme-storage',
    }
  )
);