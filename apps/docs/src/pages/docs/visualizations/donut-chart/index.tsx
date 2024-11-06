import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Donut Chart"
                subTitle="donut chart is similar to a pie chart but with a hole in the middle. It shows proportional data in a circular form, where each segment represents a percentage of the whole."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;