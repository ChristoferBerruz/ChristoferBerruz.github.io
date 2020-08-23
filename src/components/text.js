import React from 'react';

export function MultiLineText({multiLineText}){
    return(
        <div>
            {multiLineText.split("\n").map((line, idx) => {
                return <p key={idx}> {line} </p>
            } )}
        </div>
    );
}