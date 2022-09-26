import Links from "./Links";

function Footer() {
    return ( 
        <footer className="w-full flex flex-col justify-between items-center pt-5 pb-5">
            <Links />
            <p>© Finley Wood {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;