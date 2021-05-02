import './form-input.styles.scss';

const FormInput = ({onChangeHandler, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={onChangeHandler} {...otherProps}/>
            {
                label ?
                <label className={`form-input-label ${label.length ? 'shrink' : ''}`}>{label}</label> 
                : null
            }
        </div>
    )
}

export default FormInput