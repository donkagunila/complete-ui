import React from 'react';
import AppLayout from "@/components/layouts/AppLayout";
import PageSectionHeader from "@/components/app/page-section-header";

const Main = () => {
    return (
        <AppLayout>

            <div>
                <PageSectionHeader
                    pageTitle="Complete UI"
                    title="Charts"
                    hasBorder={false}
                    subTitle=" Complete UI Charts are based on real-world situations. Find inspiration for your next project or incorporate in an existing one."/>


                <section className="relative -mr-[3px] mt-28 flex flex-auto flex-wrap pl-px pt-px">


                    <div
                        className="group relative -ml-px -mt-px flex w-full flex-none items-center justify-center px-8 pb-12 pt-6 lg:w-1/2 delay-150 hover:bg-gray-50/50 hover:delay-0 hover:duration-300 dark:bg-gray-950 dark:hover:bg-gray-900/20 border border-gray-200 dark:border-gray-800">

                        <div className="relative flex w-full flex-col items-center">
                            test me here
                        </div>
                    </div>

                </section>

            </div>

        </AppLayout>
    );
};

export default Main;