import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Bar List"
                subTitle="A bar list is a vertical list of bars representing values. Each bar represents a different category, making it easy to compare data points side by side."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;