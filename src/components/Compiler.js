import EditorWindow from "./EditorWindow";
import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-hot-toast";
function Compiler({isDarkMode}) {
  const [code, setCode] = useState(
`
#include <iostream>
using namespace std;    
    
int main() {
    // your code goes here
    cout<<"hi";
    return 0;
}
`
  );
  const [customInput, setCustomInput] = useState();
  const [outputDetails, setOutputDetails] = useState(null);
  const handleCompile = () => {
    const formData = {
      language_id: 54,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '109415954bmsh26b76a98af55250p15fb00jsn52b7fd307716',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        console.log(err.message)
      });
  };
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Key': '109415954bmsh26b76a98af55250p15fb00jsn52b7fd307716',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        toast.success('');
        return;
      } else {
        setOutputDetails(response.data);
        if(response.data.status.id === 3){
          toast.success('Successfully compiled');
        }
        else{
          toast.error("Compilation failed")
        }
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  return (
    <div className="wrapper" style={{
      // backgroundColor:"#1c1e29",
     minheight: "max-content", height:"100vh", display: "grid", gridTemplateColumns: "70% 25%" , padding:"5px"}}>
      {/* <button id="btn" className="btn-primary mx-5 my-1" style={{width:"100px"}} onClick={handleCompile}>run code</button> */}
      <div className="controller m-3" style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
      </div>
      <div className="editor-container" style={{ width: "100%" }}>
        <div className="editor m-3" style={{ height: 'calc(100%-40px)', border: '2px solid black', innerWidth: '100%' }}>
          <EditorWindow isDarkMode={isDarkMode}  id="window" code={code} onChange={onChange} />
        </div>
      </div>
      <Input
        customInput={customInput}
        setCustomInput={setCustomInput}
        outputDetails={outputDetails}
        setOutputDetails={setOutputDetails}
        compile={handleCompile}
      />
    </div>
  );
}
export default Compiler;