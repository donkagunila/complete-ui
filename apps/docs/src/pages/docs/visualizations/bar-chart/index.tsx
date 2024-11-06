import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Bar Chart"
                subTitle="A bar chart displays data using rectangular bars to represent values. The length or height of each bar is proportional to the value it represents, making it easy to compare quantities across different categories."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;