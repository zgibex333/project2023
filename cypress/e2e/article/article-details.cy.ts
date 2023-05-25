let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.log(JSON.stringify(article), 'CURRENT');
            cy.log(currentArticleId, 'CURRENT');
            cy.visit(`article/${currentArticleId}`);
        });
    });

    afterEach(() => {
        cy.getAllComments(currentArticleId).then((data) => {
            // eslint-disable-next-line no-restricted-syntax
            for (const comment of data) {
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:8000/comments/${comment.id}`,
                    headers: { Authorization: 'fsdfds' },
                });
            }
        });

        // .then((res) => console.log(JSON.stringify(res)));

        cy.removeArticle(currentArticleId);
    });

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Loading').should('exist');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
        cy.getByTestId('CommentCard.Loading').should('not.exist');
    });
    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate('feedback', 5);
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
