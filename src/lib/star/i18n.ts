import { useStar } from "@/lib/star/store";

const messages = {
  fa: {
    uiLanguage: "زبان رابط کاربری",
    persian: "فارسی",
    english: "English",
    settings: "تنظیمات",
    done: "انجام شد",
    general: "عمومی",
    appearance: "نمایش",
    conversationsStored: "گفتگوهای ذخیره‌شده",
    savedOnDevice: "ذخیره‌شده روی این دستگاه",
    replyLanguage: "زبان پاسخ هوش مصنوعی",
    automatic: "خودکار",
    assistantName: "نام دستیار",
    newChat: "گفتگوی جدید",
    search: "جستجو",
    help: "راهنما",
    profile: "حساب کاربری",
  },
  en: {
    uiLanguage: "Interface language",
    persian: "فارسی",
    english: "English",
    settings: "Settings",
    done: "Done",
    general: "General",
    appearance: "Appearance",
    conversationsStored: "Conversations stored",
    savedOnDevice: "Saved on this device",
    replyLanguage: "AI reply language",
    automatic: "Automatic",
    assistantName: "Assistant name",
    newChat: "New chat",
    search: "Search",
    help: "Help",
    profile: "Profile",
  },
} as const;

export type TranslationKey = keyof typeof messages.en;

export function useI18n() {
  const { settings } = useStar();
  const language = settings.uiLanguage ?? "fa";
  return {
    language,
    dir: language === "fa" ? "rtl" as const : "ltr" as const,
    t: (key: TranslationKey) => messages[language][key],
  };
}
