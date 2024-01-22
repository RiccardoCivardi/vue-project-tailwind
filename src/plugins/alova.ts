import { createAlova } from "alova";
import VueHook from "alova/vue";
import {
  createAlovaMockAdapter,
  defineMock,
  type MockWrapper,
} from "@alova/mock";

// mock data
import type { ICompanyThemes } from "@/themes/types/themesTypes";
import { Theme } from "@/themes/types/themesTypes";

const mockData: MockWrapper = defineMock({
  "/get-theme": {
    light: Theme.DESIGN_SYSTEM,
    dark: Theme.DESIGN_SYSTEM_DARK,
  },
  "/get-customer-theme": {
    light: Theme.DESIGN_SYSTEM_CUSTOMER,
    dark: Theme.DESIGN_SYSTEM_CUSTOMER_DARK,
  },
});

// create a alova instance [sistemare any una volta tolto il mock]
export const alovaInst = createAlova({
  baseURL: "",
  statesHook: VueHook,
  requestAdapter: createAlovaMockAdapter([mockData], { delay: 1500 }),
  responsed: (response: any) => response.json(),
});
