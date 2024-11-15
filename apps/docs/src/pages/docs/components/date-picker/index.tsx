import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";


const Main = () => {

  const [date, setDate] = React.useState<Date>();

  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Date Picker"
          subTitle="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." />
      </div>

      <div className="flex border border-slate-200 py-12 px-5 rounded-md justify-center">
        {/*<Popover>*/}
        {/*  <PopoverTrigger asChild>*/}
        {/*    <button*/}
        {/*      className={twMerge(*/}
        {/*        "w-[280px] justify-start text-left font-normal flex items-center border py-2 px-4 rounded-lg text-sm",*/}
        {/*        !date && "text-muted-foreground",*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      <CalendarIcon className="mr-2 h-4 w-4" />*/}
        {/*      {date ? format(date, "PPP") : <span>Pick a date</span>}*/}
        {/*    </button>*/}
        {/*  </PopoverTrigger>*/}
        {/*  <PopoverContent className="w-auto p-0">*/}
        {/*    <Calendar*/}
        {/*      mode="single"*/}
        {/*      selected={date}*/}
        {/*      onSelect={setDate}*/}
        {/*      initialFocus*/}
        {/*    />*/}
        {/*  </PopoverContent>*/}
        {/*</Popover>*/}
      </div>


    </DocsLayout>
  );
};

export default Main;