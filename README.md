# Onoranze Funebri Pecorari — Sito Web

Sito web moderno per l'agenzia funebre Pecorari di Modena e Nonantola, realizzato con React + Vite + TypeScript + Tailwind CSS.

## 🚀 Avvio rapido

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

## 📦 Build per produzione

```bash
npm run build
```

I file generati saranno nella cartella `dist/`.

## 🗂️ Struttura del progetto

```
src/
├── App.tsx                    # Router principale
├── main.tsx                   # Entry point
├── index.css                  # Stili globali (Tailwind v4)
├── components/
│   ├── Header.tsx             # Header con navigazione
│   ├── Footer.tsx             # Footer con sedi e contatti
│   ├── FloatingButtons.tsx    # WhatsApp flottante + barra chiama mobile
│   ├── NecrologioCard.tsx     # Card necrologio riutilizzabile
│   └── FiltriNecrologi.tsx    # Filtri ricerca necrologi
├── pages/
│   ├── Home.tsx               # Pagina principale
│   ├── ServizioPage.tsx       # Pagine servizi (dinamica)
│   ├── DecessoPage.tsx        # Pagine decesso (dinamica)
│   ├── NecrologiPage.tsx      # Elenco necrologi con filtri
│   ├── NecrologioDetailPage.tsx # Dettaglio singolo necrologio
│   └── ContattiPage.tsx       # Contatti con form e mappe
├── data/
│   └── necrologi.json         # Dati necrologi (fittizi)
└── lib/
    ├── necrologi.ts           # Data layer astratto
    └── utils.ts               # Utility (date, formattazione)
```

## 🎨 Palette colori

I colori sono definiti come variabili CSS in `src/index.css`:

| Token | Valore | Utilizzo |
|-------|--------|----------|
| `--color-primary` | `#1b2a4a` | Blu scuro navy, testi principali, CTA |
| `--color-accent` | `#b8860b` | Oro/ambra, accenti decorativi |
| `--color-surface` | `#f8f7f5` | Sfondo sezioni alternate |
| `--color-text` | `#1a1a1a` | Testo principale |
| `--color-text-muted` | `#4a4a4a` | Testo secondario |

**Font:**
- Titoli: Playfair Display (serif)
- Testo: Inter (sans-serif)

## 📋 Sostituire i dati fittizi

Il data layer è astratto in `src/lib/necrologi.ts`. Per collegare un database reale (es. Supabase):

1. Modifica le funzioni in `src/lib/necrologi.ts`:
   - `getNecrologi()` → query al database
   - `getNecrologio(slug)` → query singola entry
   - `getComuni()` → query distinct comuni

2. Mantieni la stessa interfaccia `Necrologio` per non toccare l'UI.

### Esempio con Supabase:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('URL', 'KEY');

export async function getNecrologi(): Promise<Necrologio[]> {
  const { data } = await supabase
    .from('necrologi')
    .select('*')
    .order('dataPubblicazione', { ascending: false });
  return data || [];
}
```

## 📱 Funzionalità

- ✅ Mobile-first, responsive
- ✅ Accessibile (contrasti AA, focus visibili, aria-labels)
- ✅ SEO base (title, meta, Open Graph, dati strutturati LocalBusiness)
- ✅ WhatsApp flottante + barra chiama sticky mobile
- ✅ Sezione Necrologi completa con filtri e dettaglio
- ✅ Form contatti con validazione
- ✅ Animazioni lievi (fade/slide)
- ✅ Navigazione con dropdown per servizi e decesso

## 📞 Contatti originali

- **Modena:** Via Nonantolana, 555 — 41122 — Tel. 059 260667
- **Nonantola:** Piazza Liberazione, 34 — 41015 — Tel. 059 549279
- **Cellulare/WhatsApp:** 338 7277095
- **Email:** onoranzefunebripecorari@gmail.com
- **P.IVA:** 02755090368
