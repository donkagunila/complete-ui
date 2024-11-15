import React from "react";
import DocsLayout from "@/components/layouts/DocsLayout";
import PageSectionHeader from "@/components/app/page-section-header";


const Main = () => {
  return (
    <DocsLayout>
      <div>
        <PageSectionHeader
          pageTitle="UI"
          title="Popover"
          subTitle="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." />
      </div>

      <div className="flex border border-slate-200 py-12 px-5 rounded-md justify-center">
        {/*<Popover>*/}
        {/*  <PopoverTrigger asChild>*/}
        {/*    <button>Open popover</button>*/}
        {/*  </PopoverTrigger>*/}
        {/*  <PopoverContent className="w-80 bg-white">*/}
        {/*    <div className="grid gap-4">*/}
        {/*      <div className="space-y-2">*/}
        {/*        <h4 className="font-medium leading-none">Dimensions</h4>*/}
        {/*        <p className="text-sm text-muted-foreground">*/}
        {/*          Set the dimensions for the layer.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="grid gap-2">*/}
        {/*        <div className="grid grid-cols-3 items-center gap-4">*/}
        {/*          <Label htmlFor="width">Width</Label>*/}
        {/*          test*/}
        {/*        </div>*/}
        {/*        <div className="grid grid-cols-3 items-center gap-4">*/}
        {/*          <Label htmlFor="maxWidth">Max. width</Label>*/}
        {/*          test*/}
        {/*        </div>*/}
        {/*        <div className="grid grid-cols-3 items-center gap-4">*/}
        {/*          <Label htmlFor="height">Height</Label>*/}
        {/*          test*/}
        {/*        </div>*/}
        {/*        <div className="grid grid-cols-3 items-center gap-4">*/}
        {/*          <Label htmlFor="maxHeight">Max. height</Label>*/}
        {/*          test*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </PopoverContent>*/}
        {/*</Popover>*/}
      </div>


    </DocsLayout>
  );
};

export default Main;