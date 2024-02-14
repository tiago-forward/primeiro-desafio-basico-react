import TransformingText from "../transforming-text/transforming-text";

const ParagraphText = () => {
    return (
        <>
            <TransformingText
                text='Dê um bom nome ao seu componente.'
                color='red' />
            <TransformingText
                text='Faça o componente renderizar na tela um parágrafo colorido e com todas as letras maiúsculas usando JS.'
                color='blue' />
            <TransformingText
                text='Utilize props para passar o texto e a cor de texto desejada para dentro do componente (a cor pode ser uma palavra, como red, ou um hexadecimal).'
                color='orange' />
            <TransformingText
                text='Pode utilizar o style inline para colorir o componente da forma que foi mostrado nas aulas.'
                color='darkred' />
            <TransformingText
                text='Crie um componente Button com um evento de clique que apresente um alerta informando a prop label do botão que foi clicado, com a seguinte mensagem: "A label desse botão é <insira a label aqui via JS>'
                color='#ff6f2f' />
            <TransformingText />
        </>
    );
}

export default ParagraphText;