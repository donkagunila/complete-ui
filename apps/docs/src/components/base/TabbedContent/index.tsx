import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { icons } from "lucide-react";
import Lucide from "@/components/ui/Lucide";


interface ITabbedContentProps {
  tabs: {
    title: string,
    icon: keyof typeof icons,
    component: React.ReactNode
  }[];
}

const TabbedContent = (props: ITabbedContentProps) => {
  return (
    <TabGroup>
      <TabList className="flex">
        <div className="bg-slate-100 rounded-lg p-[1px] border border-slate-200 flex">

          {props.tabs.map((tab) => (
            <Tab
              key={tab.title}
              className="px-4 py-2 min-w-[100px] outline-none text-xs text-slate-600 group data-[selected]:bg-white data-[selected]:border rounded-md ">
              <div className="flex justify-center items-center gap-2 h-full">
                {tab.icon && (
                  <span>
                  <Lucide icon={tab.icon} className="h-4 w-4 text-slate-500 group-data-[selected]:text-primary" />
                </span>
                )}
                {tab.title}
              </div>
            </Tab>
          ))}
        </div>

      </TabList>
      <TabPanels className="my-2">
        {props.tabs.map((tab) => (
          <TabPanel key={tab.title}>
            {tab.component}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default TabbedContent;