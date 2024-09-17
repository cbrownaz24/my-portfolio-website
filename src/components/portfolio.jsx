import React from "react";

//import stock images
import raft from "../img/raft.png";
import resumearchtech from "../img/resume-archtech.png";
import protein from "../img/protein.png";
import hmm from "../img/hmm.png";
import cpu from "../img/cpu.png";
import cuda from "../img/cuda.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here's a subset of my projects. These are the ones I most enjoyed, and which are some of the largest.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cbrownaz24/Raft-Distributed-Consensus" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={raft} alt="RAFT Distributed Consensus" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">RAFT Distributed Consensus</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Golang, Distributed Systems</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cbrownaz24/ResumeArchtech" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={resumearchtech} alt="Resume ArchTech" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Resume ArchTech</h2>
                        <div className="w-more">
                          <span className="w-ctegory">React, Node.js, MongoDB</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cbrownaz24/PDT-FINAL" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={protein} alt="Protein Dynamics Using Transformers" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Protein Dynamics Using Transformers</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Python, PyTorch, Molecular Dynamics, NumPy, CUDA, Slurm</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cbrownaz24/HMM-Lesson" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={hmm} alt="Hidden Markov Models" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Hidden Markov Models</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Python, Hidden Markov Model, NumPy, Pandas</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cbrownaz24/Programmable-CPU" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={cpu} alt="Programmable 16-Bit, Turing Complete CPU" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Programmable 16-Bit, Turing Complete CPU</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Verilog, RTL, Computer Architecture, Assembly</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cbrownaz24/CUDA-Histogram" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={cuda} alt="Speedy Histogram Using CUDA" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Speedy Histogram Using CUDA</h2>
                        <div className="w-more">
                          <span className="w-ctegory">CUDA, CMake, C++</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
