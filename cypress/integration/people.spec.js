describe('People endpoint', () => {

    const statusCodeSucess = 200;

    beforeEach(() => {
        cy.fixture('people').as('peopleJSON');
    })

    it('Verificar dados People por id', () => {

        cy.request('/people/1/').then((response) => {
            
            expect(response.status).to.eq(statusCodeSucess);

            cy.get('@peopleJSON').then(peopleJSON => {

                expect(response.body).to.have.property('name', peopleJSON.name);
                expect(response.body).to.have.property('height', peopleJSON.height);
                expect(response.body).to.have.property('mass', peopleJSON.mass);
                expect(response.body).to.have.property('hair_color', peopleJSON.hair_color);
                expect(response.body).to.have.property('skin_color', peopleJSON.skin_color);
                expect(response.body).to.have.property('eye_color', peopleJSON.eye_color);
                expect(response.body).to.have.property('birth_year', peopleJSON.birth_year);
                expect(response.body).to.have.property('gender', peopleJSON.gender);
            });
        });
    })
})