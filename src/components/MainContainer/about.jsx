import * as React from 'react';

class About extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                id: 1,
                name: 'Graphic Design',
                icon: 'icon-bulb',
                style: 'color-1'
            },
            {
                id: 2,
                name: 'Website Design',
                icon: 'icon-globe-outline',
                style: 'color-2'
            },
            {
                id: 3,
                name: 'Graphic Design',
                icon: 'icon-bulb',
                style: 'color-1'
            },
            {
                id: 4,
                name: 'Website Design',
                icon: 'icon-globe-outline',
                style: 'color-2'
            },
            {
                id: 5,
                name: 'Graphic Design',
                icon: 'icon-bulb',
                style: 'color-1'
            }
        ]
        }
    }


    render(){
        return(
            <section className="paakar-about" data-section="about" id="about">
            <div className="paakar-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Us</span>
                                    <h2 className="paakar-heading">Who Am I?</h2>
                                    <p><strong>Hi I'm Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.items.map((item) => {
                                return (
                                    <div key={item.id} className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className={`services ${item.style}`}>
                                            <span className="icon2">
                                                <i className={`${item.icon}`}/>
                                            </span>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                            {/* <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                <div className="services color-1">
                                    <span className="icon2"><i className="icon-bulb"></i></span>
                                    <h3>Graphic Design</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                <div className="services color-2">
                                    <span className="icon2"><i className="icon-globe-outline"></i></span>
                                    <h3>Web Design</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                <div className="services color-3">
                                    <span className="icon2"><i className="icon-data"></i></span>
                                    <h3>Software</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                <div className="services color-4">
                                    <span className="icon2"><i className="icon-phone3"></i></span>
                                    <h3>Application</h3>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="hire">
                                    <h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
                                    <a href="#" className="btn-hire">Hire me</a>
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
export default About;