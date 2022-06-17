import { FC, useCallback } from "react";
import { Icon } from "@iconify/react";
import CalendarDay from "./CalendarDay/CalendarDay";

import "./styles.css";

// eslint-disable-next-line react-hooks/exhaustive-deps

const todaysDate = new Date();

type IconType = "arrow-left" | "arrow-right";

interface CalendarWeekProps {
  weekDates: Date[];
  selectedDate?: Date;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onSelectedDateChange: (date: Date) => void;
}

const CalendarWeek: FC<CalendarWeekProps> = ({
  weekDates,
  selectedDate,
  onPreviousClick,
  onNextClick,
  onSelectedDateChange,
}) => {
  const onDaySelected = useCallback(
    (index: number) => {
      onSelectedDateChange(weekDates[index]);
    },
    [weekDates, onSelectedDateChange]
  );

  const renderDays = (date: Date, index: number) => {
    const isToday = date.toDateString() === todaysDate.toDateString();
    const isSelectedDay = date.toDateString() === selectedDate?.toDateString();
    return (
      <CalendarDay
        key={index + " "}
        isToday={isToday}
        index={index}
        isSelectedDay={isSelectedDay}
        date={date}
        onDaySelected={onDaySelected}
      />
    );
  };

  const renderControlIcon = (iconType: IconType) => {
    const controlIconAction: {
      [key in IconType]: () => void;
    } = {
      "arrow-left": onPreviousClick,
      "arrow-right": onNextClick,
    };

    return (
      <div onClick={controlIconAction[iconType]} className="calendar_week-icon">
        <Icon icon={`ep:${iconType}`} />
      </div>
    );
  };

  return (
    <div className="calendar_week center_item">
      {renderControlIcon("arrow-left")}
      {weekDates.map(renderDays)}
      {renderControlIcon("arrow-right")}
    </div>
  );
};

export default CalendarWeek;
