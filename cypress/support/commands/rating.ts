export const setRate = (feedback: 'feedback', starsCount = 5) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId(`RatingCard.Input`).type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(feedback: 'feedback', starsCount: number): Chainable<void>;
        }
    }
}
