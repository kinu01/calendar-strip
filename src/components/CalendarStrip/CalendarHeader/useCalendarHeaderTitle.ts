import { useState, useEffect } from "react";
import { getTitleFromCurrentWeek, getTitleFromSelectedDate } from "./utils";

const useCalendarHeaderTitle = (weekDates: Date[], selectedDate?: Date) => {
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    const titleFromCurrentWeek = getTitleFromCurrentWeek(weekDates);

    setHeaderTitle(titleFromCurrentWeek);

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
