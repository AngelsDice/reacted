import React, {Component} from 'react';
import defaultImage from './loader.svg';
import './Loader.css';

class Loader extends Component{
    render() {
        const {
            displayText,
            position,
            loaderImg
        } = this.props;
        return (
            <div className="LoaderComp">
                <div className={"text-"+position}>
                    <span className="sr-only">{displayText}</span>
                    <img src={loaderImg} alt="" aria-hidden="true" />
                </div>
            </div>
        );
    }
}

Loader.PropTypes = {
    displayText:React.PropTypes.string,
    position:React.PropTypes.oneOf(['center', 'left', 'right']),
    loaderImg:React.PropTypes.object
};

Loader.defaultProps = {
    displayText:'Loading',
    position:'center',
    loaderImg:defaultImage
};

export default Loader;