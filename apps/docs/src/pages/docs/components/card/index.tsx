import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Card"
          subTitle="A fundamental building block for KPI cards, forms, or sections." />


        <div className="border border-slate-200 py-12 px-5 rounded-md">
          <div className="flex flex-col gap-3 justify-center items-center">
            {/*<Card>*/}
            {/*  System Update: Enhanced Salesforce and Dynamics 365 integration now delivers*/}
            {/*  key sales performance metrics directly to your dashboard for improved target*/}
            {/*  achievement.*/}
            {/*</Card>*/}


          </div>
        </div>
      </div>

    </DocsLayout>
  );
};

export default Main;