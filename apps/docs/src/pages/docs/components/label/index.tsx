import React from 'react';
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import {Label} from "@complete-ui/core";


const Main = () => {
    return (
        <DocsLayout>
            <div>
                <PageSectionHeader
                    pageTitle="UI"
                    title="Label"
                    subTitle="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."/>
            </div>

            <div>
                <div className="border border-slate-200 py-12 px-5 rounded-md">
                    <div className="flex justify-center">
                        <Label>Label Component</Label>
                    </div>
                </div>
            </div>


        </DocsLayout>
    );
};

export default Main;