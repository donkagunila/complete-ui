import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import {Badge} from "@complete-ui/core";

const Main = () => {
    return (
        <DocsLayout>
            <div>
                <PageSectionHeader
                    pageTitle="UI"
                    title="Badge"
                    subTitle="A small count or label component that provides additional context or emphasizes an item."/>


                <div className="border border-slate-200 py-12 px-5 rounded-md">
                    <div className="flex gap-2 justify-center items-center">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="error">Error</Badge>
                        <Badge variant="warning">Warning</Badge>
                    </div>
                </div>
            </div>

        </DocsLayout>
    );
};

export default Main;