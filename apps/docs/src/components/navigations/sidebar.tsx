import React from 'react';
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
                {name: "Donut Chart", path: "/docs/visualizations/bar-chart"},
                {name: "Combo Chart", path: "/docs/visualizations/bar-chart"},
                {name: "Line Chart", path: "/docs/visualizations/bar-chart"},
                {name: "Scatter Chart", path: "/docs/visualizations/bar-chart"},
                {name: "Funnel Chart", path: "/docs/visualizations/bar-chart"},
                {name: "Bar List", path: "/docs/visualizations/bar-chart"},
                {name: "Data Bars", path: "/docs/visualizations/bar-chart"},
                {name: "Progress Circle", path: "/docs/visualizations/bar-chart"},
                {name: "Spark Charts", path: "/docs/visualizations/bar-chart"},
                {name: "Tracker", path: "/docs/visualizations/bar-chart"},
            ]
        },
        {
            title: "UI",
            menuItems: [
                {name: "Accordion", path: "/docs/getting-started/installation"},
                {name: "Badges", path: "/docs/getting-started/theming"},
                {name: "Buttons", path: "/docs/getting-started/theming"},
                {name: "Calendar", path: "/docs/getting-started/theming"},
                {name: "Checkbox", path: "/docs/getting-started/theming"},
                {name: "Callout", path: "/docs/getting-started/theming"},
                {name: "Card", path: "/docs/getting-started/theming"},
                {name: "Date Picker", path: "/docs/getting-started/theming"},
                {name: "Date Range Picker", path: "/docs/getting-started/theming"},
                {name: "Dialog", path: "/docs/getting-started/theming"},
                {name: "Dropdown Menu", path: "/docs/getting-started/theming"},
                {name: "Divider", path: "/docs/getting-started/theming"},
                {name: "Input", path: "/docs/getting-started/theming"},
                {name: "Label", path: "/docs/getting-started/theming"},
                {name: "Icons", path: "/docs/getting-started/theming"},
                {name: "Radio Group", path: "/docs/getting-started/theming"},
                {name: "Radio Card Group", path: "/docs/getting-started/theming"},
                {name: "Legend", path: "/docs/getting-started/theming"},
                {name: "List", path: "/docs/getting-started/theming"},
                {name: "Number Input", path: "/docs/getting-started/theming"},
                {name: "Select", path: "/docs/getting-started/theming"},
                {name: "Switch", path: "/docs/getting-started/theming"},
                {name: "Slider", path: "/docs/getting-started/theming"},
                {name: "Tabs", path: "/docs/getting-started/theming"},
                {name: "Toast", path: "/docs/getting-started/theming"},
                {name: "Textarea", path: "/docs/getting-started/theming"},
            ]
        },
    ];


    return (
        <div>
            {menuGroups.map((menuGroup: MenuGroup) => (
                <div key={menuGroup.title} className="mb-4">
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
                                <Link href={menu.path}>
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