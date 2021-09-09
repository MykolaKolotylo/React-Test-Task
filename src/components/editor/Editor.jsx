import './Editor.css';
import React, {useMemo, useState} from 'react'
import {createEditor} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'

const Editor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{text: ''}],
        },
    ]);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => {
                setValue(newValue)
            }}
        >
            <Editable className={'editor'} placeholder="Enter some text..."/>
        </Slate>
    );
}

export default Editor;
