import React from 'react';

import { Container, Header, Content, Card  } from './styles';

import socrates from '../../assets/socrates-min.png';
import clovis from '../../assets/clovis.png';
import leesin from '../../assets/lee-sin.png'
import madeline from '../../assets/madeline.png';
import divertidamente from '../../assets/divertidamente.png';

const Landing: React.FC = () => {
    return (
        <Container>
            <Header>
                <h1>Autoconhecimento</h1>
            </Header>

            <Content>
                <h1>
                    O autoconhecimento é a habilidade de conhecer nosso mundo interno, nossas emoções, pensamentos, 
                    medos, crenças, frustações e assim por diante.
                </h1>

                <h1>
                    Ele nos ajuda a melhorar nossa relação com nós mesmos mas 
                    também nossa relação com o mundo
                </h1>



                <Card>
                    <div>
                        <h1>
                            Socrates dizia que o reconhecer a própria ignorância é o primeiro passo para a busca da verdade
                        </h1>
                        <h1>"Conhece a ti mesmo"</h1>
                        <h1>"Antes de lançar-se em busca da verdade, o homem deve antes analisar-se e reconhecer sua própria ignorância"</h1>
                    </div>
                    
                    <img src={socrates} alt="socrates"></img>
                </Card>


                <Card>
                    <a target="__blank" href="https://youtu.be/pLFLum2PKH0"><img src={clovis} alt="Professor Clóvis"></img></a>
                    <div>
                        <h1>
                            "A humildade diante da própria ignorância confere a nós a tolerância de ouvir o outro, 
                            de considerar o outro, e de levantar até a possibilidade do outro ter razão.
                            Essa humildade constrói relações de confiança entre as pessoas, e juntos, dialogando, debatendo, 
                            alcançamos resultados de inteligencia superiores a aqueles que tinhamos em nossa
                            ignorância de certezas mentirosas"
                        </h1>
                    </div>
                </Card>

                <Card>
                    <div>
                        <h1>Divertida Mente é um convite ao autoconhecimento e ao entendimento das emoções e sentimentos</h1>
                    </div>
                    <a target="__blank" href="https://youtu.be/LSpeM7G4zfY"><img src={divertidamente} alt="divertidamente"></img></a>
                </Card>

                <Card>
                    <a target="__blank" href="https://youtu.be/X3xl16D1U34"><img src={madeline} alt="madeline"></img></a>
                    <div>
                    <h1>
                        Celeste é um jogo sobre o autodescobrimento de uma garota que precisa escalar uma montanha, 
                        uma aventura que fala sobre reconhecer todas as partes de si, sejam elas boas ou ruins.
                        <p>
                        A dificuldade do jogo serve como uma alegoria pra dificuldade que todos temos para 
                        reconhecer nossos problemas.
                        </p>
                    </h1>
                    </div>
                </Card>


                <Card>
                    <div>
                        <h1>Domine a si mesmo e dominará o inimigo</h1>
                        <h1>Lee sin</h1>
                    </div>
                    <img src={leesin} alt="lee-sin filosofo"></img>
                </Card> 
            </Content>
        </Container>
    )
}

export default Landing;