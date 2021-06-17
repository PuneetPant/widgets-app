import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {

    const [open, setOpen] = useState(false);
    const refContainer = useRef();

    useEffect(() => {
        const callbackFunc = (event) => {

            // if(refContainer.current.contains(event.target)){
            //     return;
            // }
            // setOpen(false);

            console.log('Body clicked.')
        }
        document.body.addEventListener('click', callbackFunc);

        return () => {
            document.body.removeEventListener('click', callbackFunc);
        }
    }, [])



    const renderedOptions = props.options.map((option, index) => {

        if (option.value === props.selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    console.log('item clicked.')
                    props.onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        )
    })

    // const clickedOption = (e,option) => {
    //     e.stopPropagation();
    //     console.log('puneet');
    //     props.onSelectedChange(option);
    // }
    // const clickChecker = (e) => {
    //     e.preventDefault();
    //     console.log('print somwthing', e.target);
    //     setOpen(!open);
    // }
    return (
        <div ref = {refContainer} className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div onClick={() => {
                    console.log('dropdown clicked.')
                    setOpen(!open)
                }}
                    className={`ui selection dropdown ${open === true ? 'visible active' : ''}`}
                // className="ui selection dropdown visible active"
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open === true ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown;