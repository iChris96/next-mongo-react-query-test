import styles from '/styles/Button.module.css'

const Button = (props) => {
    const backgroundColor = props.backgroundColor ?? 'rgb(247, 214, 31)';

    if (props.href) {
        return <a {...props} />
    }

    return <button
        className={`${styles.button} ${props.className}`}
        style={{ backgroundColor }}
        type="button"
        color='red'
        {...props}
    />
}

export default Button