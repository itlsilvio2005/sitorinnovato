# Onoranze Funebri Pecorari — Sito Web DEMO

Sito web moderno per l'agenzia funebre Pecorari di Modena e Nonantola, realizzato con React + Vite + TypeScript + Tailwind CSS v4.

**Questo è un sito DEMO statico** — nessun backend reale, tutti i dati sono mock.

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
├── index.css                  # Stili globali (Tailwind v4 + scala tortora)
├── components/
│   ├── Header.tsx             # Header con navigazione
│   ├── Footer.tsx             # Footer con sedi e contatti
│   ├── FloatingButtons.tsx    # WhatsApp + Chatbot + barra chiama mobile
│   ├── Chatbot.tsx            # Chatbot demo "Assistente Pecorari"
│   ├── Modal.tsx              # Modale riutilizzabile
│   ├── NecrologioCard.tsx     # Card necrologio con modali fiori/pensieri
│   └── FiltriNecrologi.tsx    # Filtri ricerca necrologi
├── pages/
│   ├── Home.tsx               # Pagina principale con hero
│   ├── ServizioPage.tsx       # Pagine servizi (dinamica)
│   ├── DecessoPage.tsx        # Pagine decesso (dinamica)
│   ├── NecrologiPage.tsx      # Elenco necrologi con filtri
│   ├── NecrologioDetailPage.tsx # Dettaglio singolo necrologio
│   └── ContattiPage.tsx       # Contatti con form
├── data/
│   ├── necrologi.json         # 8 necrologi fittizi (settembre-ottobre 2026)
│   └── bot-faq.ts             # FAQ per il chatbot
└── lib/
    ├── necrologi.ts           # Data layer astratto (pronto per API/Supabase)
    └── utils.ts               # Utility (date IT, formattazione)
```

## 🎨 Palette colori (Tortora)

| Token | Valore | Utilizzo |
|-------|--------|----------|
| `tortora-50` | `#F5F3F0` | Sfondi chiari |
| `tortora-100` | `#EBE7E1` | Sfondi sezioni alternate |
| `tortora-200` | `#D6CFC5` | Bordi |
| `tortora-700` | `#766B5E` | Header, bottoni CTA, accenti |
| `tortora-800` | `#5A5147` | Footer, bottoni scuri |
| `tortora-900` | `#3E3730` | Hover stati scuri |
| `text-primary` | `#2B2622` | Testo principale (quasi nero caldo) |
| `text-secondary` | `#4A433D` | Testo secondario |
| `text-muted` | `#6B635B` | Testo disattivato |

**Font:**
- Titoli: Antic Didone (serif)
- Testo: Roboto (sans-serif)
- Servizi: Mate SC (small caps)

## 📱 Funzionalità

- ✅ Mobile-first, responsive
- ✅ Accessibile (contrasti AA, focus visibili, aria-labels)
- ✅ SEO base (title, meta, Open Graph, dati strutturati LocalBusiness)
- ✅ WhatsApp flottante + barra chiama sticky mobile
- ✅ Chatbot demo "Assistente Pecorari" con FAQ
- ✅ Sezione Necrologi completa con filtri e dettaglio
- ✅ Modali per "Invia fiori" e "Lascia un pensiero" (demo)
- ✅ Form contatti con validazione
- ✅ Animazioni lievi (fade/slide)
- ✅ Container centrato max 1200px
- ✅ Hero con gradiente tortora

## 🤖 Chatbot Demo

Il chatbot è in `/src/components/Chatbot.tsx` e usa le FAQ in `/src/data/bot-faq.ts`.

Per sostituire con un vero LLM:
```typescript
// In bot-faq.ts, sostituisci getBotResponse con:
export async function getBotResponse(message: string): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message })
  });
  const data = await response.json();
  return data.answer;
}
```

## 📋 Sostituire i dati fittizi

Il data layer è astratto in `src/lib/necrologi.ts`. Per collegare un database reale:

1. Modifica le funzioni in `src/lib/necrologi.ts`
2. Mantieni la stessa interfaccia `Necrologio`

## 📞 Contatti originali

- **Modena:** Via Nonantolana, 555 — 41122 — Tel. 059 260667
- **Nonantola:** Piazza Liberazione, 34 — 41015 — Tel. 059 549279
- **Cellulare/WhatsApp:** 338 7277095
- **Email:** pecorarisrl@yahoo.it
- **P.IVA:** 02755090368
