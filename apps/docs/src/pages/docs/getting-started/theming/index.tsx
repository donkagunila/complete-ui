import React from 'react';
import Navbar from "@/components/navigations/navbar";
import Link from "next/link";
import PageSectionHeader from "@/components/app/page-section-header";
import Sidebar from "@/components/navigations/sidebar";
import DocsLayout from "@/components/layouts/DocsLayout";

const Main = () => {
    return (
        <DocsLayout>
           <div>
               <PageSectionHeader
                   pageTitle="Getting Started"
                   title="Theming"
                   subTitle="Customizing the default light and dark theme." />
           </div>
        </DocsLayout>
    );
};

export default Main;