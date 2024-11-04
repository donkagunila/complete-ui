import * as RadixDialog from "@radix-ui/react-dialog";
import React from 'react';

interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode; // Ensure children are typed as ReactNode
}

const Dialog: React.FC<DialogProps> = ({open, onOpenChange, title, description, children}) => {
    return (
        <RadixDialog.Root open={open} onOpenChange={onOpenChange} modal>

            <RadixDialog.Portal>
                <RadixDialog.Overlay className="DialogOverlay"/>
                <RadixDialog.Content
                    className="DialogContent">

                    <RadixDialog.Title className="DialogTitle">
                        {title}
                    </RadixDialog.Title>
                    <RadixDialog.Description className="DialogDescription">
                        {description}
                    </RadixDialog.Description>
                    {children}
                    <RadixDialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            Close
                        </button>
                    </RadixDialog.Close>
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    );
};

export default Dialog;
