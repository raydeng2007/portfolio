import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Education",
      tab4 = "Skills";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Web Development
                          </a>
                          Familiar with multiple front end libraries including: React, NextJS, MaterialUI, GatsbyJS.<br />
                          Backend frameworks such as Django, Flask, Golang microservices. <br />
                          Authorization flows such as Oauth 2.0 for exchange of access tokens, JWTs etc.
                        </li>
                        <li>
                          <a href="/service">
                            Data Science
                          </a>
                          Build websites and web apps using javascript and it's
                          frameworks. I use technologies like HTML, CSS,
                          Javascript, Python, and tools like: VSCode ,React JS
                          ,Angular, Redux, Codesandbox, Github
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>

                        <li>
                          <a href="/service">
                            Bachelors of Mathematics, Honours Statistics
                            <span> - University of Waterloo, 2020</span>
                          </a>
                          <br />
                          Relevant Courses: <br />Data Structures and Algorithms, Generalized Linear
                          Models, Databases, Markov Chains, Statistical Forecasting<br /><br />
                          GPA: <br />"Matters a lot after you graduate, it does not" - Yoda when asked about his thoughts on GPA
                        </li>

                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
