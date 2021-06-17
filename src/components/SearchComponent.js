import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchSection = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    // const Api_URL = 'https://en.wikipedia.org/w/api.php?format=json&list=search&action=query&origin=*&srsearch='


    const onInputChange = (event) => {
        console.log(event.target.value);
        setTerm(event.target.value);
    }

    console.log(results);

    

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    format: 'json',
                    list: 'search',
                    action: 'query',
                    origin: '*',
                    srsearch: term
                }
            })
            setResults(data.query.search);
        }

        if (term ) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            }
        }



    }, [term])

    const renderedResults = results.map((result, index) => {
        return (
            <div key={index} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go!
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    onChange={(e) => onInputChange(e)}
                    value={term}
                    type="text"
                    placeholder="Search..." />
                <i className="search icon"></i>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>

        </div>

    )
}
export default SearchSection;