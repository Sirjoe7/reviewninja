import { site } from "@/config/site";
/** Total = (pages / 100) x price per 100 pages, rounded to two decimals. */
export function calcPrice(pages: number): string {
  if (!(pages > 0)) return "0.00";
  return (Math.round((pages / 100) * site.pricePer100 * 100) / 100).toFixed(2);
}
