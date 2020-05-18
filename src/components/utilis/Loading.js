import React from 'react';
import gif from './load.gif';


export default () => {
    return (
        <div>
            <h1 className="mt-4">Loading...</h1>
            <img alt="load" src={gif}/>
        </div>
    );
};

