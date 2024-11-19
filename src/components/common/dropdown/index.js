const Dropdown = ({options, value, name, onChangeHandler}) =>{
    return <div className="dropdown__wrapper">
                <select name = {name} value = {value} onChange = {onChangeHandler}>
                    {options.map(option =>{
                        return <option value={option.value}>{option.label}</option>
                    })}
                </select>
    </div>
}

export default Dropdown;