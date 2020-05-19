describe('news', () => {
    it('it should take information from the web page', done => {
        dailyNews(results => {
            expect(results).to.be.exist
            expect(results.length).to.be.greaterThan(0)

            results.forEach(({ title, content, link }) => {
                expect(title).to.be.a('string')
                expect(content).to.be.a('string')
                expect(link).to.be.a('string')
            })
            done()
        })

    })
})