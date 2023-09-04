import React from "react";

const LeaveRoomButton = () => {
  const handleRoomDisconnection = () => {
    let path=window.localStorage.getItem('path')
    if(path){
      window.location.href = "http://"+path;
      return
    }

    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };

  return (
    <div className="video_button_container">
      <button className="video_button_end" onClick={handleRoomDisconnection}>
        Leave Room
      </button>
    </div>
  );
};

export default LeaveRoomButton;
