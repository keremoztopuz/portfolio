import type { Locale } from "./i18n";

// Interface strings. Content (projects, experience) lives in content/.
const en = {
  meta: {
    title: "Berat Kerem Öztopuz — Computer Engineer",
    description:
      "Computer engineer working on machine learning, backend systems and games. Projects, experience and skills.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    skipToContent: "Skip to content",
    switchLanguage: "Türkçe'ye geç",
    toggleTheme: "Toggle dark mode",
  },
  intro: {
    role: "Computer Engineer",
    focus: "Machine learning, backend & games",
    location: "Ankara, Türkiye",
    bio: "I build things end to end: training models in PyTorch and shipping them behind tested, reproducible pipelines and APIs, writing iOS apps in SwiftUI, and making 3D games in Unity.",
  },
  work: {
    title: "Selected work",
    filters: {
      all: "All",
      ml: "ML & AI",
      games: "Games",
      web: "Web & Systems",
    },
    featured: "Featured",
    repo: "Code",
    live: "Live API",
    stack: "Tech stack",
  },
  experience: { title: "Experience" },
  skills: { title: "Skills" },
  education: {
    title: "Education",
    degree: "B.Sc. in Computer Engineering",
    school: "University of Turkish Aeronautical Association",
    coursework: "Game Programming, Deep Learning, Database Systems",
  },
  contact: {
    title: "Contact",
    text: "Open to junior roles and freelance work. The fastest way to reach me is email.",
  },
  footer: { built: "Built with Next.js and Tailwind CSS." },
};

export type Dictionary = typeof en;

const tr: Dictionary = {
  meta: {
    title: "Berat Kerem Öztopuz — Bilgisayar Mühendisi",
    description:
      "Makine öğrenmesi, backend sistemleri ve oyunlar üzerinde çalışan bilgisayar mühendisi. Projeler, deneyim ve yetenekler.",
  },
  nav: {
    work: "Projeler",
    experience: "Deneyim",
    skills: "Yetenekler",
    contact: "İletişim",
    skipToContent: "İçeriğe geç",
    switchLanguage: "Switch to English",
    toggleTheme: "Karanlık modu aç/kapat",
  },
  intro: {
    role: "Bilgisayar Mühendisi",
    focus: "Makine öğrenmesi, backend ve oyun",
    location: "Ankara, Türkiye",
    bio: "İşleri baştan sona çıkarıyorum: PyTorch ile model eğitip test edilmiş, tekrarlanabilir pipeline ve API'lerle yayına almak, SwiftUI ile iOS uygulamaları yazmak ve Unity ile 3D oyunlar geliştirmek.",
  },
  work: {
    title: "Seçili projeler",
    filters: {
      all: "Tümü",
      ml: "ML & AI",
      games: "Oyunlar",
      web: "Web & Sistem",
    },
    featured: "Öne çıkan",
    repo: "Kod",
    live: "Canlı API",
    stack: "Teknolojiler",
  },
  experience: { title: "Deneyim" },
  skills: { title: "Yetenekler" },
  education: {
    title: "Eğitim",
    degree: "Bilgisayar Mühendisliği Lisans",
    school: "Türk Hava Kurumu Üniversitesi",
    coursework: "Oyun Programlama, Derin Öğrenme, Veritabanı Sistemleri",
  },
  contact: {
    title: "İletişim",
    text: "Junior pozisyonlara ve freelance işlere açığım. Bana en hızlı e-posta ile ulaşabilirsin.",
  },
  footer: { built: "Next.js ve Tailwind CSS ile yapıldı." },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
