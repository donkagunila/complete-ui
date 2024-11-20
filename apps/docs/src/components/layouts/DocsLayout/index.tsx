import React from "react";
import Navbar from "@/components/navigations/navbar";
import Sidebar from "@/components/navigations/sidebar";


interface IAppLayoutProps {
  children: React.ReactNode;
}

const DocsLayout = (props: IAppLayoutProps) => {
  const { children } = props;
  return (
    <div className="bg-white dark:bg-slate-900">
     
      <Navbar />
      <div className="mx-auto pt-16 max-w-7xl px-4 lg:px-8 flex-1 overflow-hidden">
        <div
          className="fixed bottom-0 right-auto top-[4rem] z-10 hidden w-64 overflow-y-auto border-r pb-10 pt-[4.5rem] lg:block">
          <aside className="z-10 space-y-5">
            <Sidebar />
          </aside>
        </div>
        <div className="min-h-screen max-w-3xl flex-1 pr-1 pt-10 lg:ml-[22rem]">
          <main className="mb-12 h-full">
            {children}
          </main>


        </div>
      </div>

    </div>
  );
};

export default DocsLayout;