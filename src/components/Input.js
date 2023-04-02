import React, { useState } from 'react'
import Output from './Output'
const Input = ({ customInput, setCustomInput, outputDetails, setOutputDetails,compile}) => {


        return (
                <div>
                        {/* <div className="output rounded m-3" style={{ height: "30%", border: "2px solid black", overflow: "auto" }}>
                                {(outputDetails) ? atob(outputDetails.stdout) : "compilation error"}
                        </div>
                        <div className="floating-form m-3">
                                <textarea
                                        value={customInput}
                                        onChange={(e) => setCustomInput(e.target.value)}
                                        placeholder={`Custom input`}
                                        className="form-control disabled" style={{ border: "2px solid black" }} id="txtArea"
                                >
                                {(outputDetails) ? atob(outputDetails.stdout) : ""}
                                </textarea>
                                <label htmlFor="floatingTextarea">Custum Input</label>
                        </div> */}
                        <div className="card m-3 " style={{height:"30%" , border:"2px solid black" , overflowX: "auto" , overflowY:"auto"}}>
                                <div className="card-body" style={{overflowX:"auto" , overflowY:"auto"}}>
                                        <h5 className="card-title">Output</h5>
                                        {/* <pre className="card-text" 
                                        // style={{color:`${(outputDetails.compile_output)?`red`:`black`}`}}
                                        // {{{(outputDetails.stdout)? `red` : `${atob(outputDetails.compile_output)}`}}}
                                        >
                                                {(outputDetails.stdout)? `${atob(outputDetails.stdout)}` : `${atob(outputDetails.compile_output)}`}
                                        {`${atob(outputDetails.stdout)}`}
                                                {(outputDetails) ? `${atob(outputDetails.stdout)}` : `${atob(outputDetails.stderr)}`}
                                        </pre> */}
                                                <Output outputDetails={outputDetails}></Output>
                                </div>
                        </div>
                        <button id="btn" className="btn-primary m-5" style={{ width: "100px" }} onClick={compile}>run code</button>
                        <div className="form-floating m-3">
                                <textarea
                                        rows={10}
                                        value={customInput}
                                        onChange={(e) => setCustomInput(e.target.value)}
                                        placeholder={`Custom input`}
                                        className="form-control" style={{ border: "2px solid black" }} id="txtArea"
                                ></textarea>
                                <label htmlFor="floatingTextarea">Custum Input</label>
                        </div>

                </div>
        )
}

export default Input
