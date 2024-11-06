import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <DocsLayout>

            <PageSectionHeader
                pageTitle="Visualizations"
                title="Data Bars"
                subTitle="Data bars are bars displayed within cells, often in tables, that help users quickly compare values visually. The length of each bar is proportional to the value it represents within the dataset."/>

            <div>Bar Chart component here</div>

        </DocsLayout>
    );
};

export default Main;