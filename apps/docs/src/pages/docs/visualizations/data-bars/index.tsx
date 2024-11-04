import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Bar Chart"
                subTitle="An area chart displays quantitative data graphically. It is based on the line chart but the area between x-axis and line is emphasized with color."/>

           <div>Bar Chart component here</div>
            
        </DocsLayout>
    );
};

export default Main;