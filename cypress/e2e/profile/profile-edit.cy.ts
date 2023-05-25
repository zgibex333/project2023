let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'testuser',
        );
    });
    it('И редактируется', () => {
        const newName = 'new';
        const newLastname = 'new lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.Lastname').should(
            'have.value',
            newLastname,
        );
    });
    it('passes', () => {});
});
