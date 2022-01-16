import React, { useContext } from 'react';
import { dragContext, methodContext } from './DragContext';

const DragArea = (props: any) => {
    const { selected, target } = useContext(dragContext);
    const { handleDragOver, handleDragLeave } = useContext(methodContext);

    const handleDrop = (e: any) => {
        const tempItems = [...props.items];
        [tempItems[selected], tempItems[target]] = [
            tempItems[target],
            tempItems[selected]
        ];

        props.onChange(tempItems);
        e.target.firstChild.style.opacity = 1;
        e.target.style.outline = 0;
    };

    if (props.items === undefined) {
        console.error(
            'Can not find "items".\nMake sure that you pass everything correctly'
        );
        return <div>{props.children}</div>;
    }

    if (props.onChange === undefined) {
        console.error(
            'Can not find "onChange" function.\nMake sure that you pass everything correctly'
        );
        return <div>{props.children}</div>;
    }

    return (
        <div
            style={{
                width: 'fit-content'
            }}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
        >
            {props.children}
        </div>
    );
};

export default DragArea;
