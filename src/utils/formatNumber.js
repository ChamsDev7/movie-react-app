// Configuration
const COUNT_FORMATS = [
  {
    // 0 - 999
    letter: "",
    limit: 1e3,
  },
  {
    // 1,000 - 999,999
    letter: "K",
    limit: 1e6,
  },
  {
    // 1,000,000 - 999,999,999
    letter: "M",
    limit: 1e9,
  },
  {
    // 1,000,000,000 - 999,999,999,999
    letter: "B",
    limit: 1e12,
  },
];

// Format Method:
export default function formatNumber(value) {
  const format = COUNT_FORMATS.find((item) => value < item.limit);

  value = (1000 * value) / format.limit;
  value = Math.round(value * 10) / 10; // keep one decimal number, only if needed

  return value + format.letter;
}
