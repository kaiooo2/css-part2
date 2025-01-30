function InputField({ label, type, options }) {
  return (
    <div className="form-group">
      {type === "select" ? (
        <select className="form-control">
          <option
            style={{ display: "none" }}
            value=""
            disabled
            selected
          >
            {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="form-control"
          placeholder={label}
        />
      )}
    </div>
  );
}

export default InputField;