import React from 'react';
import Navbar from "@/components/navigations/navbar";
import Link from "next/link";
import PageSectionHeader from "@/components/app/page-section-header";
import Sidebar from "@/components/navigations/sidebar";
import DocsLayout from "@/components/layouts/DocsLayout";

const InstallationPage = () => {
    return (
        <DocsLayout>
           <div>
               <PageSectionHeader
               pageTitle="Getting Started"
               title="Installation"
               subTitle="Everything you need to set up Complete UI." />
           </div>
        </DocsLayout>
    );
};

export default InstallationPage;