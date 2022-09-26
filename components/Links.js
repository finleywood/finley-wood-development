import Link from "./Link";

function Links() {
    return (
            <ul className="mb-3">
                <li><Link link="https://github.com/finleywood" description="GitHub" /></li>
                <li><Link link="https://www.linkedin.com/in/finley-wood" description="LinkedIn" /></li>
                <li><Link link="https://www.instagram.com/finleyjwood/" description="Instagram" /></li>
                <li><Link link="https://www.twitter.com/finleyjohnwood" description="Twitter" /></li>
            </ul>
    )
}

export default Links;