import { useEffect, useState } from "react";
import  "./ColorSchemeToggle.css"
import moonAndStarsIcon from "./../Assets/images/moon-and-stars-svgrepo-com.svg";
import sunIcon from "./../Assets/images/sun-fog-svgrepo-com.svg";

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
        let newBgColor = '';
        let newNavBarColor = '';
        let newNavbarTextColor = '';
        let newDarkTextColor = '';

        if(currentTheme === 'light'){
            const lightColors = ['#F9F3F4', '#C7DC85', '#FFB219', '#B8E095', '#F0D04E'];
            newBgColor = interpolateColor(lightColors, value);
            newNavBarColor = interpolateColor(['#F39075', '#718A0B', '#55AB4E', '#E45CE8'], value);
            newNavbarTextColor = interpolateColor(['#CC4A27', '#3C4A04', '#1C6230', '#B626AB'], value);
            //console.log(newBgColor, newNavBarColor, newTextColor);
        }
        else{
            const darkColors = ['#000000', '#000000', '#141A17', '#6E6E6E', '#D65790'];
            newBgColor = interpolateColor(darkColors, value);
            newNavBarColor = interpolateColor(['#9C9292', '#EA5C1A', '#A0B49C', '#A0A0A0', '#CCCCCC'], value);
            newNavbarTextColor = interpolateColor(['#DC8930', '#CDCDCD', '#467268', '#A0A0A0', '#2B1439'], value);
            newDarkTextColor= interpolateColor(['#DADADA', '#DADADA', '#DADADA', '#DADADA', '#DADADA'], value);
            //console.log(newColor);
        }
        //document.body.style.backgroundColor = newColor;
        document.documentElement.style.setProperty('--bg-color', newBgColor);
        document.documentElement.style.setProperty('--navbar-color', newNavBarColor);
        document.documentElement.style.setProperty('--text-color', newNavbarTextColor);
        document.documentElement.style.setProperty('--body-text-color', newDarkTextColor);
    }
   
    return (
      <div className="flex items-center gap-2 relative">
        <button
          className="color-scheme-toggle relative z-10 px-3 mx-2"
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
        { theme === 'dark' ? (
          <img
            src={moonAndStarsIcon}
            alt="light mode icon"
            className="w-6 h-6"/>
        ):(
          <img
            src={sunIcon}
            alt="dark mode icon"
            className="w-6 h-6"/>
        )}
        
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