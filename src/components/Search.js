import React, { useState } from 'react';
import axios from 'axios';

const SearchSection = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState(null);
    const Api_URL = 'https://en.wikipedia.org/w/api.php?format=json&list=search&action=query&origin=*&srsearch='


    const onInputChange = (event) => {
        console.log(event.target.value);
        setTerm(event.target.value);
    }
    const onEnterPress = async (event) => {
        if (event.key === 'Enter') {
            // Make API Call
            // axios.get(Api_URL+term)
            // .then(function(response){
            //     console.log(response);
            // })
            // .catch(function(error){
            //     console.log(error);
            // })
            // .then(function(){
            //     console.log('print puneet');
            // })
            try {
                const response = await axios.get(Api_URL + term);
                console.log(response);
                const renderResult = response.data.query.search.map((item,index) => {
                    return (
                        <div key={index}>
                            <div className="title active" >
                                {/* <i className="dropdown icon"></i> */}
                                {item.title}
                            </div>
                            <div className="content active">
                                <p>{item.snippet}</p>
                            </div>
                        </div>
                    )
                })
                setResults(renderResult);
            }
            catch (error) {
                console.log(error);
            }

        }
    }
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    onChange={(e) => onInputChange(e)}
                    onKeyDown={(e) => onEnterPress(e)}
                    value={term}
                    type="text"
                    placeholder="Search..." />
                <i className="search icon"></i>
            </div>
            <div className="results" style={{display:'block'}}>
                {results}
            </div>
        </div>

    )
}
export default SearchSection;