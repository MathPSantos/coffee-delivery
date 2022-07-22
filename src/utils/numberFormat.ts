export function formatNumberFormatPtBr(number: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(number);
}
