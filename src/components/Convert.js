import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Convert = ({ text, language }) => {
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        } , 1000);

        return () => {
            clearTimeout(timerId);
        }
    },[text]);

    useEffect(() => {
        const doTranslation = async () => {
            const response = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            console.log(response.data.data.translations[0].translatedText);
            setTranslatedText(response.data.data.translations[0].translatedText);
        }
        doTranslation();

    }, [debouncedText, language])

    return (
        // <div>
        <>
            <h1 className="ui header">{translatedText}</h1>
        </>
        // </div>
    )
}

export default Convert;