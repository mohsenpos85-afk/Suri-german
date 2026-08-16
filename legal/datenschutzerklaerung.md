# Datenschutzerklärung — SURI

> ⚠️ **TASLAK — hukuki inceleme gerekli.** Bu metin SURI'nin gerçek veri akışına göre hazırlandı, ama yayından önce bir avukata/Datenschutzbeauftragte'ye onaylatılmalı ve `[…]` alanları doldurulmalı. Stand: [tarih].

## 1. Verantwortlicher (Sorumlu)
[Ad Soyad / Firma]
[Adres]
E-Mail: [iletişim e-postası]

(Ayrıntılar için bkz. Impressum.)

## 2. Genel bilgi
SURI, Almanca öğrenmeye yardımcı olan bir mobil ve web uygulamasıdır. Bu metin, uygulamayı kullandığınızda hangi kişisel verilerin, hangi amaçla ve hangi hukuki dayanakla işlendiğini açıklar. İşleme AB Genel Veri Koruma Tüzüğü (DSGVO/GDPR) esas alınarak yapılır.

## 3. İşlenen veriler, amaç ve hukuki dayanak

### a) Hesap / kimlik doğrulama
- **Veri:** e-posta adresi, kimlik doğrulama bilgileri.
- **Amaç:** hesap oluşturma, giriş, ilerlemenin cihazlar arası senkronu.
- **Hukuki dayanak:** Art. 6 (1) b DSGVO (sözleşmenin ifası).
- **İşleyen (Auftragsverarbeiter):** Supabase — barındırma bölgesi: [ör. EU / Frankfurt]. Supabase Inc. (ABD) ile ilgili aktarımlar için Standart Sözleşme Maddeleri (SCC) uygulanır.

### b) Öğrenme ilerlemesi ve tercihler
- **Veri:** ders ilerlemesi, XP, streak, favoriler, seçili dil.
- **Amaç:** işlevselliğin sağlanması.
- **Saklama:** öncelikle **cihazınızda** (localStorage); hesap açtıysanız hesabınıza bağlı olarak sunucuda.
- **Hukuki dayanak:** Art. 6 (1) b DSGVO.

### c) Yapay zekâ özellikleri (AI Tutor, sınav üretimi, Belge Asistanı)
- **Veri:** girdiğiniz metinler; **Belge Asistanı'nda taradığınız/yüklediğiniz belgelerin görüntüsü ve içeriği** (bu belgeler ad, adres, sağlık, mali vb. **özel nitelikli veriler** içerebilir).
- **Amaç:** yapay zekâ ile açıklama/analiz/alıştırma üretimi.
- **İşleyen:** **Anthropic PBC (ABD)** — "Claude" modeli. Veriler analiz için **ABD'ye aktarılır**; üçüncü ülke aktarımı Standart Sözleşme Maddeleri (SCC) temelinde yapılır.
- **Hukuki dayanak:** Art. 6 (1) a DSGVO (rıza); özel nitelikli veriler için **Art. 9 (2) a DSGVO (açık rıza)** — uygulama içinde belge taramadan önce açık onayınız alınır.
- **Saklama:** analiz sonuçları yalnızca **cihazınızda** saklanır ("Son taramalar"); dilediğiniz zaman silebilirsiniz. Anthropic'in kendi işleme/saklama koşulları için: [Anthropic gizlilik politikası linki].
- **Not:** Belge verileriniz reklam için kullanılmaz ve (Anthropic'in ilgili koşulları uyarınca) model eğitimi için kullanılmaz.

### d) Teknik loglar
- **Veri:** IP adresi, cihaz/tarayıcı bilgisi, hata kayıtları (yalnızca hizmetin çalışması ve güvenliği için).
- **Hukuki dayanak:** Art. 6 (1) f DSGVO (meşru menfaat).
- **İşleyen:** [barındırma/hata izleme sağlayıcısı — ör. Vercel, Sentry].

## 4. Rızanın geri alınması
AI/belge işleme için verdiğiniz rızayı istediğiniz zaman ileriye etkili olarak geri çekebilirsiniz (Art. 7 (3) DSGVO) — uygulama ayarlarından veya bize yazarak.

## 5. Haklarınız
DSGVO uyarınca şu haklara sahipsiniz: erişim (Art. 15), düzeltme (Art. 16), silme (Art. 17), işlemenin kısıtlanması (Art. 18), veri taşınabilirliği (Art. 20), itiraz (Art. 21). Ayrıca yetkili **veri koruma denetim makamına şikâyet** hakkınız vardır (Art. 77).

## 6. Hesabın ve verilerin silinmesi
Uygulama içindeki **"Hesabı Sil"** işleviyle hesabınızı ve ilişkili sunucu verilerini kalıcı olarak silebilirsiniz. Cihazdaki veriler (localStorage) uygulamayı kaldırınca veya "Son taramaları temizle" ile silinir.

## 7. Çocuklar
Uygulama [13/16] yaş altındaki çocuklara yönelik değildir.

## 8. Değişiklikler
Bu metni güncelleyebiliriz; güncel sürüm her zaman bu sayfada yayınlanır.

## 9. İletişim
Veri koruma soruları için: [iletişim e-postası]

---

### Doldurulacak/onaylanacaklar (silinecek)
- Supabase barındırma bölgesi, Vercel/Sentry gibi işleyenler, Anthropic politika linki
- Yaş sınırı (App Store/Play yaş derecesiyle uyumlu olsun)
- Şirketsen: veri koruma sorumlusu (DPO) atanması gerekip gerekmediği
- **İngilizce (ve gerekirse çok dilli) sürüm** — mağaza dünya geneline açıksa
