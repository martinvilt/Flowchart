import React, { useState } from 'react';

import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const onNodeMouseEnter = (event, node) => console.log('mouse enter:', node);
const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
    event.preventDefault();
    console.log('context menu:', node);
};

const initialElements = [
    {
        id: 'horizontal-1',
        sourcePosition: 'right',
        type: 'input',
        className: 'dark-node',
        data: { label: 'Press (config model, part)' },
        position: { x: -250, y: 80 },
    },
    {
        id: 'horizontal-2',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Dolly(QA)' },
        position: { x: 0, y: 0 },
    },
    {
        id: 'horizontal-3',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Welding Machine (input form many sources)' },
        position: { x: 250, y: 0 },
    },
    {
        id: 'horizontal-4',
        sourcePosition: 'bottom',
        targetPosition: 'left',
        data: { label: 'Assembly buffer (QA)' },
        position: { x: 500, y: 0 },
    },
    {
        id: 'horizontal-5',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        data: { label: 'Paint Machine (color)' },
        position: { x: 500, y: 75 },
    },
    {
        id: 'horizontal-6',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        data: { label: 'Parts Assembly' },
        position: { x: 500, y: 150 },
    },
    {
        id: 'horizontal-7',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        data: { label: 'Wheel Assembly Station' },
        position: { x: 500, y: 300 },
    },
    {
        id: 'horizontal-8',
        sourcePosition: 'right',
        targetPosition: 'top',
        data: { label: 'Window Machine' },
        position: { x: 500, y: 375 },
    },
    {
        id: 'horizontal-9',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        data: { label: 'Engine Assembly Machine' },
        position: { x: 500, y: 225 },
    },
    {
        id: 'horizontal-10',
        sourcePosition: 'top',
        targetPosition: 'left',
        data: { label: 'Brakes Assembly Machine' },
        position: { x: 750, y: 375 },
    },
    {
        id: 'horizontal-11',
        sourcePosition: 'top',
        targetPosition: 'bottom',
        data: { label: 'Seats Assembly Machine' },
        position: { x: 750, y: 300 },
    },
    {
        id: 'horizontal-12',
        sourcePosition: 'top',
        targetPosition: 'bottom',
        data: { label: 'QA' },
        position: { x: 750, y: 225 },
    },

    {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-2',
        animated: true,
    },
    {
        id: 'horizontal-e2-3',
        source: 'horizontal-2',
        type: 'smoothstep',
        target: 'horizontal-3',
        animated: true,
    },
    {
        id: 'horizontal-e3-4',
        source: 'horizontal-3',
        type: 'smoothstep',
        target: 'horizontal-4',
        animated: true,
    },
    {
        id: 'horizontal-e4-5',
        source: 'horizontal-4',
        type: 'smoothstep',
        target: 'horizontal-5',
        animated: true,
    },
    {
        id: 'horizontal-e5-6',
        source: 'horizontal-5',
        type: 'smoothstep',
        target: 'horizontal-6',
        animated: true,
    },
    {
        id: 'horizontal-e6-9',
        source: 'horizontal-6',
        type: 'smoothstep',
        target: 'horizontal-9',
        animated: true,
    },
    {
        id: 'horizontal-e9-7',
        source: 'horizontal-9',
        type: 'smoothstep',
        target: 'horizontal-7',
        animated: true,
    },
    {
        id: 'horizontal-e7-8',
        source: 'horizontal-7',
        type: 'smoothstep',
        target: 'horizontal-8',
        animated: true,
    },
    {
        id: 'horizontal-e8-10',
        source: 'horizontal-8',
        type: 'smoothstep',
        target: 'horizontal-10',
        animated: true,
    },
    {
        id: 'horizontal-e10-11',
        source: 'horizontal-10',
        type: 'smoothstep',
        target: 'horizontal-11',
        animated: true,
    },
    {
        id: 'horizontal-e11-12',
        source: 'horizontal-11',
        type: 'smoothstep',
        target: 'horizontal-12',
        animated: true,
    },

];

export const HorizontalFlow = () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const changeClassName = () => {
        setElements((elms) =>
            elms.map((el) => {
                if (el.type === 'input') {
                    el.className = el.className ? '' : 'dark-node';
                }

                return { ...el };
            })
        );
    };

    return (
        <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            onLoad={onLoad}
            selectNodesOnDrag={false}
            onNodeMouseEnter={onNodeMouseEnter}
            onNodeMouseMove={onNodeMouseMove}
            onNodeMouseLeave={onNodeMouseLeave}
            onNodeContextMenu={onNodeContextMenu}
        >
            <button
                onClick={changeClassName}
                style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }}
            >
                change class name
            </button>
        </ReactFlow>
    );
};

export default HorizontalFlow;