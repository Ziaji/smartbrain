import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Logo.css";
import brain from "./brain.png";

const Logo= () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="br2 shadow-2" style={{ height: 150, width: 150 }}>
      			<div id="tilt" className="pa3" style={{ height: '150px'}}>
        			<img alt="logo" src={brain}/>
      			</div>
    		</Tilt>
		</div>
		);
}

export default Logo;