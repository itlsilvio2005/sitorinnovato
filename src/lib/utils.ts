export function formatDateIT(dateStr: string): string {
  const date = new Date(dateStr);
  const months = [
    'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getDate()} ${date.toLocaleString('it-IT', { month: 'short' })} ${date.getFullYear()}`;
}

export function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Adesso';
  if (diffMins < 60) return `${diffMins} min fa`;
  if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'ora' : 'ore'} fa`;
  if (diffDays === 1) return 'Ieri';
  if (diffDays < 7) return `${diffDays} giorni fa`;
  return formatDateShort(dateStr);
}

export function getInitials(nome: string): string {
  const parts = nome.replace(/ved\.|n\./g, '').trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
}

export function calcolaEta(dataNascita: string, dataDecesso: string): number {
  const nascita = new Date(dataNascita);
  const decesso = new Date(dataDecesso);
  let eta = decesso.getFullYear() - nascita.getFullYear();
  const monthDiff = decesso.getMonth() - nascita.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && decesso.getDate() < nascita.getDate())) {
    eta--;
  }
  return eta;
}

export function formatDateTimeCerimonia(data: string, ora: string): string {
  const date = new Date(data);
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const months = [
    'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'
  ];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} alle ore ${ora}`;
}
