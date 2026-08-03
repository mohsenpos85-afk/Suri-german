export const LEVELS = [
  { id: "A1", label: "سەرەتایی",  labelTr: "Başlangıç",  labelEn: "Beginner",           labelAr: "مبتدئ", labelUk: "Початковий", labelFa: "مبتدی", color: "#16A06F" },   // jade
  { id: "A2", label: "بنەڕەتی",   labelTr: "Temel",       labelEn: "Elementary",         labelAr: "أساسي", labelUk: "Елементарний", labelFa: "مقدماتی", color: "#F5A524" },    // amber
  { id: "B1", label: "ناوەند",    labelTr: "Orta",        labelEn: "Intermediate",       labelAr: "متوسط", labelUk: "Середній", labelFa: "متوسط", color: "#5B5BD6" },      // iris
  { id: "B2", label: "پێشکەوتوو", labelTr: "İleri",      labelEn: "Upper Intermediate", labelAr: "متقدم", labelUk: "Вище середнього", labelFa: "فوق متوسط", color: "#FF6B5E" },  // coral
  { id: "C1", label: "پیشەیی",   labelTr: "İleri Düzey", labelEn: "Advanced",           labelAr: "متمكن", labelUk: "Просунутий", labelFa: "پیشرفته", color: "#7C3AED" },   // violet
  { id: "C2", label: "مامۆستایی", labelTr: "Ustalık",    labelEn: "Mastery",            labelAr: "إتقان", labelUk: "Досконалий", labelFa: "استادی", color: "#0F766E" },   // teal
];
export const levelColor = (id) => (LEVELS.find((l) => l.id === id) || {}).color || "#71717A";
