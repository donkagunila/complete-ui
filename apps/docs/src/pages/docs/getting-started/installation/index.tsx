import React, { useEffect } from "react";
import PageSectionHeader from "@/components/app/page-section-header";
import DocsLayout from "@/components/layouts/DocsLayout";
import Prism from "prismjs";
import CodeCard from "../../../../components/base/CodeCard";


const InstallationPage = () => {


  useEffect(() => {
    if (Prism) {
      Prism.highlightAll();
    }
  }, []);


  const code = `
    onSubmit(e) {
     e.preventDefault();
     const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
     }`;


  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="Getting Started"
          title="Installation"
          subTitle="Everything you need to set up Complete UI." />

        <div>
          <p>
            Complete UI is designed for React and requires React v18.2.0+.
          </p>
        </div>

        <div>
          <CodeCard language="sh" code="npm install @complete-ui/core" />
        </div>


      </div>
    </DocsLayout>
  );
};

export default InstallationPage;