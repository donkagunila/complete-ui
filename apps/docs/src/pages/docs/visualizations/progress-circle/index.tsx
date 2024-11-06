import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Progress Circle"
                subTitle="A progress circle displays completion as a percentage in a circular form. It’s useful for tracking progress towards goals or illustrating task completion."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;