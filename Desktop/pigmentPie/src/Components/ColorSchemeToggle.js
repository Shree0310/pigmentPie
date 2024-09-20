import { useEffect, useState } from "react";
import  "./ColorSchemeToggle.css"

const ColorSchemeToggle =() =>{

    const [theme, setTheme] = useState('light');
    const [sliderValue, setSliderValue] = useState(0);
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-color-scheme', savedTheme);
      updateBackgroundColor(savedTheme, sliderValue);
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-color-scheme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateBackgroundColor(newTheme, sliderValue);
    };
  
    const handleSliderChange = (e) => {
      const value = e.target.value;
      setSliderValue(value);
      updateBackgroundColor(theme, value);
  
          };
  

    const interpolateColor = (colors, value) => {
        const range = colors.length - 1;
        const scaledValue = (value / 100) * range; // Scale slider value to range
        const lowerIndex = Math.floor(scaledValue);
        const upperIndex = Math.ceil(scaledValue);
        const ratio = scaledValue - lowerIndex;
    
        const lowerColor = hexToRgb(colors[lowerIndex]);
        const upperColor = hexToRgb(colors[upperIndex]);
    
        const interpolatedColor = {
        r: Math.round(lowerColor.r + ratio * (upperColor.r - lowerColor.r)),
        g: Math.round(lowerColor.g + ratio * (upperColor.g - lowerColor.g)),
        b: Math.round(lowerColor.b + ratio * (upperColor.b - lowerColor.b)),
        }; 
        
        return `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
    };

    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.replace("#", ""), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
      };
    // Function to update the backgroiup color
    const updateBackgroundColor = (currentTheme, value) =>{
        let newColor = '';
        if(currentTheme == 'light'){
            const lightColors = ['#F1EFE3', '#C7DC85', '#FFB219', '#E943D8', '#F66A8C'];
            newColor = interpolateColor(lightColors, value);
            //console.log(newColor);
        }
        else{
            const darkColors = ['#000000', '#2F2F2F', '#4B4B4B', '#6E6E6E', '#8A8A8A'];
            newColor = interpolateColor(darkColors, value);
            //console.log(newColor);
        }
        document.body.style.backgroundColor = newColor;
    }
   
    return (
      <div className="flex items-center gap-2 relative">
        <button
          className="color-scheme-toggle relative z-10"
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
          <svg
            className={`absolute transition-opacity duration-200 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="24"
            height="24"
            fill="currentColor"
          >
            <circle cx="32" cy="32" r="32" fill="yellow" />
          </svg>
          <svg
            className={`absolute transition-opacity duration-200 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="24"
            height="24"
            fill="currentColor"
          >
            <circle cx="32" cy="32" r="32" fill="gray" />
          </svg>
        </button>
        <input
          type="range"
          className="theme-slider w-32 max-w-[4rem] focus:outline-none"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
    );
  };


export default ColorSchemeToggle;