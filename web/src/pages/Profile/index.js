import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2  } from 'react-icons/fi'
import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  // Obter id do localStorage
  const ongId = localStorage.getItem('ongId');
  // Obter nome do localStorage
  const ongName = localStorage.getItem('ongName');

  useEffect (() => {
    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      /**
       * Filtrar por incidents com id diferente do removido
       * (atualizar em tempo real após item removido)
       */
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    };
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={ logoImg } alt="Be The Hero logo" />
        <span>Bem vinda, { ongName }</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button
          onClick={ handleLogout }
          type="buton"
        >
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {/* Mapear incidents para cada item */}
        { incidents.map(incident => (
          <li key={ incident.id }>
            <strong>CASO:</strong>
            <p>{ incident.title }</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{ incident.description }</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format( incident.value )}
            </p>

            <button
              onClick={ () => handleDeleteIncident( incident.id )}
              type="button"
            >
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
        </li>
        ))}
      </ul>
    </div>
  );
};