import { useState } from "react";
import languages from "./languages";
const Translator =() =>{
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState('hi-IN');

    const handleExchange =()=>{
        let tempValue = fromText;
        setFromText(toText);
        setToText(tempValue);

        let tempLang = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(tempLang);
    }
    return(
        <>
            <div className="wrapper">
                <div className="text-input">               
                    <textarea name="from" className="from-text" id="from" placeholder="Enter Text" value={fromText} onChange={(event)=>setFromText(event.target.value) }></textarea>
                    <textarea name="to" className="to-text" id="to" readOnly value={toText}></textarea>
                </div>
                <ul className="controls">
                    <li className="row from">
                        <div className="icons">
                        <i id="from" class="fas fa-volume-high"></i>
                        <i id="from" class="fas fa-copy"></i>
                        </div>
                        <select value={fromLanguage} onChange={(event)=>setFromLanguage(event.target.value)}>
                            {
                                Object.entries(languages).map(([code, name])=>{
                                    return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                    </li>
                    <li className="exchange" onClick={handleExchange}>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </li>
                    <li className="row to">
                        <select value={toLanguage} onChange={(event)=>setToLanguage(event.target.value)}>
                        {
                                Object.entries(languages).map(([code, name])=>{
                                    return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                    <div className="icons">
                        <i id="to" class="fas fa-copy"></i>
                        <i id="to" class="fas fa-volume-high"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <button>Translat</button>
        </>
    );
}

export default Translator;