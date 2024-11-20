import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import { Button } from "@complete-ui/core";

const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Button"
          subTitle="Trigger an action or event, such as submitting a form or displaying a dialog." />


        <div className="border border-slate-200 py-12 px-5 rounded-md">
          <div className="flex gap-2 justify-center items-center">
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="info">Info</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
      </div>

    </DocsLayout>
  );
};

export default Main;