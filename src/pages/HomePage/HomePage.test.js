import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomePage from './HomePage';
import './HomePage.scss';
import { useBlogsContext } from '../../context/blogsContext';

jest.mock('../../assets/images/banner_image.gif', () => './homePage_image.mock.js');
jest.mock('../../assets/images/search_icon.png', () => './homePage_image.mock.js');
jest.mock('../../assets/images/loader.svg', () => './loader_image.mock.js');

jest.mock('../../context/blogsContext', () => ({
  useBlogsContext: jest.fn(),
}));

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: query === '(max-width: 768px)',
  addListener: jest.fn(), 
  removeListener: jest.fn()

}));

describe('HomePage', () => {
  it('handles search input correctly', () => {
    const mockBlogs = undefined; 

    useBlogsContext.mockReturnValue({
      blogs: mockBlogs,
      setSearchTerm: jest.fn(),
      searchTerm: '',
      fetchBlogsFromSearch: jest.fn(),
    });

    render(<HomePage />);
    const input = screen.getByPlaceholderText('Buscar ...');
    
  });

  it('handles search input correctly', () => {
    render(<HomePage />);
    
    // Encontra o campo de input de pesquisa
    const input = screen.getByPlaceholderText('Buscar ...');
    
    // Simula a entrada de texto no campo
    fireEvent.change(input, { target: { value: 'exemplo' } });

    // Verifica se a função setSearchTerm foi chamada corretamente
    expect(useBlogsContext().setSearchTerm).toHaveBeenCalledWith('exemplo');
  });
  it('handles search result submission correctly', () => {
    render(<HomePage />);
    
    // Encontra o campo de input de pesquisa
    const input = screen.getByPlaceholderText('Buscar ...');
    
    // Simula a entrada de texto no campo
    fireEvent.change(input, { target: { value: 'exemplo' } });

    // Encontra o botão de envio
    const submitButton = screen.getByRole('button', { name: 'Search icon' });

    // Simula o envio do formulário de pesquisa
    fireEvent.click(submitButton);

    // Verifica se a função fetchBlogsFromSearch foi chamada corretamente
    expect(useBlogsContext().fetchBlogsFromSearch).toHaveBeenCalledWith('');
  });
  
});
