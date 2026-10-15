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

export function formatDate(date: string): string {
  const [y, m, d] = date.split("-");
  return `${d}/${m}/${y}`;
}

export function getSeatLabel(seats: number): string {
  if (seats === 0) return "Hết chỗ";
  if (seats <= 3) return `Chỉ còn ${seats} chỗ`;
  return `Còn ${seats} chỗ`;
}

export function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
}
