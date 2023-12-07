import React, { memo } from 'react';
import './custom-node.css';
import { Handle, Position } from 'reactflow';


function CustomChildren({ label }) {
    return (
        <div className='children-custom'>
            <span className='hex'>
                <span>{label}</span>
            </span>
        </div>
    )
}
function CustomNode({ id, data }) {

    return (
        <div className='custom-node'>
            <div className={data.meta.className}>
                <div className={data.meta.childClassName}></div>
                <span>{data.meta.name}</span>
            </div>
            {Object.keys(data.logos).map((type) => (
                type === "main" ? <img src={data.logos[type]} alt="main-logo" className='custom-node__logo' /> : (
                    data.logos[type].map((ele, id) => <CustomChildren label={ele} key={ele + id} />)
                )
            ))}

            <Handle
                type={data?.logos?.main ? "source" : "target"}
                position={data?.logos?.main ? Position.Bottom : Position.Top}
            />
        </div>
    );
}

export default memo(CustomNode);
