import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const EditorWindow = ({ onChange, code,isDarkMode}) => {
        const [value, setValue] = useState(code || "");
        const handleEditorChange = (value) => {
                setValue(value);
                onChange("code", value);
                console.log(value);
        };
        const [theme, setTheme] = useState("vs-dark");
        useEffect(()=>{
                if(document.body.className === 'LightTheme'){
                        setTheme("vs-light")
                }
                else{
                        setTheme("vs-dark")
                }
        },[isDarkMode])
        return (
                <div>
                        <Editor
                        className="Editorwindow"
                                value={value}
                                theme={theme}
                                height={'80vh'}
                                width={'100%'}
                                defaultValue={"//enter some thing"}
                                language={"cpp"}
                                onChange={handleEditorChange}
                        />
                </div>
        );
};
export default EditorWindow;