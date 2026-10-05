import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Berat Kerem Öztopuz",
  email: "keremoztopuzzz@gmail.com",
  github: "https://github.com/keremoztopuz",
  linkedin: "https://www.linkedin.com/in/keremoztopuz",
};

export type Job = {
  company: string;
  role: Localized;
  year: string;
  points: Localized<string[]>;
};

export const experience: Job[] = [
  {
    company: "Wraith Esports",
    role: { en: "Intern", tr: "Stajyer" },
    year: "2026",
    points: {
      en: [
        "Built Wraith's storefront application end to end in a two-person team.",
        "Designed the UX, turned it into a design system and applied it across the app as reusable UI components.",
      ],
      tr: [
        "Wraith'in mağaza uygulamasını iki kişilik ekipte baştan sona geliştirdim.",
        "UX'i tasarlayıp bir tasarım sistemine dönüştürdüm ve uygulama genelinde yeniden kullanılabilir bileşenler olarak uyguladım.",
      ],
    },
  },
  {
    company: "Leonardo Türkiye",
    role: { en: "Intern Engineer", tr: "Stajyer Mühendis" },
    year: "2023",
    points: {
      en: [
        "Built a real-time temperature and humidity monitoring system in a team of three.",
        "Designed Flask REST endpoints with request validation, and a JavaScript front end that visualises the sensor data.",
      ],
      tr: [
        "Üç kişilik ekipte gerçek zamanlı sıcaklık ve nem izleme sistemi geliştirdim.",
        "İstek doğrulamalı Flask REST endpoint'leri ve sensör verisini görselleştiren bir JavaScript arayüzü yazdım.",
      ],
    },
  },
];

export type SkillGroup = { label: Localized; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: { en: "Languages", tr: "Diller" },
    items: ["Python", "C#", "Swift", "JavaScript", "Java"],
  },
  {
    label: { en: "ML & AI", tr: "ML & AI" },
    items: ["PyTorch", "ConvNeXt", "PatchCore", "Grad-CAM", "CoreML", "CUDA"],
  },
  {
    label: { en: "Backend & Data", tr: "Backend & Veri" },
    items: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "Pydantic", "Postman"],
  },
  {
    label: { en: "Cloud & DevOps", tr: "Cloud & DevOps" },
    items: [
      "Docker",
      "Google Cloud Run",
      "GitHub Actions",
      "Prefect",
      "Linux",
      "Automated testing",
    ],
  },
  {
    label: { en: "Game Development", tr: "Oyun Geliştirme" },
    items: ["Unity 6", "Rigidbody physics", "Cinemachine", "TextMesh Pro", "Game state management"],
  },
  {
    label: { en: "iOS", tr: "iOS" },
    items: ["SwiftUI", "Core Data", "StoreKit", "Xcode"],
  },
  {
    label: { en: "Tools", tr: "Araçlar" },
    items: ["Git", "GitHub", "macOS"],
  },
];
