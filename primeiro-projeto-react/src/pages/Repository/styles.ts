import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 40px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #727280;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;

                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        /* Aplicar o efeito através do segundo elemento da lista (Elementos precedido) */
        & + a {
            margin-top: 15px;
        }

        img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-style: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        /* Ícone */
        svg {
            /* Colocar o ícone para direita */
            margin-left: auto ;
            color: #cbcbd6;
        }
    }
`;