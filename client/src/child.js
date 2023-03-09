import React, { useEffect, useState } from 'react';

function ChildFunc({props, changeName}) {

    return (
        <div>
            {props}
            <div>
                <button onClick={() => changeName("sharma")}>
                    Change Name
                </button>
            </div>
        </div>
    );
}

export default ChildFunc;
