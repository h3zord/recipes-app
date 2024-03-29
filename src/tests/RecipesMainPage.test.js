import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Testing foods recipes main page', () => {
  // afterEach(() => {
  //   global.fetch.mockClear();
  // });

  test('Testing if have a title and buttons filters', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/foods')
    
    const foodTitle = screen.getByRole("heading", { name: /foods/i });
    const searchInput = screen.getByRole("button", { name: /search/i });
    const profileInput = screen.getByRole("button", { name: /profile icon/i });
    const beefFilter = await screen.findByRole("button", { name: /beef/i });
    const breakFastFilter = await screen.findByRole("button", { name: /breakfast/i });
    const chickenFilter = await screen.findByRole("button", { name: /chicken/i });
    const dessertFilter = await screen.findByRole("button", { name: /dessert/i });
    const goatFilter = await screen.findByRole("button", { name: /goat/i });
    const removeFilter = screen.getByRole("button", { name: /remove filters/i });

    expect(foodTitle).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(profileInput).toBeInTheDocument();
    expect(beefFilter).toBeInTheDocument();
    expect(breakFastFilter).toBeInTheDocument();
    expect(chickenFilter).toBeInTheDocument();
    expect(dessertFilter).toBeInTheDocument();
    expect(goatFilter).toBeInTheDocument();
    expect(removeFilter).toBeInTheDocument();
    
  })
  test('Testing if have images cards and your length in food recipes page', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/foods')

    const allImageCards = await screen.findAllByRole("img");

    expect(allImageCards).toHaveLength(2);
    expect(history.location.pathname).toBe('/foods');

  })
})

describe('Testing drinks recipes main page', () => {
  test('Testing if have a title and buttons filters', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/drinks')

    const drinkTitle = screen.getByRole("heading", { name: /drinks/i });
    const searchInput = screen.getByRole("button", { name: /search/i });
    const profileInput = screen.getByRole("button", { name: /profile icon/i });
    const ordinaryDrink = await screen.findByRole("button", { name: /ordinary drink/i });
    const cocktailFilter = await screen.findByRole("button", { name: /cocktail/i });
    const shakeFilter = await screen.findByRole("button", { name: /shake/i });
    const otherUnknownFilter = await screen.findByRole('button', { name: /other \/ unknown/i })
    const cocoaFilter = await screen.findByRole("button", { name: /cocoa/i });
    const removeFilter = screen.getByRole("button", { name: /remove filters/i });

    expect(drinkTitle).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(profileInput).toBeInTheDocument();
    expect(ordinaryDrink).toBeInTheDocument();
    expect(cocktailFilter).toBeInTheDocument();
    expect(shakeFilter).toBeInTheDocument();
    expect(otherUnknownFilter).toBeInTheDocument();
    expect(cocoaFilter).toBeInTheDocument();
    expect(removeFilter).toBeInTheDocument();

  })
  test('Testing if have images cards and your length in drink recipes page', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/drinks')

    const allImageCards = await screen.findAllByRole("img");

    expect(allImageCards).toHaveLength(2);
    expect(history.location.pathname).toBe('/drinks');

  })
  test('Testing if render drinks details page', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/drinks')
   
    const searchActivate = screen.getAllByRole("button", { name: /search/i })[0];
    userEvent.click(searchActivate);
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, 'A1');
    expect(searchInput).toHaveValue('A1');
    const nameRadius = screen.getByText("Name");
    userEvent.click(nameRadius);
    const searchButton = screen.getAllByRole("button", { name: /search/i })[1];
    userEvent.click(searchButton);
  })
  test('Testing if render foods details page', async () => {
    // jest.spyOn(global, 'fetch').mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(meals)
    // })
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/foods')
   
    const searchActivate = screen.getAllByRole("button", { name: /search/i })[0];
    userEvent.click(searchActivate);
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, 'Burek');
    expect(searchInput).toHaveValue('Burek');
    const nameRadius = screen.getByRole("radio", { name: /name/i });
    userEvent.click(nameRadius);
    const searchButton = screen.getAllByRole("button", { name: /search/i })[1];
    userEvent.click(searchButton);
    // const favoriteIcon = await screen.findByRole("img", { name: /favorite icon/i })
  })
})
