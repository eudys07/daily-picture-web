import React from "react";

const ResponsiveImage = (props) => {
    return (
        <img className="responsive-img" src={props.imageUrl} width="700"/>
    );
};

export default ResponsiveImage;