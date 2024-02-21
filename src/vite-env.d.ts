/// <reference types="vite/client" />

interface ImportMeta {
    globEager<T = any>(globPattern: string): Record<string, T>;
}