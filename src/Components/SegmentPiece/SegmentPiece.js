import React from 'react';

const SegmentPiece = ({ segClass, atlas, segId }) => {
    return (
        <div 
            className={segClass
            + " " + atlas} 
            id={segId}
        >
        </div>
    );
}

export default SegmentPiece;