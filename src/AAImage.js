import React from 'react';

const AAImage = (props) => {
    const base64 = props.base64;
    return (
        <div>
            <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
            {/* <a-image scale="5 5 5" position='0 0.5 0' src={`data:image/png;base64,${base64}`}></a-image> */}
        </div>
    );
}


export default AAImage;