import React, { useContext } from 'react';
import { methodContext } from './DragContext';

const DragItem = (props: any) => {
    const { handleDragStart } = useContext(methodContext);

    if (props.index === undefined) {
        console.error(
            'Can not find "index".\nMake sure that you pass everything correctly'
        );
        return <div>{props.children}</div>;
    }

    return (
        <div
            data-index={props.index}
            style={{
                width: 'fit-content',
                height: 'fit-content',
                cursor: 'pointer'
            }}
            draggable={true}
            onDragStart={(e) => {
                handleDragStart(e, props.index);
            }}
        >
            <div style={{ pointerEvents: 'none' }}>{props.children}</div>
        </div>
    );
};

export default DragItem;
