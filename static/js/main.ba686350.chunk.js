(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{157:function(e,t,s){},414:function(e,t,s){},415:function(e,t,s){},423:function(e,t,s){"use strict";s.r(t);var c=s(10),i=s(13),a=s(14),n=s(15),r=s(3),l=s.n(r),o=s(26),d=s.n(o),j=(s(156),s(157),s(136)),h=s.n(j),b=s(56),m=s(137),u=s(1),x=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)(l.a.Fragment,{children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)("title",{children:this.props.pageTitle}),Object(u.jsx)("meta",{name:"description",content:"web development, react development, javascript, html, css, redux, mechanical engineering, design, photoshop, illustrator."})]})})}}]),s}(r.Component),O=s(145),p=s(40),g=s(50),v=s(140),f=s.n(v),w=s.p+"static/media/logo.5032a41b.svg",N=[{Social:Object(u.jsx)(g.b,{}),link:"https://www.linkedin.com/in/raymond-deng-1196a1126/"},{Social:Object(u.jsx)(g.a,{}),link:"https://github.com/raydeng2007"}],y=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).menuTrigger=i.menuTrigger.bind(Object(p.a)(i)),i.CLoseMenuTrigger=i.CLoseMenuTrigger.bind(Object(p.a)(i)),i.stickyHeader=i.stickyHeader.bind(Object(p.a)(i)),window.addEventListener("load",(function(){})),i}return Object(i.a)(s,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")}));var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var s=this.props.color,c=void 0===s?"default-color":s,i=Object(u.jsx)("img",{style:{width:"30px",opacity:.8},src:w,alt:"Ghost"});return Object(u.jsx)("header",{className:"header-area header-style-two header--fixed ".concat(c),children:Object(u.jsxs)("div",{className:"header-wrapper",children:[Object(u.jsxs)("div",{className:"header-left d-flex align-items-center",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("a",{href:this.props.homeLink,children:i})}),Object(u.jsx)("nav",{className:"mainmenunav d-lg-block ml--50",children:Object(u.jsxs)(f.a,{className:"mainmenu",items:["home","about","service","portfolio","contact"],currentClassName:"is-current",offset:-200,children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#service",children:"Experience"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#portfolio",children:"Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#contact",children:"Contact"})})]})})]}),Object(u.jsxs)("div",{className:"header-right",children:[Object(u.jsx)("div",{className:"social-share-inner",children:Object(u.jsx)("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle",children:N.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"".concat(e.link),children:e.Social})},t)}))})}),Object(u.jsx)("div",{className:"humberger-menu d-block d-lg-none pl--20",children:Object(u.jsx)("span",{onClick:this.menuTrigger,className:"menutrigger text-white",children:Object(u.jsx)(b.b,{})})}),Object(u.jsx)("div",{className:"close-menu d-block d-lg-none",children:Object(u.jsx)("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger",children:Object(u.jsx)(b.c,{})})})]})]})})}}]),s}(r.Component),k=[{Social:Object(u.jsx)(g.b,{}),link:"https://www.linkedin.com/in/raymond-deng-1196a1126/"},{Social:Object(u.jsx)(g.a,{}),link:"https://github.com/raydeng2007"}],S=function(){return Object(u.jsx)("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1 bg_color--1","data-black-overlay":"6",children:Object(u.jsx)("div",{className:"wrapper plr--50 plr_sm--20",children:Object(u.jsxs)("div",{className:"row align-items-center justify-content-between",children:[Object(u.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",children:Object(u.jsx)("div",{className:"inner",children:Object(u.jsx)("div",{className:"logo text-center text-sm-left mb_sm--20",children:Object(u.jsx)("a",{href:"/home-one",children:Object(u.jsx)("img",{style:{height:"36px"},src:w,alt:"Logo images"})})})})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",children:Object(u.jsx)("div",{className:"inner text-center",children:Object(u.jsx)("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle",children:k.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"".concat(e.link),children:e.Social})},t)}))})})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12",children:Object(u.jsx)("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20",children:Object(u.jsx)("div",{className:"text",children:Object(u.jsxs)("p",{children:["Made with ",Object(u.jsx)("span",{children:"\u2665"})," by Raymond | Copyright \xa9 2021 "]})})})})]})})})},C=s(43),T=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this.props.tabStyle;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"tabs-area",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsxs)(C.d,{children:[Object(u.jsxs)(C.b,{className:"".concat(e),children:[Object(u.jsx)(C.a,{children:"Skils"}),Object(u.jsx)(C.a,{children:"Education"})]}),Object(u.jsx)(C.c,{children:Object(u.jsx)("div",{className:"single-tab-content",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/service",children:"Web Development"}),"Familiar with multiple front end libraries including: React, NextJS, MaterialUI, GatsbyJS.",Object(u.jsx)("br",{}),"Backend frameworks such as Django, Flask, Golang microservices. ",Object(u.jsx)("br",{}),"Authorization flows such as Oauth 2.0 for exchange of access tokens, JWTs etc."]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/service",children:"Data Science"}),"Experienced with different machine learning techniques such as: LSTM for NLP, matrix factorization for recommendation systems, wavelet transform for noise redeuction in signal processing, word vectorization for word embeddings, SNN for clustering data and many more ;)"]})]})})}),Object(u.jsx)(C.c,{children:Object(u.jsx)("div",{className:"single-tab-content",children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsxs)("a",{href:"/service",children:["Bachelors of Mathematics, Honours Statistics",Object(u.jsx)("span",{children:" - University of Waterloo, 2020"})]}),Object(u.jsx)("br",{}),"Relevant Courses: ",Object(u.jsx)("br",{}),"Data Structures and Algorithms, Generalized Linear Models, Databases, Markov Chains, Statistical Forecasting",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"GPA: ",Object(u.jsx)("br",{}),'"Matters a lot after you graduate, it does not" - Yoda when asked about his thoughts on GPA']})})})})]})})})})})})}}]),s}(r.Component),L=s(146),A=s(141),M=s.n(A),E=s(447),D=s(446);function R(e){return Object(u.jsx)(D.a,Object(L.a)({elevation:6,variant:"filled"},e))}var I=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).handleClick=function(){i.setState({open:!0})},i.handleClose=function(e,t){"clickaway"!==t&&i.setState({open:!1})},i.sendEmail=function(e){e.preventDefault(),i.state.rnName&&i.state.rnEmail?(M.a.send("service_oc8qznf","template_oc0q9be",{rnEmail:i.state.rnEmail,rnSubject:i.state.rnSubject,rnMessage:i.state.rnMessage,rnName:i.state.rnName},"user_HDJ1SCLZ6I6ByO7Ey8D36").then((function(e){i.handleClick()}),(function(e){console.log(e.text)})),i.setState({rnName:"",rnEmail:"",rnSubject:"",rnMessage:""})):alert("Please fill in the contact form before submitting")},i.state={rnName:"",rnEmail:"",rnSubject:"",rnMessage:"",open:!1},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"contact-form--1",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("center",{children:Object(u.jsxs)("div",{className:"col-lg-8 order-2 order-lg-1",children:[Object(u.jsxs)("div",{className:"section-title text-left mb--50",children:[Object(u.jsx)("h2",{className:"title",children:this.props.contactTitle}),Object(u.jsxs)("p",{className:"description",children:["I am available for full time, part time and freelance work. Connect with me via email:",Object(u.jsxs)("a",{href:"mailto:r6deng@uwaterloo.ca",children:[" ","r6deng@uwaterloo.ca"]})," "]})]}),Object(u.jsx)("div",{className:"form-wrapper",children:Object(u.jsxs)("form",{onSubmit:this.sendEmail,children:[Object(u.jsx)("label",{style:{float:"left",width:"48%"},htmlFor:"item01",children:Object(u.jsx)("input",{type:"text",name:"name",id:"item01",value:this.state.rnName,onChange:function(t){e.setState({rnName:t.target.value})},placeholder:"Your Name *"})}),Object(u.jsx)("label",{style:{float:"right",width:"48%"},htmlFor:"item02",children:Object(u.jsx)("input",{type:"email",name:"email",id:"item02",value:this.state.rnEmail,onChange:function(t){e.setState({rnEmail:t.target.value})},placeholder:"Your email *"})}),Object(u.jsx)("label",{htmlFor:"item03",children:Object(u.jsx)("input",{type:"text",name:"subject",id:"item03",value:this.state.rnSubject,onChange:function(t){e.setState({rnSubject:t.target.value})},placeholder:"Write a Subject"})}),Object(u.jsx)("label",{htmlFor:"item04",children:Object(u.jsx)("textarea",{type:"text",id:"item04",name:"message",value:this.state.rnMessage,onChange:function(t){e.setState({rnMessage:t.target.value})},placeholder:"Your Message"})}),Object(u.jsx)("button",{className:"rn-btn btn-solid",type:"submit",value:"submit",name:"submit",id:"mc-embedded-subscribe",children:"Submit"})]})})]})})}),Object(u.jsx)(E.a,{open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,children:Object(u.jsx)(R,{onClose:this.handleClose,severity:"success",children:"Email sent!"})})]})}}]),s}(r.Component),_=s(143),P=s.n(_),G=s.p+"static/media/profile.f46f58e8.jpeg",W=s.p+"static/media/resume.0c54f137.pdf",z=s(22),B=s(92),F=(s(414),s.p+"static/media/game.572be160.png"),H=s.p+"static/media/blog.d01635d4.png",q=s.p+"static/media/trump_img.24512555.png",J=s.p+"static/media/chrome.64dc550b.png",Y=s.p+"static/media/movie.38a4b327.png",U=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){this.props.column;return Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(Q,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:K.map((function(e,t){return Object(u.jsx)("div",{className:"column",children:Object(u.jsx)(X,{children:Object(u.jsxs)("a",{target:"_blank",href:e.link,children:[Object(u.jsx)("div",{className:"card-title",children:e.title}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("p",{children:e.description})}),Object(u.jsx)(V,{ratio:e.imageRatio,src:e.image})]})})})}))})})})})}}]),s}(r.Component);function X(e){var t=e.children,s=Object(r.useRef)(),c=Object(r.useState)(!1),i=Object(z.a)(c,2),a=i[0],n=i[1],l=Object(B.useSpring)((function(){return{xys:[0,0,1],config:{mass:10,tension:400,friction:40,precision:1e-5}}})),o=Object(z.a)(l,2),d=o[0],j=o[1];return Object(u.jsx)(B.animated.div,{ref:s,className:"card",onMouseEnter:function(){return n(!0)},onMouseMove:function(e){var t=e.clientX,c=e.clientY,i=t-(s.current.offsetLeft-(window.scrollX||window.pageXOffset||document.body.scrollLeft)),a=[-(c-(s.current.offsetTop-(window.scrollY||window.pageYOffset||document.body.scrollTop))-s.current.clientHeight/2)/50,(i-s.current.clientWidth/2)/50,1.07];console.log(a),j({xys:a})},onMouseLeave:function(){n(!1),j({xys:[0,0,1]})},style:{zIndex:a?2:1,transform:d.xys.interpolate((function(e,t,s){return"perspective(700px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(s,")")}))},children:t})}function Q(e){var t=e.children;return Object(u.jsx)("div",{className:"hero",children:Object(u.jsx)("div",{className:"hero-body",children:t})})}function V(e){var t=e.ratio,s=e.src;return Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("div",{className:"image-inner-container",children:Object(u.jsx)("div",{className:"ratio",style:{paddingTop:100*t+"%"},children:Object(u.jsx)("div",{className:"ratio-inner",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:Object(u.jsx)("img",{src:s})})})})})}var K=[{title:"Thoughts By Ray \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb",description:"Personal Blog designed and built from scratch using Gatsby, Material UI, GraphQL, and React Helmet for SEO. \nSupports multiple features such as code blocks, dark mode toggle, read time estimation as well as filter by tags.\nA place where I share my personal and developement stories.",image:H,link:"https://raysblog.netlify.app/",imageRatio:.9},{title:"Tweet Like Trump \ud83e\udd33",description:"A flask application that has an LSTM model trained for 14 hours on Trump's Twitter data which allows user input and predicts how trump would complete the sentence.\nThe model has two hidden LSTM layers that use cross-entropy loss function and optimized with ADAM algorithm \nUses web sockets to fetch live predictions asynchronously to drastically increase prediction speed.",image:q,link:"https://tweet-generation.herokuapp.com",imageRatio:784/1016},{title:"NBA Chrome Extension \ud83c\udfc0",description:"A chrome extension that is made for fans to be able to easily keep track of the scores of their favorite team and their scores from previous games. Published on chrome store with 5 star rating.",image:J,link:"https://chrome.google.com/webstore/detail/nba-game-alert/eenjjidegjlphgaapdolmhdhoongphmf?hl=en",imageRatio:839/1133},{title:"Conway's Game of Life \ud83d\udd79",description:"A 'zero-player-game' built with React that imitates cellular automaton. The player will be able to change generation speed, grid size as well as generate pre-built patterns. Live official site is deployed on surge.sh.",image:F,link:"http://ray-game-of-life.surge.sh",imageRatio:839/1133},{title:"Movie Recommendation Service \ud83c\udfa5",description:"A movie recommendation service that pulls data from the latest new movies of different genres for when you don't have movie in mind. It's built with react and redux and deployed to surge.sh",image:Y,link:"http://moviewatchlist.surge.sh",imageRatio:.56}],Z=U;s(415);var $=function(){return Object(u.jsxs)("div",{className:"work",children:[Object(u.jsx)("div",{className:"card-container",sm:"4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("a",{className:"shadow",href:"https://hypotenuse.ca/",children:[Object(u.jsxs)("div",{className:"card--display",children:[Object(u.jsxs)("i",{className:"material-icons",children:["Software Engineer",Object(u.jsx)("br",{})," "]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"@ Hypotenuse Labs"}),Object(u.jsx)("h6",{children:"Toronto, ON"})]}),Object(u.jsx)("h5",{children:"Apr 2022 - Current"})]}),Object(u.jsxs)("div",{className:"card--hover",children:[Object(u.jsx)("h3",{children:"Summary"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Team lead responsible for building end-to-end full-stack & ML projects for multiple clients, including a luxury product marketplace with 1M+ products and celebrity investors. "})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Technologies utilized include Next.js, Flask, Express.js, PostgreSQL, GCP, etc."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Main duties include architecting, development, CI/CD pipeline, DNS configuration, team management, as well as client communication."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Lead interviews for potential hires."})})]}),Object(u.jsx)("p",{className:"link",children:"Click to see company website"})]})]}),Object(u.jsx)("div",{className:"card--border"})]})}),Object(u.jsx)("div",{className:"card-container",sm:"4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("a",{className:"shadow",href:"https://financialpost.com/news/retail-marketing/lightspeed-partners-with-google-in-global-deal-to-boost-small-businesses-online",children:[Object(u.jsxs)("div",{className:"card--display",children:[Object(u.jsxs)("i",{className:"material-icons",children:["Software Developer II ",Object(u.jsx)("br",{})," "]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"@ Lightspeed"}),Object(u.jsx)("h6",{children:"Toronto, ON"})]}),Object(u.jsx)("h5",{children:"Aug 2020 - Apr 2022"})]}),Object(u.jsxs)("div",{className:"card--hover",children:[Object(u.jsx)("h3",{children:"Summary"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Core developer on a team that built microservices directly integrating Google\u2019s service into Lightspeed as part of a global partnership with Google, our achievement was featured on Yahoo Finance and Financial Post."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Responsible for multiple functionalities such as creating Google Smart Shopping Campaigns using Golang and worked very closely with various Google APIs."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Designed and built an authentication system with scope authorization and token exchange using OAuth2."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Tens of thousands of users use our service for Google Ads and saw average revenue by transaction rise 50%."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Built crucial front-end components and flows with React and NextJS."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Optimized billing flow with Redis and decreased dropoff rate by 27%."})})]}),Object(u.jsx)("p",{className:"link",children:"Click to see news article"})]})]}),Object(u.jsx)("div",{className:"card--border"})]})}),Object(u.jsx)("div",{className:"card-container",sm:"4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("a",{className:"shadow",href:"https://www.liveathos.com/",children:[Object(u.jsxs)("div",{className:"card--display",children:[Object(u.jsxs)("i",{className:"material-icons",children:["Data Scientist (Co-op)",Object(u.jsx)("br",{})]}),Object(u.jsx)("h3",{children:"@ Athos"}),Object(u.jsx)("h6",{children:"Redwood City, CA"}),Object(u.jsx)("h5",{children:"Jan 2020 - Apr 2020"})]}),Object(u.jsxs)("div",{className:"card--hover",children:[Object(u.jsx)("h3",{children:"Summary"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:" Built end to end activity classification model, applying Daubechies wavelet transformation for noise removal and PCA for dimension reduction."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Implemented an automatic rep-detection model for EMG signals using LOESS smoothing, low pass Butterworth filter and continuous wavelet transform."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Design and built backend near-real-time data streaming and processing architecture with InfluxDB, PySpark and AWS Kinesis."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Constructed ETL data pipelines to visualize and transform EMG signal data, performed muscle activation sequence detection by using multivariate statistical analysis."})})]})]})]}),Object(u.jsx)("div",{className:"card--border"})]})}),Object(u.jsx)("div",{className:"card-container",sm:"4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("a",{className:"shadow",href:"https://www.shopbonsai.ca/",children:[Object(u.jsxs)("div",{className:"card--display",children:[Object(u.jsxs)("i",{className:"material-icons",children:["Machine Learning Engineer (Co-op)",Object(u.jsx)("br",{})]}),Object(u.jsx)("h3",{children:"@ Bonsai"}),Object(u.jsx)("h6",{children:"Toronto, ON"}),Object(u.jsx)("h5",{children:"Jan 2019 - Apr 2019"})]}),Object(u.jsxs)("div",{className:"card--hover",children:[Object(u.jsx)("h3",{children:"Summary"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Developed recommendation engine using collaborative filtering that utilizes high dimension user data."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Trained custom Word2Vec, Doc2Vec models on in-app articles and applied cosine similarity between word embeddings to improve article recommendation system"})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Created a shared nearest neighbours classification model from scratch based on a research paper for clustering high dimensional noisy data."})})]})]})]}),Object(u.jsx)("div",{className:"card--border"})]})}),Object(u.jsx)("div",{className:"card-container",sm:"4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("a",{className:"shadow",href:"https://www.walterfedy.com/",children:[Object(u.jsxs)("div",{className:"card--display",children:[Object(u.jsxs)("i",{className:"material-icons",children:["FullStack Developer (Co-op)",Object(u.jsx)("br",{})]}),Object(u.jsx)("h3",{children:"@ WalterFedy"}),Object(u.jsx)("h6",{children:"Waterloo, ON"}),Object(u.jsx)("h5",{children:"May 2018 - Aug 2018"})]}),Object(u.jsxs)("div",{className:"card--hover",children:[Object(u.jsx)("h3",{children:"Summary"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Developed the entire company's service portal from scratch using Django. The site is live on AWS Elastic Beanstalk and is used by 400+ employees."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Setup an automatic deployment system using Jenkins and Docker."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Implemented multiple checkout systems, email notification servers as well as permission groups within the site"})})]})]})]}),Object(u.jsx)("div",{className:"card--border"})]})}),Object(u.jsx)("div",{className:"card-container",sm:"4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("a",{className:"shadow",href:"https://www.traderev.com/en-ca/",children:[Object(u.jsxs)("div",{className:"card--display",children:[Object(u.jsxs)("i",{className:"material-icons",children:["Software Engineer (Co-op)",Object(u.jsx)("br",{})]}),Object(u.jsx)("h3",{children:"@ TradeRev"}),Object(u.jsx)("h6",{children:"Toronto, ON"}),Object(u.jsx)("h5",{children:"Sep 2017 - Dec 2017"})]}),Object(u.jsxs)("div",{className:"card--hover",children:[Object(u.jsx)("h3",{children:"Summary"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Developed live feature of email notification using AWS SQS service."})}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Integrated support tool to attach PDF forms to trade using Grails and Angular."})})]})]})]}),Object(u.jsx)("div",{className:"card--border"})]})})]})},ee=[{textPosition:"text-left",category:"Hey there! I'm Raymond",description:"",buttonText:"",buttonLink:""}],te=function(){return Object(u.jsxs)("div",{className:"active-dark",children:[Object(u.jsx)(x,{pageTitle:"Raymond's Site"}),Object(u.jsx)(y,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),Object(u.jsx)("div",{id:"home",className:"fix",children:Object(u.jsx)("div",{className:"slider-wrapper",children:ee.map((function(e,t){return Object(u.jsxs)("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25",children:[Object(u.jsx)(P.a,{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},params:{particles:{number:{value:600,density:{enable:!1}},size:{value:5,random:!0,anim:{speed:5,size_min:1}},line_linked:{enable:!1},move:{random:!0,speed:2}},interactivity:{detect_on:"canvas",modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:150,duration:4}}}}}),Object(u.jsx)("div",{className:"container",style:{pointerEvents:"none"},children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsxs)("div",{className:"inner ".concat(e.textPosition),children:[Object(u.jsx)("h4",{children:e.category?Object(u.jsx)("span",{children:e.category}):""}),Object(u.jsxs)("h1",{className:"title",children:["I'm a",Object(u.jsx)("br",{}),Object(u.jsxs)(O.a,{interval:1800,children:[Object(u.jsx)("span",{children:" Software Developer"}),Object(u.jsx)("span",{children:" ML Enthusiast"}),Object(u.jsx)("span",{children:" Blogger"}),Object(u.jsx)("span",{children:" Basketball Lover"})]})," "]}),Object(u.jsx)("button",{style:{color:"white",border:"2px solid white",marginTop:"12px",marginBottom:"50px",pointerEvents:"all"},class:"rn-btn btn-solid",children:Object(u.jsx)("a",{style:{color:"white"},href:W,download:"resume.pdf",children:"Download CV"})}),e.description?Object(u.jsx)("p",{className:"description",children:e.description}):"",e.buttonText?Object(u.jsx)("div",{className:"slide-btn",children:Object(u.jsx)("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink),children:e.buttonText})}):""]})})})})]},t)}))})}),Object(u.jsx)("div",{id:"about",className:"fix",children:Object(u.jsx)("div",{className:"about-area ptb--120  bg_color--1",children:Object(u.jsx)("div",{className:"about-wrapper",children:Object(u.jsx)("div",{className:"container about-container",children:Object(u.jsx)("div",{className:"row row--35 align-items-center",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)("div",{className:"about-inner inner",children:Object(u.jsxs)("div",{className:"section-title",children:[Object(u.jsxs)("div",{className:"row row--35 align-items-center",children:[Object(u.jsx)("h2",{className:"title",children:"About Me"}),Object(u.jsxs)("h5",{children:[" ",Object(u.jsx)("br",{})," \xa0 pictured on the right ;) "]})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"row row--35 align-items-center",children:[Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)("div",{className:"thumbnail",children:Object(u.jsx)("img",{className:"w-100",src:G,alt:"About Images"})})}),Object(u.jsx)("div",{className:"col-md-9",children:Object(u.jsx)("p",{className:"description",children:"\n      Hey! I'm Ray. When I'm not petting goats, I'm a software engineer. \n      My work experiences include being a fullstack developer, data \n      scientist and machine learning engineer. \n      I enjoy exploring different areas outside of software as well, \n      I always loved playing & watching basketball, travelling, talking about movies and tv shows, \n      "})})]}),Object(u.jsx)("div",{className:"row mt--30",children:Object(u.jsx)(T,{tabStyle:"tab-style--1"})})]})]})})})})})})})}),Object(u.jsx)("div",{id:"service",className:"fix",children:Object(u.jsx)("div",{className:"service-area creative-service-wrapper ptb--120 bg_color--5",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0",children:Object(u.jsx)("h2",{className:"title",children:"Work Experience"})})})}),Object(u.jsx)("div",{className:"row creative-service",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)($,{})})})]})})}),Object(u.jsx)("div",{id:"portfolio",className:"fix",children:Object(u.jsx)("div",{className:"portfolio-area ptb--120 bg_color--1",children:Object(u.jsx)("div",{className:"portfolio-sacousel-inner",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0",children:Object(u.jsx)("h2",{className:"title",children:"Projects"})})})}),Object(u.jsx)("div",{className:"row projects",children:Object(u.jsx)(Z,{item:"3",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"})})]})})})}),Object(u.jsx)("div",{id:"contact",className:"fix",children:Object(u.jsx)("div",{className:"rn-contact-area ptb--120 bg_color--5",children:Object(u.jsx)(I,{contactTitle:"Get in touch"})})}),Object(u.jsx)(S,{}),Object(u.jsx)("div",{className:"backto-top",children:Object(u.jsx)(h.a,{showUnder:160,children:Object(u.jsx)(b.a,{})})})]})},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)(te,{})}}]),s}(r.Component);d.a.render(Object(u.jsx)(ie,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e).then((function(s){var c=s.headers.get("content-type");404===s.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[423,1,2]]]);
//# sourceMappingURL=main.ba686350.chunk.js.map