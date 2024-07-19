import languages from "./languages";
const Translator =() =>{
    return(
        <>
            <div className="wrapper">
                <div className="text-input">               
                    <textarea name="from" className="from-text" id="from" placeholder="Enter Text"></textarea>
                    <textarea name="to" className="to-text" id="to" readOnly placeholder="enter text"></textarea>
                </div>
                <ul className="controls">
                    <li className="row from">
                        <div className="icons">
                        <i id="from" class="fas fa-volume-high"></i>
                        <i id="from" class="fas fa-copy"></i>
                        </div>
                        <select>
                            {
                                Object.entries(languages).map(([code, name])=>{
                                    return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                    </li>
                    <li className="exchange">
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </li>
                    <li className="row to">
                        <select>
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