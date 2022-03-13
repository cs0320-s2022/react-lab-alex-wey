function TextBox(props: any) {
    const handler = (event: any) => {props.change(event.target.value)};
    return (
        <div>
            <label> {props.label}</label>
            <input type={"text"} onChange={handler}/>
        </div>
    );
}

export default TextBox;