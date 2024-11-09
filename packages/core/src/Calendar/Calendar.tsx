import React from "react";
import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";


export type CalendarProps = React.ComponentProps<typeof DayPicker>


const Calendar = (
  {
    className,
    classNames,
    showOutsideDays = true,
    ...props
  }: CalendarProps,
) => {


  const defaultBtnStyle: string[] = ["h-7 w-7 border absolute z-[40] top-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"];

  return (

    <DayPicker
      showOutsideDays={showOutsideDays}
      className={twMerge(["p-4", className])}
      classNames={{
        root: "relative bg-white overflow-hidden rounded-md",
        months: "flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0",
        month: "p-0 -left-[10px] relative",
        month_caption: "flex justify-center pt-1 relative items-center mb-3",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        month_grid: "w-full border-collapse space-y-1 mt-2",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.7rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 flex justify-center items-center cursor-pointer rounded-md hover:bg-accent/10 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day_button: "h-full w-full flex justify-center items-center",
        button_previous: twMerge([defaultBtnStyle, "left-2"]),
        button_next: twMerge([defaultBtnStyle, "right-2"]),
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}

      {...props}
    />);
};

export default Calendar;