// The menu labels in src/data/navigation.ts are stored in capitals, as on
// the original site. The redesign shows them in sentence case
// ("SUSPENSION PARTS" -> "Suspension parts") without changing the data.
export function toSentenceCase(label: string) {
  const lower = label.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
