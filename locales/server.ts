import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import("./en"),
  fr: () => import("./fr"),
  es: () => import("./es"),
  "zh-CN": () => import("./zh-CN"),
  ua: () => import("./ua"),
  ru: () => import("./ru"),
  pt: () => import("./pt")
});