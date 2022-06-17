import { FC } from "react";

import "./styles.css";
import useCalendarHeaderTitle from "./useCalendarHeaderTitle";

interface CalendarHeaderProps {
  weekDates: Date[];
  selectedDate?: Date;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  weekDates,
  selectedDate,
}) => {
  const { headerTitle } = useCalendarHeaderTitle(weekDates, selectedDate);
  return (
    <div className="calendar_header">
      <span className="calendar_header-title">{headerTitle}</span>
    </div>
  );
};

export default CalendarHeader;
