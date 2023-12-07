import React, { useCallback, useEffect } from 'react';
import ReactFlow, { addEdge, useEdgesState, useNodesState } from 'reactflow';

import { edges as initialEdges } from './node-locations';
import CustomNode from './CustomNode';

import 'reactflow/dist/style.css';

const nodeTypes = {
    custom: CustomNode,
};



const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

export default function MainCanvas() {
    const [nodes, , onNodesChange] = useNodesState(JSON.parse(window.localStorage.getItem('nodes')));
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    useEffect(() => {
        window.localStorage.setItem('nodes', JSON.stringify(nodes));
    }, [nodes]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={
                onNodesChange
            }
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            // attributionPosition="top-right"
            nodeTypes={nodeTypes}
        />
    );
};


