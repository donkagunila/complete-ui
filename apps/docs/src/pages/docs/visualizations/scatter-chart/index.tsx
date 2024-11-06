import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Scatter Chart"
                subTitle="A scatter chart displays individual data points as dots across the x and y axes. It's useful for showing relationships or correlations between two variables."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;