import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_research: {
        background: "#fbfbf7",
        foreground: "#17201d",
        accent: "#0f766e",
        muted: "#6d766f",
        border: "#d8ded6",
        surface: "#f3f5ee",
        isDark: false,
    },
    dark_research: {
        background: "#111816",
        foreground: "#edf2ee",
        accent: "#7dd3c7",
        muted: "#7f8e88",
        border: "#2b3834",
        surface: "#17211e",
        isDark: true,
    },
    light_default: {
        background: "#f9fafb",
        foreground: "#111827",
        accent: "#3b82f6",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
        isDark: false,
    },
    dark_default: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#343f60",
        border: "#ab4b08",
        surface: "#212737",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
    },
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
    }
};
