import * as React from 'react';
import ControlledCarousel from "./banner";
import About from "./about";
import Service from "./service";
import Stats from "./stats";
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import Contact from './contact';

class MainContainer extends React.Component {
    render() {
        return(
            <div id="paakar-main">
                <ControlledCarousel/>
                <About/>
                <Service/>
                <Stats/>
                <Skills/>
                <Education/>
                <Experience/>
                <Contact/>
            </div>
        )
    }
}
export default MainContainer;