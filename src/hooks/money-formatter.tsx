export default function MoneyFormatter({ amount }: { amount: number }) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(amount);

  return <span>{formattedAmount}</span>;
}