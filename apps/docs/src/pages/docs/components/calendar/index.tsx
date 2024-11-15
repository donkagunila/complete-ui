import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";


const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Calendar"
          subTitle="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." />
      </div>

      <div className="flex border border-slate-200 py-12 px-5 rounded-md justify-center">
        {/*<Calendar*/}
        {/*  mode="single"*/}
        {/*  initialFocus*/}
        {/*  className="border rounded-md" />*/}
      </div>


    </DocsLayout>
  );
};

export default Main;