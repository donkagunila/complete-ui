import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Callout"
          subTitle="Short message to attract user’s attention." />


        <div className="border border-slate-200 py-12 px-5 rounded-md">
          {/*<div className="flex flex-col gap-3 justify-center items-center">*/}
          {/*    <Callout title="Test title" variant="primary">*/}
          {/*        System Update: Enhanced Salesforce and Dynamics 365 integration now delivers*/}
          {/*        key sales performance metrics directly to your dashboard for improved target*/}
          {/*        achievement.*/}
          {/*    </Callout>*/}

          {/*    <Callout title="Test title" variant="success">*/}
          {/*        System Update: Enhanced Salesforce and Dynamics 365 integration now delivers*/}
          {/*        key sales performance metrics directly to your dashboard for improved target*/}
          {/*        achievement.*/}
          {/*    </Callout>*/}

          {/*    <Callout title="Test title" variant="warning">*/}
          {/*        System Update: Enhanced Salesforce and Dynamics 365 integration now delivers*/}
          {/*        key sales performance metrics directly to your dashboard for improved target*/}
          {/*        achievement.*/}
          {/*    </Callout>*/}

          {/*    <Callout title="Test title" variant="neutral">*/}
          {/*        System Update: Enhanced Salesforce and Dynamics 365 integration now delivers*/}
          {/*        key sales performance metrics directly to your dashboard for improved target*/}
          {/*        achievement.*/}
          {/*    </Callout>*/}

          {/*    <Callout title="Test title" variant="error">*/}
          {/*        System Update: Enhanced Salesforce and Dynamics 365 integration now delivers*/}
          {/*        key sales performance metrics directly to your dashboard for improved target*/}
          {/*        achievement.*/}
          {/*    </Callout>*/}
          {/*</div>*/}
        </div>
      </div>

    </DocsLayout>
  );
};

export default Main;