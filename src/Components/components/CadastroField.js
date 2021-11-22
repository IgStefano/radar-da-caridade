function CadastroField(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className={props.className}
        style={props.style}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        readOnly={props.readOnly}
      />
    </div>
  );
}

export default CadastroField;
