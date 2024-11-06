import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";


const Main = () => {
    return (
        <DocsLayout>
            <div>
                <PageSectionHeader
                    pageTitle="UI"
                    title="Number"
                    subTitle="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."/>
            </div>


        </DocsLayout>
    );
};

export default Main;