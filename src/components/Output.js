import React from 'react'

const Output = ({ outputDetails }) => {
        const getOutput = () => {
                let statusId = outputDetails?.status?.id;

                if (statusId === 6) {
                        // compilation error
                        return (
                                <pre style={{color:"red"}}>
                                        {atob(outputDetails?.compile_output)}
                                </pre>
                        );
                } else if (statusId === 3) {
                        return (
                                <pre>
                                        {atob(outputDetails.stdout) !== null
                                                ? `${atob(outputDetails.stdout)}`
                                                : null}
                                </pre>
                        );
                } else if (statusId === 5) {
                        return (
                                <pre style={{color:"red"}}>
                                        {`Time Limit Exceeded`}
                                </pre>
                        );
                } else {
                        return (
                                <pre style={{color:"red"}}>
                                        {atob(outputDetails?.stderr)}
                                </pre>
                        );
                }
        };
        return (
                <>
                        <pre style={{fontSize:"large"}} className='card-text'>
                        {outputDetails ? <>{getOutput()}</> : null}
                        </pre>
                </>
        );

}

export default Output
