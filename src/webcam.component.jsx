import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: "environment" }
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [showCamera, setShowCamera] = React.useState(true);
  const [imgUrl, setImgUrl] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setShowCamera(false);
    setImgUrl(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setShowCamera(true);
    setImgUrl(null);
  };

  const send = () => {
    //send photo to db
  };

  return (
    <div style={{ position: "relative" }}>
      {showCamera ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Webcam
            audio={false}
            height="560"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            weight="560"
            videoConstraints={videoConstraints}
          />
          <button
            className="btn btn-lg btn-primary"
            onClick={capture}
            style={{ marginTop: "16px" }}
          >
            <i className="fa fa-camera" /> Capture
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <img
            src={imgUrl}
            alt="your report"
            style={{ marginBottom: "16px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              className="btn btn-lg btn-warning"
              style={{ margin: "5px" }}
              onClick={retake}
            >
              <i className="fa fa-refresh" /> Retake
            </button>
            <button
              className="btn btn-lg btn-success"
              style={{ margin: "5px" }}
              onClick={send}
            >
              <i className="fa fa-send" /> Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
