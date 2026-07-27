export const LEVELS = [
  { id: "A1", label: "سەرەتایی",  labelTr: "Başlangıç",  labelEn: "Beginner",           labelAr: "مبتدئ", color: "#16A06F" },   // jade
  { id: "A2", label: "بنەڕەتی",   labelTr: "Temel",       labelEn: "Elementary",         labelAr: "أساسي", color: "#F5A524" },    // amber
  { id: "B1", label: "ناوەند",    labelTr: "Orta",        labelEn: "Intermediate",       labelAr: "متوسط", color: "#5B5BD6" },      // iris
  { id: "B2", label: "پێشکەوتوو", labelTr: "İleri",      labelEn: "Upper Intermediate", labelAr: "متقدم", color: "#FF6B5E" },  // coral
  { id: "C1", label: "پیشەیی",   labelTr: "İleri Düzey", labelEn: "Advanced",           labelAr: "متمكن", color: "#7C3AED" },   // violet
  { id: "C2", label: "مامۆستایی", labelTr: "Ustalık",    labelEn: "Mastery",            labelAr: "إتقان", color: "#0F766E" },   // teal
];
export const levelColor = (id) => (LEVELS.find((l) => l.id === id) || {}).color || "#71717A";
