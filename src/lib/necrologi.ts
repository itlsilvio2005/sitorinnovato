import necrologiData from '../data/necrologi.json';

export interface Pensiero {
  autore: string;
  testo: string;
  data: string;
  visibileFamiglia: boolean;
}

export interface Cerimonia {
  data: string;
  ora: string;
  luogo: string;
  indirizzo: string;
}

export interface CameraArdente {
  luogo: string;
  indirizzo: string;
  orariOggi: string;
  orariDomani: string;
}

export interface Necrologio {
  id: string;
  nome: string;
  eta: number;
  dataNascita: string;
  dataDecesso: string;
  comune: string;
  rito: string;
  foto: string | null;
  annuncio: string;
  cerimonia: Cerimonia;
  cameraArdente: CameraArdente;
  sepoltura?: string | null;
  cremazione?: string | null;
  dataPubblicazione: string;
  pensieri: Pensiero[];
  slug: string;
}

// Data layer abstraction - replace with API/Supabase calls
export async function getNecrologi(): Promise<Necrologio[]> {
  // Simulate async data fetching
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(necrologiData as Necrologio[]);
    }, 100);
  });
}

export async function getNecrologio(slug: string): Promise<Necrologio | undefined> {
  const all = await getNecrologi();
  return all.find((n) => n.slug === slug);
}

export async function getNecrologiByComune(comune: string): Promise<Necrologio[]> {
  const all = await getNecrologi();
  return all.filter((n) => n.comune === comune);
}

export async function getComuni(): Promise<string[]> {
  const all = await getNecrologi();
  const comuni = [...new Set(all.map((n) => n.comune))];
  return comuni.sort();
}
