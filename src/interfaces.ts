import { Dispatch, SetStateAction } from "react";

export interface Projects {
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  demoUrl?: string;
  srcUrl?: string;
  featured?: boolean;
  unFinished?: boolean;
  currently?: boolean;
}

export type Language = 'id' | 'en';

export interface LanguageContext {
  language: Language,
  setLanguage: Dispatch<SetStateAction<Language>>
}

export interface MainNavType {
  label: string;
  path: string;
}