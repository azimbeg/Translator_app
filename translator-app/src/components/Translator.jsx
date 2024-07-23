import { useState } from "react";
import languages from "./languages";

const Translator =() =>{
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState('hi-IN');
    const [loading, setLoading] = useState(false);

    const handleExchange =(event)=>{
        let tempValue = fromText;
        setFromText(toText);
        setToText(tempValue);

        let tempLang = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(tempLang);
    }

    const copyContent =(text)=>{
        navigator.clipboard.writeText(text);
    }

    const utterText =(text, languages)=>{
        const synth = window.speechSynthesis;
        const utterrance = new SpeechSynthesisUtterance(text);
        utterrance.lang = languages;
        synth.speak(utterrance);
    }

    const handleTranslate = () =>{
        setLoading(true);
        let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;

        fetch(url).then((res)=>res.json()).then((data)=>{
            setToText(data.responseData.translatedText);
            setLoading(false);
        })
    }

    const handleIconClick = (target,id)=>{
        if(target.classList.contains('fa-copy')){
            if(id === 'from'){
                copyContent(fromText);
            }
            else{
                copyContent(toText);
            }
            
        }else{
            if(id === 'from'){
                utterText(fromText, fromLanguage);
            }
            else{
                utterText(toText, toLanguage);
            }
    }



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
                        <i id="from" class="fas fa-volume-high" onClick={(e) => handleIconClick(e.target, 'from')}></i>
                        <i id="from" class="fas fa-copy" onClick={(e)=>handleIconClick(e.target,'from')}></i>
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
                        <i id="to" class="fas fa-copy" onClick={(e)=>handleIconClick(e.target,'to')}></i>
                        <i id="to" class="fas fa-volume-high" onClick={(e)=>handleIconClick(e.target,'to')}></i>
                        </div>
                    </li>
                </ul>
            </div>
            <button onClick={handleTranslate}>{loading ? "Translating..." : "Translate Text"}</button>
        </>
    );
}



export default Translator;