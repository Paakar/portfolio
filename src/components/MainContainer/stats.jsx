import * as React from 'react';

class Stats extends React.Component{
    render(){
        return(
            <div id="paakar-counter" class="paakar-counters" /* style="background-image: url(images/cover_bg_1.jpg);" data-stellar-background-ratio="0.5" */>
            <div class="overlay"></div>
            <div class="paakar-narrow-content">
                <div class="row">
                </div>
                <div class="row">
                    <div class="col-md-3 text-center animate-box">
                        <span class="paakar-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span>
                        <span class="paakar-counter-label">Cups of coffee</span>
                    </div>
                    <div class="col-md-3 text-center animate-box">
                        <span class="paakar-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50"></span>
                        <span class="paakar-counter-label">Projects</span>
                    </div>
                    <div class="col-md-3 text-center animate-box">
                        <span class="paakar-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
                        <span class="paakar-counter-label">Clients</span>
                    </div>
                    <div class="col-md-3 text-center animate-box">
                        <span class="paakar-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                        <span class="paakar-counter-label">Partners</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Stats;