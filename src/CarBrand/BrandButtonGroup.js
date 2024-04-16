// BrandButtonGroup.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Brandbutton from '../Button/Brandbutton';

const BrandButtonGroup = () => {
  const location = useLocation();

  
  // Define an array of routes where we  hide the brand button
  const routesToHideButton = ['/kiaSonet', '/Suziki','/Mahendra','/Hundai']; // Replace with our actual product detail page routes

  // Check the current route is one of the routes to hide the button
  const shouldHideButton = routesToHideButton.includes(location.pathname);

  if (shouldHideButton) {
    return null; // Render nothing the button should be hidden
  }

  return (
    <Brandbutton

      buttons={[
        { destination: "/kiaSonet", label: "Kia" },
        { destination: "/Suziki", label: "MarutiSuziki" },
        { destination: "/Mahendra", label: "Mahendra" },
        { destination: "/Hundai", label: "Hundai" },
        // Add more button objects as needed
      ]}
    />
  );
};

export default BrandButtonGroup;
