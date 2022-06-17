import dayjs from "dayjs";

const dayjs_Format = "YYYY-MM-DD HH:mm:ss";

export const getTitleFromSelectedDate = (selectedDate: Date) => {
  const dayjsDate = dayjs(selectedDate, dayjs_Format);
  const month = dayjsDate.format("MMMM");
  const year = dayjsDate.format("YYYY");

  return `${month} ${year}`;
};

export const getTitleFromCurrentWeek = (weekDates: Date[]) => {
  const months: Set<string> = new Set();
  const years: Set<string> = new Set();

  for (const value of weekDates) {
    const dayjsDate = dayjs(value, dayjs_Format);
    months.add(dayjsDate.format("MMMM"));
    years.add(dayjsDate.format("YYYY"));
  }

  if (years.size > 1 && months.size > 1) {
    return `${Array.from(months)[0]} ${Array.from(years)[0]}/${
      Array.from(months)[1]
    } ${Array.from(years)[1]}`;
  }

  return `${Array.from(months).join("/")} ${Array.from(years).join("/")}`;
};
