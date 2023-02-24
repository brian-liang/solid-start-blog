import {createSignal} from 'solid-js'
type buttonProps = {
    text: string
}

const Button = (props : buttonProps) => {
    const [buttonText, setButtonText] = createSignal(props.text || 'Click me!')
    return (
        <button onClick={() => setButtonText(buttonText() + '🔥')}>
            {buttonText()}
        </button>
    )
}

export default Button
