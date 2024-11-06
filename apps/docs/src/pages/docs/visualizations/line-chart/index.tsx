import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Line Chart"
                subTitle="A line chart shows data points connected by a line, representing changes over time or continuous data. It's useful for tracking trends and identifying relationships between variables."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;