import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// Tipo da variável (componente), sempre será React.FC
const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImage} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input type="text" placeholder="Digite o nome do repositório..." />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="test">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/44913085?s=460&u=eb4989f22dfbedabc90d47da4ac166eca4df09d7&v=4"
                        alt="Foto de Perfil"
                    />
                    <div>
                        <strong>test/test</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="test">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/44913085?s=460&u=eb4989f22dfbedabc90d47da4ac166eca4df09d7&v=4"
                        alt="Foto de Perfil"
                    />
                    <div>
                        <strong>test/test</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="test">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/44913085?s=460&u=eb4989f22dfbedabc90d47da4ac166eca4df09d7&v=4"
                        alt="Foto de Perfil"
                    />
                    <div>
                        <strong>test/test</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;