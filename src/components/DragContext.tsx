import React, { createContext, useState } from 'react';

export const dragContext: any = createContext(null);
export const methodContext: any = createContext(null);

const DragContext = (props: any) => {
    const [selected, setSelected] = useState(0);
    const [target, setTarget] = useState(0);

    const handleDragStart = (e: any, i: number) => {
        e.target.firstChild.style.opacity = 1;
        setSelected(i);
    };

    const handleDragLeave = (e: any) => {
        e.target.firstChild.style.opacity = 1;
        e.target.style.outline = 0;
        setTarget(selected);
    };

    const handleDragOver = (e: any) => {
        if (e.target.getAttribute('data-index') !== null) {
            e.target.firstChild.style.opacity = 0;
            e.target.style.outline = '2px dashed #2196F3';
            setTarget(e.target.getAttribute('data-index'));
        } else {
            setTarget(selected);
        }
        e.preventDefault();
    };

    const providerValue = { selected, target };

    const methods = {
        handleDragOver,
        handleDragLeave,
        handleDragStart
    };

    return (
        <dragContext.Provider value={providerValue}>
            <methodContext.Provider value={methods}>
                {props.children}
            </methodContext.Provider>
        </dragContext.Provider>
    );
};

export default DragContext;
