import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import { Card, Checkbox } from "@complete-ui/core";


const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Checkbox"
          subTitle="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." />
      </div>

      <Card className="flex justify-center items-center">
        <Checkbox />
      </Card>


    </DocsLayout>
  );
};

export default Main;