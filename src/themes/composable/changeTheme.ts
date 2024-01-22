import type { Ref } from "vue";
import type { ICompanyThemes } from "../types/themesTypes";
import { Theme, ThemeHandler } from "../types/themesTypes";

export function useChangeTheme(
  companyThemes: Ref<ICompanyThemes>,
  currentTheme: Ref<Theme>,
) {
  const root = document.documentElement;

  function applyLightTheme() {
    root.classList.remove(ThemeHandler.DARK);
    currentTheme.value = companyThemes.value.light;
    localStorage.theme = ThemeHandler.LIGHT;
    return currentTheme;
  }

  function applyDarkTheme() {
    root.classList.add(ThemeHandler.DARK);
    currentTheme.value = companyThemes.value.dark;
    localStorage.theme = ThemeHandler.DARK;
    return currentTheme;
  }

  return {
    applyLightTheme,
    applyDarkTheme,
  };
}
