import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Funnel Chart"
                subTitle="A funnel chart represents stages in a process, with each stage depicted as a section of a funnel. It's commonly used to visualize sales processes or other sequential data where quantities decrease with each step."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;