import React, {useState} from 'react';
import Navbar from "@/components/navigations/navbar";
import Footer from "@/components/navigations/footer";

import {Toaster} from 'sonner'


interface IAppLayoutProps {
    children: React.ReactNode
}

const AppLayout = (props: IAppLayoutProps) => {
    const {children} = props;
    const [test, setTest] = useState(false);
    return (
        <div>
            <Toaster/>
            <Navbar/>
            <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-12">
                <section className="pt-16">
                    {children}
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default AppLayout;