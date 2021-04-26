import preloader from "../../../assets/img/loader.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={{background: 'white'}}>
        <img src={preloader} />
    </div>
}

export default Preloader;