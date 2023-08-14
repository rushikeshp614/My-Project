import React from "react"
import { useNavigate } from "react-router-dom"
import Arrow from "./Arrow"



function LandingPage() {
   
    const navigate = useNavigate();
    const handleArrowClick = () => {
        // Replace '/next-page' with the actual path of the next page you want to navigate to
        navigate('/homepage');
      };

    return (

       




        <div className="landingPageBody">
            <section className="colored-section" id="title">
                <div className="container-fluid" >

                    {/* Nav-Bar */}

                    <nav className="navbar navbar-expand-lg navbar-dark">

                        <a className="navbar-brand" href="#">My App</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#footer">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Log out</a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    {/* <!-- Title --> */}

                    <div className="row">

                        <div className="col-lg-6">
                            <h1 className="big-heading">Programming is learned by writing programs.</h1>

                        </div>

                        <div className="col-lg-6">
                            <img className="title-image" src="./images/giphy_programming.gif" alt="programming-gif" />
                        </div>

                    </div>

                </div>




            </section>
            
            {/* <!-- Testimonials --> */}

            <section className="colored-section" id="testimonials">

                <div id="testimonial-carousel" className="carousel slide" data-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active container-fluid">
                            <h2 className="testimonial-text">My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library support, and optional named parameters.</h2>
                            <em>Bram Cohen</em>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="testimonial-text">The joy of coding Python should be in seeing short, concise, readable classNamees that express a lot of action in a small amount of clear code -- not in reams of trivial code that bores the reader to death.</h2>
                            <em>Guido van Rossum</em>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="testimonial-text">Everyone knows that any scripting language shootout that doesn't show Python as the best language is faulty by design.</h2>
                            <em>Max M</em>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>

            </section>
            <section className="white-section" id="cta">

                <div className="container-fluid">

                    <h3 className="big-heading">Let' get started with learning some basic of python.</h3>
                    <img className="python-img" src="./images/giphy_python.gif" alt="python-programming-gif" />
                    
                </div>
                {/* <button className="arrow" onClick={handleArrowClick}> */}
                <Arrow className="arrow" onClick={handleArrowClick}/>
      {/* </button> */}
            </section>


        </div>
    )
}


export default LandingPage