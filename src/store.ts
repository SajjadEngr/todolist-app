import { atom } from "jotai";

export const darkModeAtom = atom(true);
export const languageAtom = atom<"en" | "fa">("en");
export const userIdAtom = atom<string | null>(null);
