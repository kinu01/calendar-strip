import { useEffect, useState, useCallback } from "react";
import { getNextWeekDate, getPrevWeekDate, getDateWeeks } from "./utils";

const today = new Date();
const defaultStartDate = new Date(
  today.setDate(today.getDate() - today.getDay())
);

const useWeekDates = (
  noOfDaysToDisplay: number = 7,
  startDate: Date = defaultStartDate
) => {
  const [currentDate, setCurrentDate] = useState(startDate);
  const [weekDates, setCurrentWeek] = useState<Date[]>([]);

  useEffect(() => {
    setCurrentWeek(getDateWeeks(currentDate, noOfDaysToDisplay));
  }, [currentDate, noOfDaysToDisplay]);

  const onNextWeek = useCallback(() => {
    setCurrentDate((prevCurrentDate) => {
      return getNextWeekDate(prevCurrentDate);
    });
  }, []);

  const onPreviousWeek = useCallback(() => {
    setCurrentDate((prevCurrentDate) => {
      return getPrevWeekDate(prevCurrentDate);
    });
  }, []);

  return { weekDates, onPreviousWeek, onNextWeek };
};

export default useWeekDates;
