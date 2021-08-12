import { Container } from './styles'

export function Header(){
    return(
        
        <Container>
            <h1><a href="/home">Julio Rodrigues</a></h1>
            <ul>

                <li>
                    <a href="/meusProjetocs">Meus projetos</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/juliocrodrigues/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/JulioCRodrigues" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </Container>
    )
}