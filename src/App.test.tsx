import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste do App', () => {
    test('Deve renderizar o botão de comentário', () => {
        render(<App />);

        const botao = screen.getByTestId('comment-button');

        expect(botao).toBeInTheDocument();
    });
});