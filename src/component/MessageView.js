import React from 'react'

function MessageView({text, Count}) {
    console.log('message view');
    return (
        <div>
            {text} - {Count}
        </div>
    )
}

export default React.memo(MessageView)
