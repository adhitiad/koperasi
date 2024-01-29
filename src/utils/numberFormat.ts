const dotThree = (number: { toString: () => string }) =>
  number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    .toLowerCase();

const numberFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

export { dotThree, numberFormatter };
