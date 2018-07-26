import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';


class Skills extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        
    }
    /* var onChange = function (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
      }; */
    onChange = (isVisible) => {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        if (isVisible == true){
            this.setState(
                {
                    show: true

                }
            )
        }
    }

    render(){
        return (
            <section className="paakar-skills" data-section="skills">
            <VisibilitySensor onChange={this.onChange} />
            <div className="paakar-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="paakar-heading animate-box">My Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" >
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                    </div>
                    <div className="col-md-6 animate-box" >
                        <div className="progress-wrap">
                            <h3>Photoshop</h3>
                            <div className="progress">
                                 <div className={`progress-bar color-1 ${this.state.show ? 'visible' : 'novisible'}`} role="progressbar" aria-valuenow="75"
                                  aria-valuemin="0" aria-valuemax="100" >
                                <span>75%</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>jQuery</h3>
                            <div className="progress">
                                 <div className={`progress-bar color-2 ${this.state.show ? 'visible' : 'novisible'}`} role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" >
                                <span>60%</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" >
                        <div className="progress-wrap">
                            <h3>HTML5</h3>
                            <div className="progress">
                                 <div className={`progress-bar color-3 ${this.state.show ? 'visible' : 'novisible'}`} role="progressbar" aria-valuenow="85"
                                  aria-valuemin="0" aria-valuemax="100" >
                                <span>85%</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>CSS3</h3>
                            <div className="progress">
                                 <div className={`progress-bar color-4 ${this.state.show ? 'visible' : 'novisible'}`} role="progressbar" aria-valuenow="90"
                                  aria-valuemin="0" aria-valuemax="100">
                                <span>90%</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" >
                        <div className="progress-wrap">
                            <h3>WordPress</h3>
                            <div className="progress">
                                 <div className={`progress-bar color-5 ${this.state.show ? 'visible' : 'novisible'}`} aria-valuenow="70"
                                  aria-valuemin="0" aria-valuemax="100">
                                <span>70%</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>SEO</h3>
                            <div className="progress">
                                 <div className={`progress-bar color-6 ${this.state.show ? 'visible' : 'novisible'}`} role="progressbar" aria-valuenow="80"
                                  aria-valuemin="0" aria-valuemax="100">
                                <span>80%</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Skills;