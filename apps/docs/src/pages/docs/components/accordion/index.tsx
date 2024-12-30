import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import CodeCard from "@/components/base/CodeCard";
import TabbedContent from "@/components/base/TabbedContent";
import { icons } from "lucide-react";
// import { Acc } from "@complete-ui/core";

const Main = () => {
  const code =``
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Accordion"
          subTitle="A vertical stack of clickable headings that expand to show content." />
      </div>

      <div>
          <p className="pb-5">
            Basic usage of accordion component.
          </p>
        </div>

        <TabbedContent tabs={[
          {
            title: "Preview",
            icon: "Eye" as keyof typeof icons,
            component: (
              <div className="border border-slate-200 py-12 px-5 rounded-md">
                <div className="flex gap-2 justify-center items-center">
                 
                </div>
              </div>
            ),
          },
          {
            title: "Code",
            icon: "Code" as keyof typeof icons,
            component: (
              <div>
                <CodeCard language="tsx" code={code} />
              </div>
            ),
          },
        ]} />


    </DocsLayout>
  );
};

export default Main;