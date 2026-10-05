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
        "Two of us built Wraith's storefront app from start to finish.",
        "I designed the UX, then turned it into a design system of reusable components that the whole app uses.",
      ],
      tr: [
        "Wraith'in mağaza uygulamasını iki kişi baştan sona yaptık.",
        "UX'i tasarladım, sonra bunu uygulamanın her yerinde kullanılan, tekrar kullanılabilir bileşenlerden oluşan bir tasarım sistemine çevirdim.",
      ],
    },
  },
  {
    company: "Leonardo Türkiye",
    role: { en: "Intern Engineer", tr: "Stajyer Mühendis" },
    year: "2023",
    points: {
      en: [
        "Three of us built a system that monitors temperature and humidity in real time.",
        "I wrote Flask REST endpoints that validate incoming requests, and the JavaScript frontend that shows the sensor data.",
      ],
      tr: [
        "Üç kişi, sıcaklık ve nemi gerçek zamanlı izleyen bir sistem geliştirdik.",
        "Gelen istekleri doğrulayan Flask REST endpoint'lerini ve sensör verisini gösteren JavaScript arayüzünü yazdım.",
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
    items: ["PyTorch", "MLflow", "ConvNeXt", "PatchCore", "Grad-CAM", "CoreML", "CUDA"],
  },
  {
    label: { en: "Backend & Data", tr: "Backend & Veri" },
    items: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "Postman"],
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
