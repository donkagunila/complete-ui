import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Combo Chart"
                subTitle="A combo chart combines two or more chart types, such as a line and bar chart, in a single visualization. This chart type is ideal for comparing multiple data sets with different value ranges."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;