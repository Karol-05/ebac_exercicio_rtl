import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste do componente PostComment', () => {
    test('Deve renderizar o componente', () => {
        render(<PostComment />);

        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        const textarea = screen.getByTestId('comment-textarea');
        const botao = screen.getByTestId('comment-button');

        // primeiro comentário
        fireEvent.change(textarea, {
            target: {
                value: 'Primeiro comentário'
            }
        });

        fireEvent.click(botao);

        // segundo comentário
        fireEvent.change(textarea, {
            target: {
                value: 'Segundo comentário'
            }
        });

        fireEvent.click(botao);

        const comentarios = screen.getAllByTestId('comment-element');

        expect(comentarios).toHaveLength(2);
    });
});