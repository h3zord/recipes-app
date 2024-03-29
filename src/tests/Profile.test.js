import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

import renderWithRouter from './helpers/renderWithRouter';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Testando a página Profile', () => {
  test('Se a página Profile está presente e funcional', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const donekButton = screen.getByTestId('profile-done-btn');
    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    const logoutButton = screen.getByTestId('profile-logout-btn');

    expect(donekButton).toBeDefined();
    expect(favoriteButton).toBeDefined();
    expect(logoutButton).toBeDefined();

  })

  test('Se o botão Done Recipes  ao ser clicado direciona a pagina correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/profile');

    const donekButton = screen.getByTestId('profile-done-btn');
    userEvent.click(donekButton);
  
    expect(history.location.pathname).toBe('/done-recipes');   

  })

  test('Se o botão Favorite Recipes  ao ser clicado direciona a pagina correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteButton);

    expect(history.location.pathname).toBe('/favorite-recipes');   
  
  })

  test('Se o botão Logout ao ser clicado direciona corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const logoutButton = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutButton);

    expect(history.location.pathname).toBe('/');   

  })
});
