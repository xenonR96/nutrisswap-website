/// <reference types="vite/client" />

interface Window {
  ttq?: {
    track: (event: string, params?: Record<string, string>) => void;
    ready: (callback: () => void) => void;
  };
}