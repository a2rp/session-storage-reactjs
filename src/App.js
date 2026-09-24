import { useEffect, useState } from "react";
import { FiBookOpen, FiCode, FiCoffee, FiEye, FiGithub, FiGlobe, FiHeart, FiMail, FiRefreshCw } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import "./App.css";

const publicAsset = (name) => `${process.env.PUBLIC_URL || ""}/${name}`;

const connectLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCode],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const supportLinks = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiBookOpen],
];

function LinkIcons({ links }) {
    return (
        <div className="iconLinks">
            {links.map(([label, href, Icon]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                </a>
            ))}
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const currentViews = sessionStorage.getItem("page_view");
        const nextViews = currentViews === null ? 1 : Number(currentViews) + 1;
        sessionStorage.setItem("page_view", String(nextViews));
        setCount(nextViews);
    }, []);

    const refreshCount = () => {
        setCount(Number(sessionStorage.getItem("page_view") || 0));
    };

    return (
        <div className="app">
            <header className="siteHeader">
                <a className="brand" href="#top" aria-label="Session Storage React page view home">
                    <img src={publicAsset("logo.png")} alt="" />
                    <span><small>A2RP LAB</small>Session Storage</span>
                </a>
                <span className="headerStatus"><span className="statusDot" />Browser-only demo</span>
            </header>

            <main className="main" id="top">
                <section className="hero">
                    <div className="heroCopy">
                        <p className="kicker">WEB STORAGE PATTERN</p>
                        <h1>Count visits inside the current browser session.</h1>
                        <p className="intro">This small React app stores a page-view value in sessionStorage. Reloads in the same tab update the count, while a new session starts fresh.</p>
                        <div className="heroActions">
                            <button className="primaryButton" type="button" onClick={refreshCount}><FiRefreshCw aria-hidden="true" /> Read session value</button>
                            <span className="storageNote"><FiEye aria-hidden="true" /> Stored locally in this tab</span>
                        </div>
                    </div>
                    <div className="countCard" aria-live="polite">
                        <FiEye aria-hidden="true" />
                        <span className="count">{count}</span>
                        <span className="countLabel">page views this session</span>
                    </div>
                </section>

                <section className="infoGrid">
                    <article><span className="step">01</span><h2>Open the page</h2><p>The first load creates the page_view key with a value of 1.</p></article>
                    <article><span className="step">02</span><h2>Refresh the tab</h2><p>Each new load reads the stored value and increases it by one.</p></article>
                    <article><span className="step">03</span><h2>End the session</h2><p>Closing the tab clears the session storage value in the browser.</p></article>
                </section>

                <section className="codeCard">
                    <div><p className="kicker">CORE IDEA</p><h2>A tiny storage example with a visible result.</h2></div>
                    <code>sessionStorage.getItem("page_view")</code>
                </section>
            </main>

            <footer className="siteFooter">
                <div className="footerMain">
                    <div className="footerTop"><strong>Small browser APIs, useful interfaces.</strong><span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span></div>
                    <div className="footerGroups"><div><span>Connect</span><LinkIcons links={connectLinks} /></div><div><span>Support</span><LinkIcons links={supportLinks} /></div></div>
                </div>
            </footer>
        </div>
    );
}

export default App;
