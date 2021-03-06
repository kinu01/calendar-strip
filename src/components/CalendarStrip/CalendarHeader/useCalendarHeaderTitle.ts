import { useState, useEffect } from "react";
import { getTitleFromWeekDates, getTitleFromSelectedDate } from "./utils";

const useCalendarHeaderTitle = (weekDates: Date[], selectedDate?: Date) => {
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    const titleFromWeekDates = getTitleFromWeekDates(weekDates);

    setHeaderTitle(titleFromWeekDates);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekDates]);

  useEffect(() => {
    if (selectedDate) {
      const titleFromSelectedDate = getTitleFromSelectedDate(selectedDate);

      setHeaderTitle(titleFromSelectedDate);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  return { headerTitle };
};

export default useCalendarHeaderTitle;
