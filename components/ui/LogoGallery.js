'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the sliding animation
const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled components
const GalleryContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: transparent; /* Light background color */
  position: relative;
  padding: 20px 0; /* Padding to the top and bottom for spacing */
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%; /* Adjust width as needed */
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgba(248, 249, 250, 1),
    rgba(248, 249, 250, 0)
  );

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(248, 249, 250, 1),
      rgba(248, 249, 250, 0)
    );
  }
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${slide} 40s linear infinite; /* Slower animation duration */
  margin-bottom: 30px; /* Height between rows */
  &:nth-child(odd) {
    animation-direction: normal;
  }
  &:nth-child(even) {
    animation-direction: reverse;
    animation-duration: 42s; /* Slightly different duration for staggering effect */
  }
`;

const Logo = styled.img`
  height: 50px; /* Adjust the height as needed */
  margin: 0 15px; /* Adjust the spacing as needed */
  padding: 0 10px; /* Padding to the left and right */
`;

const LogoGallery = ({ logos }) => {
  return (
    <GalleryContainer>
      <Gradient className="left" />
      <Gradient className="right" />
      <Row>
        {logos.map((logo, index) => (
          <Logo src={logo} alt={`Logo ${index}`} key={`row1-${index}`} />
        ))}
        {logos.map((logo, index) => (
          <Logo src={logo} alt={`Logo ${index}-duplicate`} key={`row1-${index}-duplicate`} />
        ))}
      </Row>
      
    </GalleryContainer>
  );
};

export default LogoGallery;