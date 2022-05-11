import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Skils",
      tab4 = "Education";
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
                          Experienced with different machine learning techniques such as: LSTM for NLP, matrix factorization 
                          for recommendation systems, wavelet transform for noise redeuction in signal processing, word vectorization
                          for word embeddings, SNN for clustering data and many more ;) 
                        </li>
                        <li>
                          <a href="/service">
                            Web3 Development
                          </a>
                          Built end to end projects that include custom smart contracts for 
                          minting ERC20 and ERC721 tokens using Solidity.
                          Experienced with Web3.js and ethers.js libraries that interact
                          with the Ethereum blockchain.
                          Familiar with 3rd party services like Alchemy, chainlink and pinata 
                          that provide blockchain and IPFS services.
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
