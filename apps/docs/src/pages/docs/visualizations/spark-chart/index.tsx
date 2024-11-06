import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Spark Chart"
                subTitle="A spark chart is a small, simple line or bar chart designed to provide a quick view of data trends. Often embedded within tables or dashboards, it adds context without taking up much space."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;