const adjustDateByNoOfDays = (date: Date, noOfDays: number) => {
  const adjustedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + noOfDays
  );
  return adjustedDate;
};

export const getPrevWeekDate = (date: Date) => {
  return adjustDateByNoOfDays(date, -7);
};

export const getNextWeekDate = (date: Date) => {
  return adjustDateByNoOfDays(date, 7);
};

export const getDateWeeks = (startDate: Date, noOfDaysToDisplay: number) => {
  const updateDate = new Date(startDate);
  const result = [startDate];

  const numberOfArrays = noOfDaysToDisplay - 1;

  if (numberOfArrays > 0) {
    return result.concat(
      String(Array(numberOfArrays))
        .split(",")
        .map(() => {
          return new Date(updateDate.setDate(updateDate.getDate() + 1));
        })
    );
  }
  return result;
};
