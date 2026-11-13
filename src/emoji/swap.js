// Renders every emoji found in text as a thin line icon (Lucide) in the current text colour.
import { jsx as _jsx } from "react/jsx-runtime";
import {
  AlertTriangle,
  Atom,
  Bike,
  Bird,
  BookMarked,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Bus,
  Cake,
  Calendar,
  Camera,
  Car,
  Castle,
  Cat,
  CheckCircle2,
  Clapperboard,
  ClipboardList,
  Clock,
  CloudRain,
  Coffee,
  Compass,
  CreditCard,
  Crown,
  Drama,
  Dumbbell,
  Feather,
  FileText,
  Fish,
  Flame,
  FlaskConical,
  FolderOpen,
  Footprints,
  Frown,
  Gem,
  Globe,
  GraduationCap,
  Hand,
  Handshake,
  Hash,
  Headphones,
  Heart,
  Home as HomeIc,
  Hourglass,
  KeyRound,
  Landmark,
  Layers,
  Library,
  Lightbulb,
  Lock,
  Mail,
  Map,
  MapPin,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Mic,
  Microscope,
  Moon,
  Mountain,
  Music,
  Newspaper,
  Palette,
  PartyPopper,
  PenLine,
  Pencil,
  Pin,
  Plane,
  Puzzle,
  Radio,
  Rainbow,
  RefreshCw,
  Rocket,
  Scale,
  School,
  ScrollText,
  Search,
  Settings,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Smile,
  Snowflake,
  Sparkles,
  Sprout,
  Star,
  Stethoscope,
  Store,
  Sun,
  Swords,
  Target,
  ThumbsUp,
  Timer,
  TrafficCone,
  Train,
  TrendingDown,
  TrendingUp,
  Trophy,
  Tv,
  Type,
  User,
  Users,
  Utensils,
  Volume2,
  Wine,
  Wrench,
  X,
  Zap
} from "lucide-react";
import { EMOJI_ICON } from "./map.js";

const ICONS = { AlertTriangle, Atom, Bike, Bird, BookMarked, BookOpen, Bot, Brain, Briefcase, Building2, Bus, Cake, Calendar, Camera, Car, Castle, Cat, CheckCircle2, Clapperboard, ClipboardList, Clock, CloudRain, Coffee, Compass, CreditCard, Crown, Drama, Dumbbell, Feather, FileText, Fish, Flame, FlaskConical, FolderOpen, Footprints, Frown, Gem, Globe, GraduationCap, Hand, Handshake, Hash, Headphones, Heart, Home: HomeIc, Hourglass, KeyRound, Landmark, Layers, Library, Lightbulb, Lock, Mail, Map, MapPin, Megaphone, MessageCircle, MessageSquare, Mic, Microscope, Moon, Mountain, Music, Newspaper, Palette, PartyPopper, PenLine, Pencil, Pin, Plane, Puzzle, Radio, Rainbow, RefreshCw, Rocket, Scale, School, ScrollText, Search, Settings, Shirt, ShoppingBag, ShoppingCart, Smartphone, Smile, Snowflake, Sparkles, Sprout, Star, Stethoscope, Store, Sun, Swords, Target, ThumbsUp, Timer, TrafficCone, Train, TrendingDown, TrendingUp, Trophy, Tv, Type, User, Users, Utensils, Volume2, Wine, Wrench, X, Zap };
const keys = Object.keys(EMOJI_ICON).sort((a, b) => b.length - a.length).filter(k => ICONS[EMOJI_ICON[k]]);
const body = keys.join("|");
const SEQ = "(?:" + body + ")\\uFE0F?(?:\\u200D\\p{Extended_Pictographic}\\uFE0F?)*";
const RE_TEST = new RegExp(SEQ, "u");
const RE_ALL = () => new RegExp(SEQ, "gu");

export function Emo({ e }) {
  const first = Array.from(e.replace(/\uFE0F/g, ""))[0];
  const Ic = ICONS[EMOJI_ICON[first]];
  if (!Ic) return e;
  return _jsx(Ic, { size: "1.15em", strokeWidth: 1.75, "aria-hidden": true, style: { display: "inline-block", verticalAlign: "-0.2em", flexShrink: 0 } });
}

function splitString(s) {
  const re = RE_ALL(); const out = []; let last = 0, m, n = 0;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    out.push(_jsx(Emo, { e: m[0] }, "emo" + n++));
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

export function swapEmoji(c) {
  if (typeof c === "string") return RE_TEST.test(c) ? splitString(c) : c;
  if (Array.isArray(c)) {
    let changed = false;
    const next = c.map(x => { const y = swapEmoji(x); if (y !== x) changed = true; return y; });
    return changed ? next : c;
  }
  return c;
}
