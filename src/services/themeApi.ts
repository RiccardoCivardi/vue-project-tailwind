import { alovaInst } from "@/plugins/alova";

export const getTheme = () => alovaInst.Get("/get-theme");

export const getCustomerTheme = () => alovaInst.Get("/get-customer-theme");
