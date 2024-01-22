export interface ISubsetTheme {
  [key: string]: string;
}

export interface ITheme {
  [key: string]: ISubsetTheme;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export enum Theme {
  DESIGN_SYSTEM = "designSystem",
  DESIGN_SYSTEM_DARK = "designSystemDark",
  DESIGN_SYSTEM_CUSTOMER = "designSystemCustomer",
  DESIGN_SYSTEM_CUSTOMER_DARK = "designSystemCustomerDark",
}

export interface ICompanyThemes {
  light: Theme;
  dark: Theme;
}

export enum ThemeHandler {
  LIGHT = "light",
  DARK = "dark",
}
