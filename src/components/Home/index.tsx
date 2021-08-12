import { Container } from './styles'
import profileImg from '../../assets/profile.jpg'

export function Home() {
    return (
        <Container>
            <div>
                <h2>Habilidades</h2>
                <p className="skillname">HTML</p>
                <div className="container">
                    <div className="skills html">100%</div>
                </div>

                <p className="skillname">CSS</p>
                <div className="container">
                    <div className="skills css">100%</div>
                </div>

                <p className="skillname">Javascript</p>
                <div className="container">
                    <div className="skills js">100%</div>
                </div>

                
            </div>
            <img src={profileImg} alt="Minha foto de perfil" />

            <div>
                <h2>Sobre mim...</h2>
                <p>Tenho 22 anos e sou formado em 2020 no curso de Análise e Desenvolvimento de Sistemas e atualmente cursando Desenvolvimento de Software
                    Multiplataforma. 
                </p>
                <p>Moro no interior de SP (Franca) e estou me aperfeiçoando para me tornar um Dev Jr Frontend com algumas habilidades em mobile   =)
                </p>
            </div>



        </Container>
    )
}