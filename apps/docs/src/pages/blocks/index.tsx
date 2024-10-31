import React from 'react';
import AppLayout from "@/components/layouts/AppLayout";
import PageSectionHeader from "@/components/app/page-section-header";
import Link from "next/link";

const Main = () => {
    return (
        <AppLayout>
            <div>
                <PageSectionHeader
                    pageTitle="Complete UI"
                    title="Blocks"
                    subTitle="Complete UI Blocks are based on real-world situations. Find inspiration for your next dashboard by using our carefully crafted blocks."
                    hasBorder={false}
                />

                <section className="mt-16">
                    <ul className="relative mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 5, 6].map((item: number) => (
                            <li key={item}>
                                <Link href="/blocks/badges">
                                    <div className="group relative rounded-lg">
                                        <div
                                            className="overflow-hidden rounded-lg border border-gray-200/70 bg-gray-50/50 ring-gray-100 transition-all group-hover:border-gray-300/80 group-hover:ring-4">
                                            <div
                                                className="relative aspect-[2/1] overflow-hidden rounded-md transition-all">

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </AppLayout>
    );
};

export default Main;