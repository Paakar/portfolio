import * as React from 'react';
import ControlledCarousel from "./banner";
import About from "./about";
import Service from "./service";
import Stats from "./stats";

class MainContainer extends React.Component {
    render() {
        return(
            <div id="paakar-main">
                <ControlledCarousel/>
                <About/>
                <Service/>
                <Stats/>
            </div>
        )
    }
}
export default MainContainer;