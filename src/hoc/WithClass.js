import React from "react";

const withCLass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);


export default withClass;
