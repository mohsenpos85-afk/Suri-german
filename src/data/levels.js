export const LEVELS = [
  { id: "A1", label: "سەرەتایی",  labelTr: "Başlangıç",  labelEn: "Beginner",           labelAr: "مبتدئ", labelUk: "Початковий", labelFa: "مبتدی", color: "#659DB8" },   // jade
  { id: "A2", label: "بنەڕەتی",   labelTr: "Temel",       labelEn: "Elementary",         labelAr: "أساسي", labelUk: "Елементарний", labelFa: "مقدماتی", color: "#569F95" },    // amber
  { id: "B1", label: "ناوەند",    labelTr: "Orta",        labelEn: "Intermediate",       labelAr: "متوسط", labelUk: "Середній", labelFa: "متوسط", color: "#547CB6" },      // iris
  { id: "B2", label: "پێشکەوتوو", labelTr: "İleri",      labelEn: "Upper Intermediate", labelAr: "متقدم", labelUk: "Вище середнього", labelFa: "فوق متوسط", color: "#8877B5" },  // coral
  { id: "C1", label: "پیشەیی",   labelTr: "İleri Düzey", labelEn: "Advanced",           labelAr: "متمكن", labelUk: "Просунутий", labelFa: "پیشرفته", color: "#BD8D52" },   // violet
  { id: "C2", label: "مامۆستایی", labelTr: "Ustalık",    labelEn: "Mastery",            labelAr: "إتقان", labelUk: "Досконалий", labelFa: "استادی", color: "#9A657F" },   // teal
];
export const levelColor = (id) => (LEVELS.find((l) => l.id === id) || {}).color || "#71717A";
