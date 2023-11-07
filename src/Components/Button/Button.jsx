import s from './button.module.scss'
import classnames from 'classnames'
const Button = (props) => {
    const styleBtn = classnames(
        s.btn,
        props.theme === 'light' ? s.btn_light : s.btn_dark
    )
    return (
        <button className={styleBtn}>{props.text}</button>
    )
}

export default Button