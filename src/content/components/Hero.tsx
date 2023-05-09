import heroImgMobile from "@/public/assets/img/hero/hero-main.png";
import Image from "next/image";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const content = {
    imgMain: "/assets/img/hero/hero-main.png",
    imgMobile: heroImgMobile,
    name: "Alex",
    title: "Systems Engineer",
    description: (
        <>
            I{"'"}m a London-based engineer with a serious passion for creating
            intuitive, dynamic user experiences with complex functionality and
            <i style={{ color: "#ffb400" }}> clean, maintainable software</i>.
            <div style={{ marginTop: 14 }} />
            Fueled by high energy levels and{" "}
            <i style={{ color: "#ffb400" }}>boundless enthusiasm</i>, I{"'"}m
            easily inspired to follow my fascinations wherever they take me. As
            an expressive, multi-talented spirit with a natural ability to
            entertain and inspire, I’m never satisfied just thinking of new
            ideas. Instead, I have an{" "}
            <i style={{ color: "#ffb400" }}>impulsive need</i> to act upon them.
            <div style={{ marginTop: 14 }} />I{"'"}m a fast learner, able to
            pick up new skills and juggle different projects and roles with
            relative ease. I love remote-working for agencies, consulting for
            startups, and collaborating with{" "}
            <i style={{ color: "#ffb400" }}>talented mindsets</i> to create
            digital products for both business and consumer use.
            <div style={{ marginTop: 14 }} />
            My <i style={{ color: "#ffb400" }}>abundant energy</i> fuels me in
            the pursuit of many interests, hobbies, areas of study and artistic
            endeavors. Outside of my screen time I{"'"}m a student pilot, an
            astronomer, a tennis fanatic, a competitive swimmer, a lifeguard and
            a pretty good chef.
        </>
    ),

    button: "more about me",
};

export const Hero = ({ setIndex }) => {
    const setAboutPage = () => setIndex(1);
    useEffect(() => {
        if (document) {
            var el = document.getElementById("tw");

            var typewriter = new Typewriter(el, {
                loop: true,
            });

            typewriter
                .typeString("Systems Engineer")
                .pauseFor(2400)
                .deleteChars(8)
                .typeString("Developer")
                .pauseFor(2800)
                .deleteChars(9)
                .typeString("Architect")
                .pauseFor(2400)
                .deleteChars(8)
                .typeString("nalyst")
                .pauseFor(2750)
                .deleteChars(7)
                .typeString("Verifier")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Entrepreneur")
                .pauseFor(5000)
                .start();
        }
    }, []);

    return (
        <>
            <div className="row home-details-container align-items-center">
                <div
                    className="col-lg-4 bg position-fixed d-none d-lg-block"
                    style={{
                        backgroundImage: `url(${content.imgMain})`,
                    }}
                ></div>
                <div className="col-12 col-lg-10 offset-lg-3 home-details">
                    <div>
                        <Image
                            src={content.imgMobile}
                            className="img-fluid main-img-mobile d-sm-block d-lg-none"
                            alt="hero man"
                        />
                        <h1 className="text-uppercase hero-heading poppins-font p-0">
                            Hi, I{"'"}m {content.name}.
                        </h1>
                        <div className="typewriter" id="tw" />
                        <div
                            className="open-sans-font hero-description"
                            // style={{
                            //     fontSize: 16,
                            //     marginBottom: 20,
                            //     fontWeight: "lighter",
                            //     letterSpacing: 0.8,
                            // }}
                        >
                            {content.description}
                        </div>
                        <div className="hero-button">
                            <button className="button" onClick={setAboutPage}>
                                <span className="button-text">
                                    {content.button}
                                </span>
                                <span className="button-icon fa fa-arrow-right"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End home-details-container */}
        </>
    );
};