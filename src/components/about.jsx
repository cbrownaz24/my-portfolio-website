import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Python_skill", content: "Python", porcentage: "80%", value: "80" },
        { id: "C++_skill", content: "C++", porcentage: "75%", value: "75" },
        {
          id: "Verilog_skill",
          content: "Verilog",
          porcentage: "65%",
          value: "65"
        },
        { id: "SQL_skill", content: "SQL", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "CUDA_skill",
          content: "CUDA",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "PyTorch_skill",
          content: "PyTorch",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Golang_skill",
          content: "Golang",
          porcentage: "70%",
          value: "70"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am majoring in Electrical and Computer Engineering at Princeton University, with minors in Math, Computer Science, and Machine Learning. I grew up in Phoenix, Arizona, where I played varsity basketball and volleyball, and worked in various tech startups. As of know, my academic focuses are on signal processing, machine learning, and computer architecture. It's so hard to choose between such interesting things!"
        },
        {
          id: "second-p-about",
          content:
            "On this website, you'll find a collection of my some of my previous projects. These cover a wide range of topics, from quantitative finance, machine learning, signal processing, and computer architecture. I've used tools and languages such as Python, C++, CUDA, Verilog, statistical methods, etc. To see the remainder of my projects, please refer to my GitHub linked at the bottom of the page."
        },
        {
          id: "third-p-about",
          content:
            "If you can't already tell from the variety of my projects, I'm always eager to learn new things. And, while I'm proud of the progress I've made so far through these projects, it excites me to think about all the wonderful things that I have yet to learn. I'm always open to new mentorship and desire nothing more than to work in environments where I can simulataneously contribute value and grow personally, professionally, and intellectually."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
