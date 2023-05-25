import { Comment } from '../../../src/entities/Comment';

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.Button').click();
};

export const getAllComments = (articleId: string) => {
    cy.request({
        method: 'GET',
        headers: { Authorization: 'qwe' },
        url: `http://localhost:8000/comments?articleId=${articleId}`,
    }).then((data) => data.body);
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
            getAllComments(articleId: string): Chainable<Comment[]>;
            //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
        }
    }
}
