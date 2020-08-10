import React, { useState, useEffect, FormEvent } from 'react';
// Navegar entre rotas, sem recarregar a página
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
// Importação de acesso a API
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

// Tipo da variável (componente), sempre será React.FC
const Dashboard: React.FC = () => {
    // Armazenar o valor do input
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } 
    
        return[];    
    });

    const [inputError, setInputError] = useState('');

    // Disparar uma função como primeiro parâmetro sempre que uma variável alterar  
    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        // Adição de um novo repositório - Consumir API do Github - Salvar novo repositório no estado
        event.preventDefault();
        
        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório.');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([ ...repositories, repository ]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por esse repositório');
        }
    }

    return (
        <>
            <img src={logoImage} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input 
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório..." 
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* Se inputError estiver peenchida */}
            { inputError && <Error>{inputError}</Error> }

            <Repositories>
                {repositories.map((repository) => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                        <img 
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;