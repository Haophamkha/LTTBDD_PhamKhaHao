import type { Tour } from "../components/TourItem";

export type TourSection = { title: string; data: Tour[] };

export function groupByCity(tours: Tour[]): TourSection[] {
  const map: Record<string, Tour[]> = {};

  tours.forEach((t) => {
    if (!map[t.city]) map[t.city] = [];
    map[t.city].push(t);
  });

  return Object.keys(map)
    .sort((a, b) => a.localeCompare(b, "vi"))
    .map((city) => ({
      title: city,
      data: map[city].sort((a, b) => a.departure.localeCompare(b.departure)),
    }));
}
