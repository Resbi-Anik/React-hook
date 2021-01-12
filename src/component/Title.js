import React from 'react'

function Title({text}) {
    console.log('title');
    return (
        <div>
            {text}
        </div>
    )
}

export default React.memo(Title)
