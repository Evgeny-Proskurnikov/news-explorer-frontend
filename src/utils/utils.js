import { MONTHS } from "./constants";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = MONTHS.find((item, index) => index === month);
  const formatedDate = `${day} ${monthName}, ${year}`;
  return formatedDate;
}

export { formatDate };
