import React from "react";
import AppLayout from "@/components/layouts/AppLayout";
import PageSectionHeader from "@/components/app/page-section-header";

import { icons } from "lucide-react";
import { useCopyToClipboard } from "react-use";
import { toast } from "sonner";


const BlocksPage = () => {
  
  const [state, copyToClipboard] = useCopyToClipboard();


  const copyIcon = (text: string) => {
    copyToClipboard(text);
    toast.success(`Icon ${text} copied to clipboard`);
  };

  return (
    <AppLayout>

      <div>
        <PageSectionHeader
          pageTitle="Complete UI"
          title="Icons"
          subTitle="Complete UI Icons, offer different Icons for many usecases, take your pick below"
          hasBorder={false}
        />

        <section className="mt-16 scroll-mt-20">

          <div className="grid scroll-mt-20 gap-8">
            <div>
              <div className="text-slate-700 font-semibold">
                Lucide Icons
              </div>
              <div className="text-sm text-slate-500">
                Lucide is an open-source icon library that provides 1000+ vector (svg) files for
                displaying icons and symbols in digital and non-digital projects.
              </div>
            </div>

            <div className="rounded-lg shadow-sm ring-1 ring-slate-200 ring-border">

              <div className="flex items-center p-2 pb-0">
                <div className="flex-1 pl-1 text-sm font-medium">
                  <h2 className="capitalize text-slate-600 text-sm">Lucide Icons</h2>
                </div>
              </div>

              <div className="flex flex-wrap justify-around gap-2 p-2 overflow-hidden">
                {Object.entries(icons).map(([iconName, IconComponent]) => (
                  <div key={iconName}
                       onClick={() => copyIcon(iconName)}
                       className="-z-0 flex flex-col items-center overflow-ellipsis h-[100px] w-[100px] text-[0.6rem] gap-3 justify-center p-2 overflow-hidden border rounded text-slate-600 hover:border-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                    <span
                      className="m-2 gap-3 flex overflow-hidden justify-center items-center flex-col overflow-ellipsis">
                    <IconComponent size={20} />
                    <span>{iconName}</span>
                      </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </div>

    </AppLayout>
  );
};

export default BlocksPage;