import type { Locale } from "./i18n";

// Interface strings. Content (projects, experience) lives in content/.
const en = {
  meta: {
    title: "Berat Kerem Öztopuz · Computer Engineer",
    description:
      "Computer engineer in Ankara working on machine learning, backend and games.",
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
    focus: "ML, Backend and Game Development",
    location: "Ankara, Türkiye",
    photoAlt: "Portrait of Berat Kerem Öztopuz",
    bio: "I train models in PyTorch and put them into production with tested, reproducible pipelines and APIs. I also write iOS apps in SwiftUI and make 3D games in Unity.",
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
    text: "I'm looking for a junior role and I'm open to freelance work. Email is the quickest way to reach me.",
  },
};

export type Dictionary = typeof en;

const tr: Dictionary = {
  meta: {
    title: "Berat Kerem Öztopuz · Bilgisayar Mühendisi",
    description:
      "Ankara'da makine öğrenmesi, backend ve oyun üzerine çalışan bilgisayar mühendisi.",
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
    focus: "ML, Backend and Game Development",
    location: "Ankara, Türkiye",
    photoAlt: "Berat Kerem Öztopuz'un portresi",
    bio: "PyTorch ile model eğitiyor, bunları test edilmiş, tekrarlanabilir pipeline'lar ve API'lerle yayına alıyorum. Bunun yanında SwiftUI ile iOS uygulamaları yazıyor, Unity ile 3D oyunlar yapıyorum.",
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
    text: "Junior bir pozisyon arıyorum, freelance işlere de açığım. Bana en hızlı e-postayla ulaşırsın.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
