import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Tracker"
                subTitle="A tracker chart monitors specific metrics or key performance indicators (KPIs) over time. It’s commonly used for tracking progress towards a target or goal."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;