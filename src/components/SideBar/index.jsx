import * as React from 'react';
class SideBar extends React.Component {
 render(){
     return(
        <aside id="paakar-aside" /* role="complementary" */ className="border js-fullheight">
            <div className="text-center">
                <div className="author-img"></div>
                <h1 id="paakar-logo"><a href="index.html">Prabhakar Shrestha</a></h1>
                <span className="position"><a href="#about">UI/UX Designer</a> in Nepal</span>
            </div>
            <nav id="paakar-main-menu" /* role="navigation" */ className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="#about">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#about">Services</a></li>
                        <li><a href="#about">Skills</a></li>
                        <li><a href="#about">Education</a></li>
                        <li><a href="#about">Experience</a></li>
                        <li><a href="#about">Work</a></li>
                        <li><a href="#about">Blog</a></li>
                        <li><a href="#about">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="paakar-footer">
                <ul>
                    <li><a href="#about"><i className="icon-facebook2"></i></a></li>
                    <li><a href="#about"><i className="icon-twitter2"></i></a></li>
                    <li><a href="#about"><i className="icon-instagram"></i></a></li>
                    <li><a href="#about"><i className="icon-linkedin2"></i></a></li>
                </ul>
            </div>
        </aside>

     )
 }
}

export default SideBar;