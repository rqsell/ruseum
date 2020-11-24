import React, { useState } from "react";
import { Link } from "react-router-dom";
import QrReader from "react-qr-reader";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";

function Explore(props) {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  console.log(open);

  async function handleScan(data) {
    if (data) {
      setResult({ data });
    }
    // console.log(result);
  }
  async function handleError(err) {
    console.error(err);
  }
  return (
    <div className="page">
      <div className="body">
        <span>
          Art is all around you... even on your phones. Click the icon to get
          started
        </span>
        <img
          src="./magnifyingglass.png"
          alt="glass"
          className="glass"
          // Setting the QR camera State
          onClick={() => setOpen(!open)}
        />
        {/* If a valid QR code is Scanned Display the below */}
        {result ? (
          <a target="_blank" href={result?.data}>
            <img src="./starrypicture.png" className="starrypicture" />
          </a>
        ) : null}
        {/* Opening and Closing the QR Camera */}
        {open ? (
          <QrReader
            delay={300}
            facingMode="environment"
            onError={handleError}
            onScan={handleScan}
            style={{ width: "75%" }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Explore;
