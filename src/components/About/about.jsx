/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const About = () => {
    React.useEffect(() => {
        aboutSkillsProgress(
            document.querySelector(".about-cr .skills-box"),
            document.querySelectorAll(".skill-progress .progres"),
            document.querySelector(".about-cr")
        );
    }, []);
    return (
        <section className="about-cr">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 img md-mb50">
                        <img src="/img/intro/1.png" alt="" />
                    </div>
                    <div className="col-lg-5 valign">
                        <div className="cont full-width">
                            <h3 className="color-font">UI / UX Design</h3>
                            <h5 className="co-tit mb-15">
                                Beyond conventional interaction patterns
                            </h5>
                            <p>
                                My work goes beyond conventional interaction
                                patterns and visual styles. I specialize in
                                consumer products that distill complex data into
                                simple and beautiful visualizations.
                            </p>
                            <div className="skills-box mt-40">
                                <div className="skill-item">
                                    <h5 className="fz-14 mb-15">
                                        Apps Development
                                    </h5>
                                    <div className="skill-progress">
                                        <div
                                            className="progres"
                                            data-value="90%"
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <h5 className="fz-14 mb-15">
                                        UI / UX Design
                                    </h5>
                                    <div className="skill-progress">
                                        <div
                                            className="progres"
                                            data-value="80%"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
