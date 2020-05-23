import React, { useState, useEffect } from 'react';
// useState = utilizar o estado atual
// useEffect = disparar funções
import api from './services/api';

import './App.css';
import background from './assets/background.jpg';
import Header from './components/Header';

/*
Componente
Propriedade
Estado & Imutabilidade
*/

function App() {
    const [projects, setProjects] = useState([]);
    // useState retorna um array com 2 posições
    // 1. Variável com o seu valor inicial
    // 2. Função para atualizarmos esse valor

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Leo Neves"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects" />

            <img width={500} src={background} alt=""/>

            <ul>
                { projects.map(project => <li key={project.id}>{project.title}</li>) }
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;

