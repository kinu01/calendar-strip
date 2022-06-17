import { FC, memo } from "react";
import clsx from "clsx";
import dayjs from "dayjs";

import "./styles.css";

export interface CalendarDayProps {
  isToday?: boolean;
  isSelectedDay?: boolean;
  date: Date;
  index: number;
  onDaySelected: (index: number) => void;
}

const CalendarDay: FC<CalendarDayProps> = ({
  isToday,
  isSelectedDay,
  date,
  onDaySelected,
  index,
}) => {
  const dayjsDate = dayjs(date, "YYYY-MM-DD HH:mm:ss");

  const containerClassName = clsx("calendar_day center_item", {
    selected_day_container: isSelectedDay,
  });
  const baseClassName = {
    current_day: isToday,
    selected_day: isSelectedDay,
  };
  const titleClassName = clsx("calendar_day-title", baseClassName);
  const subtitleClassName = clsx("calendar_day-subtitle", baseClassName);
  return (
    <div onClick={() => onDaySelected(index)} className={containerClassName}>
      <span className={titleClassName}>{dayjsDate.format("ddd")}</span>
      <span className={subtitleClassName}>{dayjsDate.format("DD")}</span>
    </div>
  );
};

export default memo(CalendarDay);
