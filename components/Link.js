function Link(props) {
    return ( 
        <div className="font-poppins underline text-blue-500">
            <a className="mt-3 mb-3" href={props.link}>{props.description}</a>
        </div>
    );
}

export default Link;