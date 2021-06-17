import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    }
]


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    console.log('Translate.js');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <input type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label={'Select a Language'}
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <div className="ui header"></div>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;