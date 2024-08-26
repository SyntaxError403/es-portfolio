"use client"
import React from 'react';
import Barcode from 'react-barcode';

const BoardingPass = () => {
  return (
    <div className="boarding-pass vertical wider" style={{marginRight: 12}}>
      <div className="pass-top">
        <div className="project-info">
          <h2>Project: Portfolio Website</h2>
          <p>Developer: Jane Doe</p>
          <p>Technology: React, Firebase</p>
          <p>Status: In Progress</p>
          <p>Last Updated: August 2024</p>
        </div>
      </div>
      <div className="divider"></div> {/* Dashed line divider */}
      <div className="pass-bottom">
        <div className="barcode">
          <Barcode value="PortfolioWebsite2024" displayValue={false} />
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
