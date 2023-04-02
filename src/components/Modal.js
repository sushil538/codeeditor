import React from 'react'

const Modal = () => {
        return (
                <div>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h1 className="modal-title fs-5" style={{ color: "white" }} id="exampleModalLabel">Paste invitation ROOM ID</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        {/* <div className="homePageWrapper"> */}
                                                        <div className="formWrapper">
                                                                {/* <img
                        className="homePageLogo"
                        src="/code-sync.png"
                        alt="code-sync-logo"
                    /> */}
                                                                {/* <h4 className="mainLabel">Paste invitation ROOM ID</h4> */}
                                                                <div className="inputGroup">
                                                                        <input
                                                                                type="text"
                                                                                className="inputBox"
                                                                                placeholder="ROOM ID"
                                                                        // onChange={(e) => setRoomId(e.target.value)}
                                                                        // value={roomId}
                                                                        // onKeyUp={handleInputEnter}
                                                                        />
                                                                        <input
                                                                                type="text"
                                                                                className="inputBox"
                                                                                placeholder="USERNAME"
                                                                        // onChange={(e) => setUsername(e.target.value)}
                                                                        // value={username}
                                                                        // onKeyUp={handleInputEnter}
                                                                        />
                                                                        <button className="btn joinBtn"
                                                                        //  onClick={joinRoom}
                                                                        >
                                                                                Join
                                                                        </button>
                                                                        <span className="createInfo">
                                                                                If you don't have an invite then create &nbsp;
                                                                                <a
                                                                                        // onClick={createNewRoom}
                                                                                        href="/"
                                                                                        className="createNewBtn"
                                                                                >
                                                                                        new room
                                                                                </a>
                                                                        </span>
                                                                </div>
                                                        </div>
                                                        {/* </div> */}
                                                </div>
                                                <div className="modal-footer">
                                                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                                        <button type="button" style={{ paddingLeft: "15px", paddingRight: "15px" }} className="createNewBtn btn btn-primary" 
                                                        // onClick={createNewRoom}
                                                        // href="/"
                                                        >
                                                        New Meeting
                                                        </button>
                                                        <button type="button" style={{ paddingLeft: "15px", paddingRight: "15px" }} className="btn btn-primary"> Join</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Modal
