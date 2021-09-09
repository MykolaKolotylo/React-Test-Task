import React, {useMemo, useState} from 'react'
import {createEditor} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'

const TextBlock = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{text: 'Editable aria'}],
        },
    ]);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => {
                setValue(newValue);
                const content = JSON.stringify(value)
                localStorage.setItem('content', content)
            }}
        >
            <Editable/>
        </Slate>
    );
}

export default TextBlock;
