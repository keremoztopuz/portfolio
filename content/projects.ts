import type { Localized } from "@/lib/i18n";

export type Category = "ml" | "games" | "web";

export type Project = {
  slug: string;
  title: string;
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
    title: "Industrial Anomaly Detection",
    year: "2026",
    category: "ml",
    featured: true,
    summary: {
      en: "A model that finds defects on factory parts after seeing only good ones. It is PatchCore-style and trained on MVTec AD. Training and evaluation run as a Prefect pipeline, and the model is live as a FastAPI service on Google Cloud Run, where you can upload an image and try it.",
      tr: "Sadece sağlam parçaları görerek fabrika parçalarındaki kusurları bulan bir model. PatchCore tabanlı, MVTec AD üzerinde eğitildi. Eğitim ve değerlendirme bir Prefect pipeline'ında çalışıyor. Model Google Cloud Run'da FastAPI servisi olarak yayında, bir görüntü yükleyip deneyebilirsin.",
    },
    highlights: {
      en: [
        "Image AUROC 0.977 and pixel AUROC 0.977 across all 15 categories",
        "Every run saves its source commit, dataset checksum and working-tree state, so each result can be traced back to the exact code",
        "Packaged with Docker, tested in CI, and checked for data drift by a scheduled job on Cloud Run",
      ],
      tr: [
        "15 kategorinin hepsinde görüntü AUROC 0.977, piksel AUROC 0.977",
        "Her çalıştırma kaynak commit'ini, veri seti checksum'ını ve çalışma ağacının durumunu kaydediyor. Her sonucun hangi koddan çıktığı görülebiliyor",
        "Docker ile paketlendi, CI'da test ediliyor, Cloud Run'daki zamanlanmış bir iş de veri kaymasını (drift) kontrol ediyor",
      ],
    },
    stack: ["PyTorch", "Prefect", "FastAPI", "Docker", "Cloud Run", "GitHub Actions"],
    repo: gh("industrial-anomaly-project"),
    live: "https://anomaly-api-sw4p2ayosa-ew.a.run.app/docs",
  },
  {
    slug: "skinner",
    title: "Skinner",
    year: "2026",
    category: "ml",
    summary: {
      en: "My graduation project. You take a photo of your face and a CoreML model on the phone analyses your skin. The app keeps your scores and routines, so you can see how things change over time. It is set up for App Store release with a StoreKit subscription.",
      tr: "Bitirme projem. Yüzünün fotoğrafını çekiyorsun, telefondaki CoreML modeli cildini analiz ediyor. Uygulama skorlarını ve rutinlerini saklıyor, böylece zaman içindeki değişimi görebiliyorsun. StoreKit aboneliğiyle App Store'a çıkmaya hazır.",
    },
    stack: ["Swift", "SwiftUI", "CoreML", "Core Data", "StoreKit"],
    repo: gh("skincareapp"),
  },
  {
    slug: "skin-condition-model",
    title: "Skin Condition Model",
    year: "2026",
    category: "ml",
    summary: {
      en: "The model inside Skinner. It checks a face photo for acne, eczema, eye bags and wrinkles separately, because one face can have more than one. It runs on ConvNeXt-Tiny, and each condition has its own threshold tuned on the validation set.",
      tr: "Skinner'ın içindeki model. Bir yüz fotoğrafında akne, egzama, göz altı torbası ve kırışıklığa ayrı ayrı bakıyor, çünkü bir yüzde birden fazlası olabilir. ConvNeXt-Tiny üzerinde çalışıyor ve her durumun eşiği doğrulama setinde ayrı ayarlandı.",
    },
    stack: ["PyTorch", "ConvNeXt-Tiny", "CoreML"],
    repo: gh("skincare_detection"),
  },
  {
    slug: "pneumonia-detector",
    title: "Pneumonia Detector",
    year: "2026",
    category: "ml",
    summary: {
      en: "Looks at a chest X-ray and tells you whether it shows pneumonia. I fine-tuned ConvNeXt for this and added Grad-CAM, which marks the parts of the X-ray the model paid attention to.",
      tr: "Akciğer röntgenine bakıp pnömoni olup olmadığını söylüyor. ConvNeXt'i bunun için ince ayarladım ve modelin röntgende nereye baktığını gösteren Grad-CAM ekledim.",
    },
    stack: ["PyTorch", "ConvNeXt", "Focal Loss", "Grad-CAM"],
    repo: gh("pneumonia_detector_project"),
  },
  {
    slug: "art-movement",
    title: "Art Movement Classification",
    year: "2025",
    category: "ml",
    summary: {
      en: "Give it a painting and it guesses the art movement: Baroque, Cubism, Pop Art or one of seven others. Transfer learning on ConvNeXt-Tiny got it to about 75% accuracy. This was my term project for the Deep Learning course.",
      tr: "Bir tablo veriyorsun, hangi sanat akımından olduğunu tahmin ediyor: Barok, Kübizm, Pop Art ya da diğer yedi akımdan biri. ConvNeXt-Tiny üzerinde transfer learning ile yaklaşık %75 doğruluğa ulaştı. Derin Öğrenme dersindeki dönem projemdi.",
    },
    stack: ["PyTorch", "ConvNeXt-Tiny", "CutMix", "Focal Loss"],
    repo: gh("art_movement_deep_learning_project"),
  },
  {
    slug: "house-always-wins",
    title: "The House Always Wins",
    year: "2026",
    category: "games",
    summary: {
      en: "A casino game where you run security and catch cheaters. Six of us made it, and I wrote all of the NPC AI. Customers walk the floor with NavMesh and move between blackjack, roulette, slots and the bar. Some of them cheat, some only look suspicious, and you decide who goes to the interrogation room.",
      tr: "Casinonun güvenliğini yönetip hilecileri yakaladığın bir oyun. Altı kişi geliştirdik, NPC yapay zekasının tamamını ben yazdım. Müşteriler NavMesh ile salonda dolaşıp blackjack, rulet, slot ve bar arasında gidip geliyor. Bazıları hile yapıyor, bazıları sadece şüpheli görünüyor. Kimin sorgu odasına gideceğine sen karar veriyorsun.",
    },
    stack: ["Unity 6", "C#", "NavMesh", "State machine"],
    repo: "https://github.com/BerkayHalicioglu/TheHouseAlwaysWins",
  },
  {
    slug: "core-breach",
    title: "Core Breach",
    year: "2026",
    category: "games",
    summary: {
      en: "A first-person game in a sci-fi arena. You hold off enemies until the timer runs out. Some go for the energy core and some come after you. In the code I used Strategy for enemy behaviour, Observer for the core's health, an object pool for projectiles and decorators for weapon upgrades.",
      tr: "Bilim kurgu bir arenada geçen birinci şahıs oyun. Süre dolana kadar düşmanları durduruyorsun. Bazıları enerji çekirdeğine, bazıları sana saldırıyor. Kodda düşman davranışları için Strategy, çekirdeğin canı için Observer, mermiler için object pool ve silah yükseltmeleri için Decorator kullandım.",
    },
    stack: ["Unity 6", "C#"],
    repo: gh("CENG454-HW3-BERATKEREM-OZTOPUZ-210444079"),
  },
  {
    slug: "flight-mission",
    title: "Flight Mission Simulator",
    year: "2026",
    category: "games",
    summary: {
      en: "Take off, get through a danger zone without being hit by homing missiles, then land. The missiles chase the plane using direction vectors and quaternion rotation. A mission manager handles the four game states and the HUD.",
      tr: "Kalk, güdümlü füzelere yakalanmadan tehlike bölgesini geç ve in. Füzeler uçağı yön vektörleri ve quaternion rotasyonuyla kovalıyor. Dört oyun durumunu ve HUD'u bir görev yöneticisi yönetiyor.",
    },
    stack: ["Unity 6", "C#", "TextMesh Pro"],
    repo: gh("CENG454-HW2-BERATKEREM-OZTOPUZ"),
  },
  {
    slug: "endless-flight",
    title: "Endless Flight Obstacle Game",
    year: "2026",
    category: "games",
    summary: {
      en: "Fly as far as you can between towers that keep appearing in front of you. You control throttle, pitch, roll and yaw, and a Cinemachine camera follows the plane. Towers you have passed get removed, so the scene does not fill up.",
      tr: "Önünde sürekli beliren kuleler arasında olabildiğince uzağa uç. Gazı, pitch, roll ve yaw'u sen kontrol ediyorsun, uçağı bir Cinemachine kamerası takip ediyor. Geçtiğin kuleler siliniyor, böylece sahne dolmuyor.",
    },
    stack: ["Unity 6", "C#", "Cinemachine"],
    repo: gh("CENG454-HW1-BERATKEREM-OZTOPUZ-210444079"),
  },
  {
    slug: "gym-management",
    title: "Gym Management System",
    year: "2026",
    category: "web",
    summary: {
      en: "Term project for the Database course. It is a Flask site on PostgreSQL where members sign up, book group lessons and track their BMI. A single setup script creates the schema and fills it with sample data.",
      tr: "Veritabanı dersinin dönem projesi. PostgreSQL üzerinde çalışan bir Flask sitesi: üyeler kayıt oluyor, grup derslerine yer ayırtıyor ve BMI'larını takip ediyor. Tek bir kurulum script'i şemayı oluşturup örnek veriyle dolduruyor.",
    },
    stack: ["Python", "Flask", "PostgreSQL"],
    repo: gh("gym_management_system"),
  },
  {
    slug: "temperature-humidity",
    title: "Temperature & Humidity Controller",
    year: "2023",
    category: "web",
    summary: {
      en: "Built during my internship at Leonardo Türkiye. I wrote the frontend.",
      tr: "Leonardo Türkiye'deki stajımda yapıldı. Frontend'ini ben yazdım.",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    repo: gh("temperature-humidity-controller"),
  },
];
