import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import { Badge } from "@complete-ui/core";
import TabbedContent from "@/components/base/TabbedContent";
import { icons } from "lucide-react";
import CodeCard from "@/components/base/CodeCard";

const Main = () => {


  const code = `
import { Badge } from "@complete-ui/core";

export const BadgeExample = () => (
   <div className="border border-slate-200 py-12 px-5 rounded-md">
      <div className="flex gap-2 justify-center items-center">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
      </div>
   </div>
);`;
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Badge"
          subTitle="A small count or label component that provides additional context or emphasizes an item." />


        <TabbedContent tabs={
          [
            {
              title: "Preview",
              icon: "Eye" as keyof typeof icons,
              component: (
                <div className="border border-slate-200 py-12 px-5 rounded-md">
                  <div className="flex gap-2 justify-center items-center">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="warning">Warning</Badge>
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

      </div>

    </DocsLayout>
  );
};

export default Main;