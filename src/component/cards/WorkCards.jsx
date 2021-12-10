import React from "react";
import './workStyle.scss';

function WorkCards() {
    return (
        <div className="work">
            <div className="card-container" sm="4">
                <div className="card">
                    <a className="shadow" href="https://ca.finance.yahoo.com/news/lightspeed-teams-google-help-retailers-110000706.html">
                        <div className="card--display">
                            <i className="material-icons">Software Developer II <br /> </i>
                            <div><h3>@ Lightspeed</h3><h6>Toronto, ON</h6></div>
                            <h5>Aug 2020 - Current</h5>
                        </div>
                        <div className="card--hover">
                            <h3>Summary</h3>
                            <ul>
                                <li>
                                    <p>Core developer on a team that built microservices directly integrating Google’s
                                        service into Lightspeed as part of a global partnership with Google, our achievement
                                        was featured on Yahoo Finance and Financial Post.</p>
                                </li>
                                <li>
                                    <p>Responsible for multiple functionalities such as creating Google Smart Shopping Campaigns using Golang and
                                        worked very closely with various Google APIs.</p>
                                </li>
                                <li>
                                    <p>Designed and built an authentication system with scope authorization and token exchange using OAuth2.</p>
                                </li>
                                <li>
                                    <p>Tens of thousands of users use our service for Google Ads and saw average revenue by transaction rise 50%.</p>
                                </li>
                                <li>
                                    <p>Built crucial front-end components and flows with React and NextJS.</p>
                                </li>
                                <li>
                                    <p>Optimized billing flow with Redis and decreased dropoff rate by 27%.</p>
                                </li>
                            </ul>
                            <p className="link">Click to see news article</p>
                        </div>
                    </a>
                    <div className="card--border" />
                </div>
            </div>
            <div className="card-container" sm="4">
                <div className="card">
                    <a className="shadow" href="https://www.liveathos.com/">
                        <div className="card--display">
                            <i className="material-icons">Data Scientist (Co-op)<br /></i>
                            <h3>@ Athos</h3><h6>Redwood City, CA</h6>
                            <h5>Jan 2020 - Apr 2020</h5>
                        </div>
                        <div className="card--hover">
                            <h3>Summary</h3>
                            <ul>
                                <li>
                                    <p> Built end to end activity classification model, applying Daubechies wavelet transformation for noise removal and PCA for dimension reduction.</p>
                                </li>
                                <li>
                                    <p>Implemented an automatic rep-detection model for EMG signals using LOESS smoothing, low pass Butterworth filter and continuous wavelet transform.</p>
                                </li>
                                <li>
                                    <p>Design and built backend near-real-time data streaming and processing architecture with InfluxDB, PySpark and AWS Kinesis.</p>
                                </li>
                                <li>
                                    <p>Constructed ETL data pipelines to visualize and transform EMG signal data, performed muscle activation sequence detection by using multivariate statistical analysis.</p>
                                </li>
                            </ul>
                        </div>
                    </a>
                    <div className="card--border" />
                </div>
            </div>
            <div className="card-container" sm="4">
                <div className="card">
                    <a className="shadow" href="https://www.shopbonsai.ca/">
                        <div className="card--display">
                            <i className="material-icons">Machine Learning Engineer (Co-op)<br /></i>
                            <h3>@ Bonsai</h3><h6>Toronto, ON</h6>
                            <h5>Jan 2019 - Apr 2019</h5>
                        </div>
                        <div className="card--hover">
                            <h3>Summary</h3>
                            <ul>
                                <li>
                                    <p>Developed recommendation engine using collaborative filtering that utilizes high dimension user data.</p>
                                </li>
                                <li>
                                    <p>Trained custom Word2Vec, Doc2Vec models on in-app articles and applied cosine similarity between word
                                        embeddings to improve article recommendation system</p>
                                </li>
                                <li>
                                    <p>Created a shared nearest neighbours classification model from scratch based on a research
                                        paper for clustering high dimensional noisy data.</p>
                                </li>

                            </ul>
                        </div>
                    </a>
                    <div className="card--border" />
                </div>
            </div>
            <div className="card-container" sm="4">
                <div className="card">
                    <a className="shadow" href="https://www.walterfedy.com/">
                        <div className="card--display">
                            <i className="material-icons">FullStack Developer (Co-op)<br /></i>
                            <h3>@ WalterFedy</h3><h6>Waterloo, ON</h6>
                            <h5>May 2018 - Aug 2018</h5>
                        </div>
                        <div className="card--hover">
                            <h3>Summary</h3>
                            <ul>
                                <li>
                                    <p>Developed the entire company's service portal from scratch using Django. The site is live on AWS
                                        Elastic Beanstalk and is used by 400+ employees.</p>
                                </li>
                                <li>
                                    <p>Setup an automatic deployment system using Jenkins and Docker.</p>
                                </li>
                                <li>
                                    <p>Implemented multiple checkout systems, email notification servers as well as permission
                                        groups within the site</p>
                                </li>

                            </ul>
                        </div>
                    </a>
                    <div className="card--border" />
                </div>
            </div>
            <div className="card-container" sm="4">
                <div className="card">
                    <a className="shadow" href="https://www.traderev.com/en-ca/">
                        <div className="card--display">
                            <i className="material-icons">Software Engineer (Co-op)<br /></i>
                            <h3>@ TradeRev</h3><h6>Toronto, ON</h6>
                            <h5>Sep 2017 - Dec 2017</h5>
                        </div>
                        <div className="card--hover">
                            <h3>Summary</h3>
                            <ul>
                                <li>
                                    <p>Developed live feature of email notification using AWS SQS service.</p>
                                </li>
                                <li>
                                    <p>Integrated support tool to attach PDF forms to trade using Grails and Angular.</p>
                                </li>
                            </ul>
                        </div>
                    </a>
                    <div className="card--border" />
                </div>
            </div>

        </div>
    );
}
export default WorkCards;
