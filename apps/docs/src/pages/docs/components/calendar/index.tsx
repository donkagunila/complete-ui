import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import CodeCard from "@/components/base/CodeCard";
import TabbedContent from "@/components/base/TabbedContent";
import { icons } from "lucide-react";
import { Calendar } from "@complete-ui/core";
import Table from "@/components/base/Table";

interface ComponentProps {
  prop: string;
  type: string;
  default: string;
  description: string
}

const Main = () => {
  const calendarProps: ComponentProps[] = [
    {
      prop: "captionLayout",
      type: `"label"| "dropdown"| "dropdown-months"| "dropdown-years"`,
      default: "label",
      description: "Choose the layout of the month caption."
    },
    {
      prop: "fixedWeeks",
      type: `boolean`,
      default: "true",
      description: "Display 6 weeks per month."
    },
    {
      prop: "footer",
      type: `ReactNode | string`,
      default: "",
      description: "Add a footer to the calendar"
    },
    {
      prop: "hideWeekdayRow",
      type: `boolean`,
      default: "false",
      description: "Hide the row displaying the weekday names."
    },
    {
      prop: "numberOfMonths",
      type: `number`,
      default: "1",
      description: "The number of displayed months."
    },
    {
      prop: "showOutsideDays",
      type: `boolean`,
      default: "true",
      description: "Display the days falling into other months."
    },
    {
      prop: "showWeekNumber",
      type: `boolean`,
      default: "true",
      description: "Display the column with the week numbers."
    },
    {
      prop: "className",
      type: `string`,
      default: "",
      description: "Tailwind class name."
    },
    {
      prop: "classNames",
      type: `string[]`,
      default: "",
      description: "Tailwind class names."
    }
  ];
  const code1 = `
  import { Calendar } from "@complete-ui/core";
  
  export const CalendarExample = () => (
   <div className="border border-slate-200 py-12 px-5 rounded-md">
      <div className="flex gap-2 justify-center items-center">
        <Calendar/>
      </div>
   </div>
);
  `;


  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Calendar"
          subTitle="The Calendar component allows users to view and select dates in an intuitive and interactive way. It's ideal for date pickers, scheduling applications, or any scenario that requires date management." />
      </div>

      <div>
        <p className="pb-5">
          Basic usage of calendar component.
        </p>
      </div>

      <TabbedContent tabs={[
        {
          title: "Preview",
          icon: "Eye" as keyof typeof icons,
          component: (
            <div className="border border-slate-200 py-12 px-5 rounded-md">
              <div className="flex gap-2 justify-center items-center">
                <form><Calendar /></form>
              </div>
            </div>
          ),
        },
        {
          title: "Code",
          icon: "Code" as keyof typeof icons,
          component: (
            <div>
              <CodeCard language="tsx" code={code1} />
            </div>
          ),
        },
      ]} />

      <div>
        <p className="py-5">
          Calendar component can also be customized using the below props.
        </p>
      </div>
      <div>
        <Table
          columns={[
            { field: "prop", name: "Prop" },
            { field: "type", name: "Type" },
            { field: "default", name: "Default" },
            { field: "description", name: "Description" }
          ]}
          isFlat={true}
          rows={calendarProps}
        />
      </div>


    </DocsLayout>
  );
};

export default Main;