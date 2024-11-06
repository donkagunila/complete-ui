import React, {useRef} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {twMerge} from "tailwind-merge";

type MenuItem = {
    name: string;
    path: string;
}
type MenuGroup = {
    title: string,
    menuItems: MenuItem[]
}

const Sidebar = () => {

    const {asPath} = useRouter();
    const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
    const setMenuRef = (index: number, el: HTMLDivElement | null) => {
        menuRefs.current[index] = el;
    };

    const handleClick = (index: number) => {
        const menuRef = menuRefs.current[index];
        if (menuRef) {
            menuRef.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    };

    const menuGroups: MenuGroup[] = [
        {
            title: "Getting Started",
            menuItems: [
                {name: "Installation", path: "/docs/getting-started/installation"},
                {name: "Theming", path: "/docs/getting-started/theming"}
            ]
        },
        {
            title: "Virtualization",
            menuItems: [
                {name: "Area Chart", path: "/docs/visualizations/area-chart"},
                {name: "Bar Chart", path: "/docs/visualizations/bar-chart"},
                {name: "Donut Chart", path: "/docs/visualizations/donut-chart"},
                {name: "Combo Chart", path: "/docs/visualizations/combo-chart"},
                {name: "Line Chart", path: "/docs/visualizations/line-chart"},
                {name: "Scatter Chart", path: "/docs/visualizations/scatter-chart"},
                {name: "Funnel Chart", path: "/docs/visualizations/funnel-chart"},
                {name: "Bar List", path: "/docs/visualizations/bar-list"},
                {name: "Data Bars", path: "/docs/visualizations/data-bars"},
                {name: "Progress Circle", path: "/docs/visualizations/progress-circle"},
                {name: "Spark Chart", path: "/docs/visualizations/spark-chart"},
                {name: "Tracker", path: "/docs/visualizations/tracker"},
            ]
        },
        {
            title: "UI",
            menuItems: [
                {name: "Accordion", path: "/docs/components/accordion"},
                {name: "Badges", path: "/docs/components/badge"},
                {name: "Buttons", path: "/docs/components/button"},
                {name: "Calendar", path: "/docs/components/calendar"},
                {name: "Checkbox", path: "/docs/components/checkbox"},
                {name: "Callout", path: "/docs/components/callout"},
                {name: "Card", path: "/docs/components/card"},
                {name: "Date Picker", path: "/docs/components/date-picker"},
                {name: "Date Range Picker", path: "/docs/components/date-range-picker"},
                {name: "Dialog", path: "/docs/components/dialog"},
                {name: "Dropdown Menu", path: "/docs/components/dropdown"},
                {name: "Divider", path: "/docs/components/divider"},
                {name: "Input", path: "/docs/components/input"},
                {name: "Label", path: "/docs/components/label"},
                {name: "Icons", path: "/docs/components/icons"},
                {name: "Radio Group", path: "/docs/components/radio-group"},
                {name: "Radio Card Group", path: "/docs/components/radio-card-group"},
                {name: "Legend", path: "/docs/components/legend"},
                {name: "List", path: "/docs/components/list"},
                {name: "Number Input", path: "/docs/components/number"},
                {name: "Select", path: "/docs/components/select"},
                {name: "Switch", path: "/docs/components/switch"},
                {name: "Slider", path: "/docs/components/slider"},
                {name: "Tabs", path: "/docs/components/tab"},
                {name: "Toast", path: "/docs/components/toast"},
                {name: "Textarea", path: "/docs/components/textarea"},
            ]
        },
    ];


    return (
        <div>
            {menuGroups.map((menuGroup: MenuGroup, index: number) => (
                <div
                    key={menuGroup.title}
                    className="mb-4"
                    ref={(el) => setMenuRef(index, el)}
                >
                    <h4 className="w-full cursor-default">
                        <div className="flex justify-between">
                            <p className="mb-4 text-lg font-semibold tracking-wide text-slate-800 md:text-sm capitalize">
                                {menuGroup.title}
                            </p>
                        </div>
                    </h4>
                    <ul>
                        {menuGroup.menuItems.map((menu: MenuItem) => (
                            <li key={menu.path} className="items-center">
                                <Link href={menu.path} onClick={() => handleClick(index)}>
                                    <span className={twMerge([
                                        "relative ml-1 block border-l-2 py-1.5 pl-4 font-normal transition-all md:text-sm",
                                        asPath == menu.path && "border-current text-blue-500"
                                    ])} aria-hidden="true">
                                        <div>
                                            <span>{menu.name}</span>
                                        </div>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>))}


        </div>
    );
};

export default Sidebar;