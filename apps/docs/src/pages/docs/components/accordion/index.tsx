import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Accordion"
          subTitle="A vertical stack of clickable headings that expand to show content." />
      </div>

      <div className="presentation-box">
        <div>

        </div>
      </div>

    </DocsLayout>
  );
};

export default Main;