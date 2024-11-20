import React from "react";
import AppLayout from "@/components/layouts/AppLayout";
import PageSectionHeader from "@/components/app/page-section-header";


import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { toast } from "sonner";


const tailwindColors = resolveConfig(tailwindConfig).theme.colors;


const Main = () => {


  const brandColors = [
    { name: "CreditPro v2", hex: "#197041" },
    { name: "CreditPro V2 Accent", hex: "#fa9b0f" },
    { name: "CreditPro V1", hex: "#32be8f" },
  ];


  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Display toast on success
        toast.success(`Copied ${textToCopy} to clipboard!`);
      })
      .catch(() => {
        // Display error toast on failure
        toast.error("Failed to copy color!");
      });
  };


  return (
    <AppLayout>

      <div>
        <PageSectionHeader
          pageTitle="Complete UI"
          title="Colors"
          subTitle="Complete UI Colors are based on Tailwind CSS colors in HSL, RGB, and HEX formats."
          hasBorder={false}
        />

        <section className="mt-12 scroll-mt-20">

          <div className="grid scroll-mt-20 gap-8">

            <div>
              <div className="text-slate-700 font-semibold">
                Bank Brand Colors
              </div>
              <div className="text-sm text-slate-500">
                Utilities for controlling an Internal Systems components UI colors.
              </div>
            </div>

            <div className="rounded-lg shadow-sm ring-1 ring-slate-200 ring-border">

              <div className="flex items-center p-2 pb-0">
                <div className="flex-1 pl-1 text-sm font-medium">
                  <h2 className="capitalize text-slate-600 text-sm">Brands Colors</h2>
                </div>
              </div>

              <div className="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2">

                {brandColors.map((item) => (

                  <button
                    key={item.name}
                    onClick={() => handleCopy(item.hex)}
                    className={`group relative -z-0 flex rounded-md w-full cursor-pointer flex-1 flex-col gap-2 text-xs text-gray-600 sm:h-auto sm:w-auto `}>

                    <div
                      className="absolute right-4 top-3 bg-white [&>svg]:h-3.5 [&>svg]:w-3.5 opacity-0 transition-opacity p-1 rounded-md group-hover:opacity-100 &{} duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24" fill="none" stroke="currentColor"
                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           className="lucide lucide-clipboard group-hover:opacity-100">
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                        <path
                          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      </svg>
                    </div>
                    <div
                      className={`w-full flex-1 min-h-[130px] rounded-md`}
                      style={{ backgroundColor: item.hex as string }}></div>
                    <div className="flex w-full flex-col items-center justify-center gap-1">
                      {item.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>


          </div>

          <div className="grid scroll-mt-20 gap-8 mt-8">
            <div>
              <div className="text-slate-700 font-semibold">
                Tailwind CSS Colors
              </div>
              <div className="text-sm text-slate-500">
                Utilities for controlling an components UI colors.
              </div>
            </div>
            {Object.entries(tailwindColors).map(([colorName, shades]) => (
              typeof shades === "object" ? (
                <div key={colorName} className="rounded-lg shadow-sm ring-1 ring-slate-200 ring-border">
                  <div className="flex items-center p-2 pb-0">
                    <div className="flex-1 pl-1 text-sm font-medium">
                      <h2 className="capitalize text-slate-600 text-sm">{colorName}</h2>
                    </div>
                    {/*<div>Select Style</div>*/}
                  </div>

                  <div className="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2">
                    {Object.entries(shades).map(([shade, hex]) => (
                      <button
                        key={shade}
                        onClick={() => handleCopy(hex as string)}
                        className={`group cursor-pointer -z-0 relative flex rounded-md w-full flex-1 flex-col gap-2 text-xs text-gray-600 sm:h-auto sm:w-auto `}>

                        <div
                          className="absolute cursor-pointer  right-4 top-3 bg-white [&>svg]:h-3.5 [&>svg]:w-3.5 opacity-0 transition-opacity p-1 rounded-md group-hover:opacity-100 &{} duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                               viewBox="0 0 24 24" fill="none" stroke="currentColor"
                               stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                               className="lucide lucide-clipboard group-hover:opacity-100">
                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                            <path
                              d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          </svg>
                        </div>
                        <div
                          className={`w-full cursor-pointer flex-1 min-h-[130px] rounded-md`}
                          style={{ backgroundColor: hex as string }}></div>
                        <div className="flex w-full flex-col items-center justify-center gap-1">
                          {colorName}-{shade}
                        </div>
                      </button>))}
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </section>

      </div>

    </AppLayout>
  );
};

export default Main;