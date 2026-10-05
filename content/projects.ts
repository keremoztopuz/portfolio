import type { Localized } from "@/lib/i18n";

export type Category = "ml" | "games" | "web";

export type Project = {
  slug: string;
  title: Localized;
  year: string;
  category: Category;
  featured?: boolean;
  summary: Localized;
  highlights?: Localized<string[]>;
  stack: string[];
  repo: string;
  live?: string;
};

const gh = (repo: string) => `https://github.com/keremoztopuz/${repo}`;

export const projects: Project[] = [
  {
    slug: "industrial-anomaly",
    title: {
      en: "Industrial Anomaly Detection",
      tr: "Endüstriyel Anomali Tespiti",
    },
    year: "2026",
    category: "ml",
    featured: true,
    summary: {
      en: "Unsupervised defect detection on MVTec AD with a PatchCore-style model, trained only on defect-free images. Runs as a reproducible Prefect pipeline and is served as a FastAPI service on Google Cloud Run.",
      tr: "MVTec AD üzerinde PatchCore tabanlı, sadece kusursuz görüntülerle eğitilen gözetimsiz kusur tespiti. Tekrarlanabilir bir Prefect pipeline'ı olarak çalışıyor, Google Cloud Run üzerinde FastAPI servisi olarak yayında.",
    },
    highlights: {
      en: [
        "0.977 image AUROC and 0.977 pixel AUROC across all 15 MVTec AD categories",
        "Run manifest for every run: source commit, dataset checksum, working-tree state",
        "Docker image, CI with automated tests, scheduled drift-check job on Cloud Run",
      ],
      tr: [
        "15 MVTec AD kategorisinin tamamında 0.977 görüntü AUROC ve 0.977 piksel AUROC",
        "Her çalıştırma için manifest: kaynak commit, veri seti checksum'ı, çalışma ağacı durumu",
        "Docker imajı, otomatik testli CI, Cloud Run üzerinde zamanlanmış drift kontrolü",
      ],
    },
    stack: ["PyTorch", "Prefect", "FastAPI", "Docker", "Cloud Run", "GitHub Actions"],
    repo: gh("industrial-anomaly-project"),
    live: "https://anomaly-api-sw4p2ayosa-ew.a.run.app/docs",
  },
  {
    slug: "skinner",
    title: { en: "Skinner — iOS skin analysis", tr: "Skinner — iOS cilt analizi" },
    year: "2026",
    category: "ml",
    summary: {
      en: "Senior graduation project. An iOS app that analyses skin from a photo with an on-device CoreML model and tracks routines and scores over time. Prepared for App Store release with a StoreKit subscription.",
      tr: "Bitirme projesi. Fotoğraftan cilt analizini cihaz üzerinde çalışan bir CoreML modeliyle yapan, rutinleri ve skorları zaman içinde takip eden iOS uygulaması. StoreKit aboneliğiyle App Store yayınına hazırlandı.",
    },
    stack: ["Swift", "SwiftUI", "CoreML", "Core Data", "StoreKit"],
    repo: gh("skincareapp"),
  },
  {
    slug: "skin-condition-model",
    title: { en: "Skin Condition Model", tr: "Cilt Durumu Modeli" },
    year: "2026",
    category: "ml",
    summary: {
      en: "The model behind Skinner. Multi-label ConvNeXt-Tiny classifier for acne, eczema, eye bags and wrinkles, with per-class thresholds calibrated on the validation set.",
      tr: "Skinner'ın arkasındaki model. Akne, egzama, göz altı torbası ve kırışıklık için çok etiketli ConvNeXt-Tiny sınıflandırıcı; sınıf başına eşikler doğrulama setinde kalibre edildi.",
    },
    stack: ["PyTorch", "ConvNeXt-Tiny", "CoreML"],
    repo: gh("skincare_detection"),
  },
  {
    slug: "pneumonia-detector",
    title: { en: "Pneumonia Detector", tr: "Pnömoni Tespiti" },
    year: "2026",
    category: "ml",
    summary: {
      en: "Classifies chest X-rays as normal or pneumonia with a fine-tuned ConvNeXt, and shows Grad-CAM heat maps of the regions that drove each prediction.",
      tr: "Akciğer röntgenlerini ince ayarlı bir ConvNeXt ile normal ya da pnömoni olarak sınıflandırıyor; her tahmini etkileyen bölgeleri Grad-CAM ısı haritalarıyla gösteriyor.",
    },
    stack: ["PyTorch", "ConvNeXt", "Focal Loss", "Grad-CAM"],
    repo: gh("pneumonia_detector_project"),
  },
  {
    slug: "art-movement",
    title: { en: "Art Movement Classification", tr: "Sanat Akımı Sınıflandırma" },
    year: "2025",
    category: "ml",
    summary: {
      en: "Deep Learning course project. Classifies paintings into 10 art movements with transfer learning on ConvNeXt-Tiny, reaching about 75% accuracy.",
      tr: "Derin Öğrenme dersi projesi. Tabloları ConvNeXt-Tiny üzerinde transfer learning ile 10 sanat akımına ayırıyor; yaklaşık %75 doğruluk.",
    },
    stack: ["PyTorch", "ConvNeXt-Tiny", "CutMix", "Focal Loss"],
    repo: gh("art_movement_deep_learning_project"),
  },
  {
    slug: "core-breach",
    title: { en: "Core Breach", tr: "Core Breach" },
    year: "2026",
    category: "games",
    summary: {
      en: "First-person core defense game: protect an energy core from two enemy types until the timer runs out. Built around Strategy, Observer, Object Pool and Decorator patterns.",
      tr: "Birinci şahıs çekirdek savunma oyunu: süre bitene kadar enerji çekirdeğini iki tür düşmana karşı koru. Strategy, Observer, Object Pool ve Decorator desenleri üzerine kurulu.",
    },
    stack: ["Unity 6", "C#"],
    repo: gh("CENG454-HW3-BERATKEREM-OZTOPUZ-210444079"),
  },
  {
    slug: "flight-mission",
    title: { en: "Flight Mission Simulator", tr: "Uçuş Görevi Simülatörü" },
    year: "2026",
    category: "games",
    summary: {
      en: "3D flight mission with takeoff, danger-zone evasion and landing. Homing missiles steer with direction vectors and quaternion rotation; a mission manager runs four game states.",
      tr: "Kalkış, tehlike bölgesinden kaçış ve iniş içeren 3D uçuş görevi. Güdümlü füzeler yön vektörleri ve quaternion rotasyonuyla yönleniyor; görev yöneticisi dört oyun durumunu yönetiyor.",
    },
    stack: ["Unity 6", "C#", "TextMesh Pro"],
    repo: gh("CENG454-HW2-BERATKEREM-OZTOPUZ"),
  },
  {
    slug: "endless-flight",
    title: { en: "Endless Flight Obstacle Game", tr: "Sonsuz Uçuş Engel Oyunu" },
    year: "2026",
    category: "games",
    summary: {
      en: "Aircraft controller with throttle, pitch, roll and yaw, a Cinemachine follow camera, and a spawner that places obstacle towers ahead of the player and cleans them up over time.",
      tr: "Gaz, pitch, roll ve yaw kontrollü uçak, Cinemachine takip kamerası ve oyuncunun önüne engel kuleleri yerleştirip zamanla temizleyen bir spawner.",
    },
    stack: ["Unity 6", "C#", "Cinemachine"],
    repo: gh("CENG454-HW1-BERATKEREM-OZTOPUZ-210444079"),
  },
  {
    slug: "gym-management",
    title: { en: "Gym Management System", tr: "Spor Salonu Yönetim Sistemi" },
    year: "2026",
    category: "web",
    summary: {
      en: "Database term project. Flask web app on PostgreSQL for memberships, group lesson reservations and BMI tracking, with a setup script that builds the schema and sample data.",
      tr: "Veritabanı dönem projesi. Üyelik, grup dersi rezervasyonu ve BMI takibi için PostgreSQL üzerinde Flask web uygulaması; şemayı ve örnek veriyi kuran bir kurulum script'i ile.",
    },
    stack: ["Python", "Flask", "PostgreSQL"],
    repo: gh("gym_management_system"),
  },
  {
    slug: "temperature-humidity",
    title: {
      en: "Temperature & Humidity Controller",
      tr: "Sıcaklık & Nem Kontrolcüsü",
    },
    year: "2023",
    category: "web",
    summary: {
      en: "Internship project at Leonardo Türkiye, in a team of three. This repository holds the Arduino firmware that reads the sensors; the system also had a Flask REST service and a browser dashboard.",
      tr: "Leonardo Türkiye stajında üç kişilik ekiple yapıldı. Bu repo sensörleri okuyan Arduino yazılımını içeriyor; sistemde ayrıca bir Flask REST servisi ve tarayıcı paneli vardı.",
    },
    stack: ["Arduino", "C++"],
    repo: gh("temperature-humidity-controller"),
  },
];
