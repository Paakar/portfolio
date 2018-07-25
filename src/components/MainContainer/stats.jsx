import * as React from 'react';
import CountUp from 'react-countup';

class Stats extends React.Component{
    render(){
        return(
            <div id="paakar-counter" className="paakar-counters" /* style="background-image: url(images/cover_bg_1.jpg);" data-stellar-background-ratio="0.5" */>
            <div className="overlay"></div>
            <div className="paakar-narrow-content">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-3 text-center animate-box">
                        {/* <span className="paakar-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span> */}
                        <CountUp
                            start={0}
                            end={309}
                            duration={50}
                        />
                        <span className="paakar-counter-label">Cups of coffee</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="paakar-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50"></span>
                        <span className="paakar-counter-label">Projects</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="paakar-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
                        <span className="paakar-counter-label">Clients</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="paakar-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                        <span className="paakar-counter-label">Partners</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Stats;