import type { ThemeId } from "../types";

export const THEMES: { id: ThemeId; name: string }[] = [
  { id: "light", name: "Light" },
];

export const DEFAULT_THEME: ThemeId = "light";
export const STORAGE_KEY = "portfolio-theme";
