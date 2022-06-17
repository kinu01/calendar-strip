import { FC, useState, useCallback } from "react";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import useWeekDates from "./useWeekDates";

import "./styles.css";

export interface CalendarStripProps {
  startDate?: Date;
  defaultSelectedDate?: Date;
  noOfDaysToDisplay?: number;
}

const CalendarStrip: FC<CalendarStripProps> = ({
  startDate,
  defaultSelectedDate,
  noOfDaysToDisplay,
}) => {
  const { weekDates, onNextWeek, onPreviousWeek } = useWeekDates(
    noOfDaysToDisplay,
    startDate
  );

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    defaultSelectedDate
  );

  const onSelectedDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  return (
    <div className="calendar_strip center_item">
      <CalendarHeader selectedDate={selectedDate} weekDates={weekDates} />
      <CalendarWeek
        weekDates={weekDates}
        selectedDate={selectedDate}
        onNextClick={onNextWeek}
        onPreviousClick={onPreviousWeek}
        onSelectedDateChange={onSelectedDateChange}
      />
    </div>
  );
};

export default CalendarStrip;
