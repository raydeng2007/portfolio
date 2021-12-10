import React, { useState, Component, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.scss';
import game from "../../assets/images/projects/game.png";
import blog from "../../assets/images/projects/blog.png";
import tweet from "../../assets/images/projects/trump_img.png";
import chrome from "../../assets/images/projects/chrome.png";
import movie from "../../assets/images/projects/movie.png";

class DisplayCards extends Component {
    render() {
        const { column } = this.props;

        return (
            <div className="main">
                <Hero>
                    <div className="container">
                        {/* <Info /> */}
                        <div className="row">
                            {cards.map((card, i) => (
                                <div className="column">
                                    <Card>
                                        <a target="_blank" href={card.link}>
                                            <div className="card-title">{card.title}</div>
                                            <div className="card-body"><p>{card.description}</p></div>
                                            <Image ratio={card.imageRatio} src={card.image} />
                                        </a>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </Hero>
            </div>
        )
    }
}

function Card({ children }) {
    const ref = useRef();
    const [isHovered, setHovered] = useState(false);

    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            xys: [0, 0, 1],
            config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
        };
    });

    return (
        <animated.div
            ref={ref}
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                // Get mouse x position within card
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX || window.pageXOffset || document.body.scrollLeft));

                // Get mouse y position within card
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY || window.pageYOffset || document.body.scrollTop));

                // Set animated values based on mouse position and card dimensions
                const dampen = 50; // Lower the number the less rotation
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                    (x - ref.current.clientWidth / 2) / dampen, // rotateY
                    1.07 // Scale
                ];

                // Update values to animate to
                console.log(xys)
                setAnimatedProps({ xys: xys });
            }}
            onMouseLeave={() => {
                setHovered(false);
                // Set xys back to original
                setAnimatedProps({ xys: [0, 0, 1] });
            }}

            style={{
                // If hovered we want it to overlap other cards when it scales up
                zIndex: isHovered ? 2 : 1,
                // Interpolate function to handle css changes
                transform: animatedProps.xys.interpolate(
                    (x, y, s) =>
                        `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                )
            }}
        >
            {children}
        </animated.div>
    );
}

function Hero({ children }) {
    return (
        <div className="hero">
            <div className="hero-body">{children}</div>
        </div>
    );
}

function Image({ ratio, src }) {
    return (
        <div className="image-container">
            <div className="image-inner-container">
                <div
                    className="ratio"
                    style={{
                        paddingTop: ratio * 100 + '%'
                    }}
                >
                    <div className="ratio-inner"
                        style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}>
                        <img src={src} />
                    </div>
                </div>
            </div>
        </div >
    );
}


const cards = [
    {
        title: 'Thoughts By Ray 👨🏻‍💻',
        description:
            `Personal Blog designed and built from scratch using Gatsby, Material UI, GraphQL, and React Helmet for SEO. \nSupports multiple features such as code blocks, dark mode toggle, read time estimation as well as filter by tags.\nA place where I share my personal and developement stories.`,
        image: blog,
        link: 'https://raysblog.netlify.app/',
        imageRatio: 0.9
    },
    {
        title: 'Tweet Like Trump 🤳',
        description:
            `A flask application that has an LSTM model trained for 14 hours on Trump's Twitter data which allows user input and predicts how trump would complete the sentence.\nThe model has two hidden LSTM layers that use cross-entropy loss function and optimized with ADAM algorithm \nUses web sockets to fetch live predictions asynchronously to drastically increase prediction speed.`,
        image: tweet,
        link: 'https://tweet-generation.herokuapp.com',
        imageRatio: 784 / 1016
    },
    {
        title: 'NBA Chrome Extension 🏀',
        description:
            `A chrome extension that is made for fans to be able to easily keep track of the scores of their favorite team and their scores from previous games. Published on chrome store with 5 star rating.`,
        image: chrome,
        link: 'https://chrome.google.com/webstore/detail/nba-game-alert/eenjjidegjlphgaapdolmhdhoongphmf?hl=en',
        imageRatio: 839 / 1133
    },
    {
        title: `Conway's Game of Life 🕹`,
        description:
            `A 'zero-player-game' built with React that imitates cellular automaton. The player will be able to change generation speed, grid size as well as generate pre-built patterns. Live official site is deployed on surge.sh.`,
        image: game,
        link: "http://ray-game-of-life.surge.sh",
        imageRatio: 839 / 1133
    },
    {
        title: 'Movie Recommendation Service 🎥',
        description:
            `A movie recommendation service that pulls data from the latest new movies of different genres for when you don't have movie in mind. It's built with react and redux and deployed to surge.sh`,
        image: movie,
        link: "http://moviewatchlist.surge.sh",
        imageRatio: 0.56
    }
];

export default DisplayCards
