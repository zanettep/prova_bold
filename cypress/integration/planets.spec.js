describe('Planets endpoint', () => {

    const statusCodeSucess = 200;

    beforeEach(() => {
        cy.fixture('planets').as('planetsJSON');
    })

    it('Verificar dados Planets por id', () => {

        cy.request('/planets/1/').then((response) => {
            
            expect(response.status).to.eq(statusCodeSucess);

            cy.get('@planetsJSON').then(planetsJSON => {

                expect(response.body).to.have.property('name', planetsJSON.name);
                expect(response.body).to.have.property('rotation_period', planetsJSON.rotation_period);
                expect(response.body).to.have.property('orbital_period', planetsJSON.orbital_period);
                expect(response.body).to.have.property('diameter', planetsJSON.diameter);
                expect(response.body).to.have.property('climate', planetsJSON.climate);
                expect(response.body).to.have.property('gravity', planetsJSON.gravity);
                expect(response.body).to.have.property('terrain', planetsJSON.terrain);
                expect(response.body).to.have.property('surface_water', planetsJSON.surface_water);
                expect(response.body).to.have.property('population', planetsJSON.population);
            });
        });
    })
})