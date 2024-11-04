import React, {useState} from 'react';
import AppLayout from "@/components/layouts/AppLayout";
import PageSectionHeader from "@/components/app/page-section-header";

import {icons} from 'lucide-react';
import {Button, Dialog} from "@complete-ui/core";


const BlocksPage = () => {

    const icon = icons;


    console.log(Object.entries(icon));
    const [isOpen, setIsOpen] = useState(false);

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

                    <Button appName="testme">Test app</Button>

                    <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Open Dialog
                    </button>


                    <Dialog
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        title="Dialog Title"
                        description="This is the description for the dialog.">
                        <p>my details here</p>
                    </Dialog>

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

                            <div className="grid grid-cols-12 gap-2 p-2 overflow-hidden">
                                {Object.entries(icons).map(([iconName, IconComponent]) => (
                                    <div key={iconName}
                                         className="-z-0 flex flex-col items-center h-[70px] w-[70px]  justify-center p-2 border rounded text-slate-600 hover:border-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                                        <IconComponent size={20}/>
                                        {/*<span className="text-xs mt-2 text-slate-500">{iconName}</span>*/}
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