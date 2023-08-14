import React from "react"
import Select from 'react-select';


const NavBarCoding = ({ userLang, setUserLang, userTheme,
    setUserTheme, fontSize, setFontSize }) => {
    // const languages = [
    //     { value: "c", label: "C" },
    //     { value: "cpp", label: "C++" },
    //     { value: "python", label: "Python" },
    //     { value: "java", label: "Java" },
    //     { value: "javascript", label: "Javascript" }
    // ];
    const themes = [
        { value: "monokai", label: "monokai" },
        { value: "dracula", label: "dracula" },
        { value: "cobalt", label: "cobalt" },
        { value: "chrome", label: "chrome" },
        { value: "github", label: "github" },
        { value: "eclipse", label: "eclipse" }
    ]
    return (
        <div className="navbarCoding">
            <h2>Code editor</h2>
            {/* <Select options={languages} value={userLang}
                onChange={(e) => setUserLang(e.value)}
                placeholder={userLang} /> */}
            <Select options={themes} value={userTheme}
                onChange={(e) => setUserTheme(e.value)}
                placeholder={userTheme} />
            <div className="fontSize">    
            <label>Font Size</label>
            <input type="range" min="18" max="30"
                value={fontSize} step="2"
                onChange={(e) => { setFontSize(e.target.value) }} />
            </div>    
        </div>
    )
}
 
export default NavBarCoding