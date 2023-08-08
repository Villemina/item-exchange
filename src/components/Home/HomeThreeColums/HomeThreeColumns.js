import React from 'react';
import "./_homeThreeColumns.scss"
const ThreeColumns = () => {
    return (
        <div className="columns">
            <div className="columns__box">
                <h2 className="colums__box-header">10</h2>
                <h4 className="columns__box-subheader">Oddanych Worków</h4>
                <p className="column__box-text">Lorem ipsum dolor sit amet, consectetur adipisc<br/> Pellentesque vel enim a elit viverra elementuma.<br/> Aliquam erat volutpat.</p>
            </div>
            <div className="columns__box">
                <h2 className="colums__box-header">5</h2>
                <h4 className="columns__box-subheader">Wspartych Organizacji</h4>
                <p className="column__box-text">Lorem ipsum dolor sit amet, consectetur adipisc<br/> Pellentesque vel enim a elit viverra elementuma.<br/> Aliquam erat volutpat.</p>
            </div>
            <div className="columns__box">
                <h2 className="colums__box-header">7</h2>
                <h4 className="columns__box-subheader">Zorganizowanych Zbiórek</h4>
                <p className="column__box-text">Lorem ipsum dolor sit amet, consectetur adipisc<br/> Pellentesque vel enim a elit viverra elementuma.<br/> Aliquam erat volutpat.</p>
            </div>
        </div>
    );
};

export default ThreeColumns;