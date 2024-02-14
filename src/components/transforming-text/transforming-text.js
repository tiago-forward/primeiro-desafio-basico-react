import './transforming-text.css'

const TransformingText = ({text, color}) => {
    return (
        <p className='paragrafo' style={{color: color}}>{text.toUpperCase()}</p>
    );
}

TransformingText.defaultProps = {
    text: 'Texto vazio!',
    color: 'black'
}

export default TransformingText;