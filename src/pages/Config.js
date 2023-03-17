/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';
import configImage from '../images/configImage.png';

export default function Config() {
  const history = useHistory();

  return (
    <div className="config-container">
      <h3>
        Simulando um dispositivo mobile
      </h3>

      <ol>
        <li>
          Primeiro acesse o Chrome DevTools:
          <p>
            <br />
            Windows ou Linux: Ctrl + Shift + C
            <br />
            Mac: Cmd + Option + C
          </p>
        </li>
        <br />
        <li>
          Entre no modo device mode:
          <p>
            <br />
            Windows ou Linux: Ctrl + Shift + M
            <br />
            Mac: Cmd + Option + M
          </p>
        </li>
        <br />
        <li>
          Ajuste a dimensão na parte superior, recomendo a 390x844 simulando um Iphone 12 Pro.
        </li>
        <br />
        <li>
          Por fim com a dimensão ajustada, clique no botão abaixo para ser redirecionado para a aplicação.
        </li>
        <br />
      </ol>
      <button
        type="button"
        className="app-button"
        onClick={ () => history.push('/foods') }
      >
        Aplicação
      </button>
      <br />
      <br />

      <h4>Demonstração</h4>

      <img
        src={ configImage }
        alt="config example"
        width="75%"
      />
    </div>
  );
}
