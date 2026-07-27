// One-off script: generates 3 ElevenLabs voice-design previews for Suri (the meerkat character).
// Listen to the resulting MP3s in ./voice-previews/, then tell Claude which one you like —
// it will be turned into a permanent voice via create-voice-from-preview.
const fs = require('fs');
const path = require('path');

// Minimal .env reader (no dotenv dependency in this project)
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  const env = {};
  for (const line of lines) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
  return env;
}

const VOICE_DESCRIPTION =
  "A warm, friendly, slightly animalistic voice for a curious meerkat character in a German " +
  "language-learning story. A light, playful, chittery warmth in the tone — but German pronunciation " +
  "must stay completely clear and easy to understand for language learners. Medium pitch, gentle, " +
  "encouraging, storytelling narrator quality, not cartoonish or exaggerated.";

const SAMPLE_TEXT =
  "Guten Morgen! Ich heiße Suri. Ich lerne Deutsch und ich bin sehr neugierig auf alles Neue hier in Berlin.";

async function main() {
  const env = loadEnv();
  const apiKey = env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    console.error("ELEVENLABS_API_KEY is empty in .env — add your key first.");
    process.exit(1);
  }

  console.log("Requesting voice previews from ElevenLabs...");
  const res = await fetch("https://api.elevenlabs.io/v1/text-to-voice/create-previews", {
    method: "POST",
    headers: { "xi-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ voice_description: VOICE_DESCRIPTION, text: SAMPLE_TEXT }),
  });

  if (!res.ok) {
    console.error("ElevenLabs API error:", res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const outDir = path.join(__dirname, "voice-previews");
  fs.mkdirSync(outDir, { recursive: true });

  const manifest = [];
  data.previews.forEach((p, i) => {
    const file = path.join(outDir, `suri-preview-${i + 1}.mp3`);
    fs.writeFileSync(file, Buffer.from(p.audio_base_64, "base64"));
    manifest.push({ file: `suri-preview-${i + 1}.mp3`, generated_voice_id: p.generated_voice_id });
    console.log(`Saved ${file}`);
  });

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log("\nDone. Listen to the files in ./voice-previews/ and tell me which number you like best.");
}

main().catch(e => { console.error(e); process.exit(1); });
