class Sport extends Components {
    constructor(listResults) {

        let updateResults = ''
       
            listResults.forEach( (singleResult) => { updateResults += `\n<a href='${singleResult.link}'><h2>${singleResult.title}</h2></a><img src='${singleResult.linkImg}'>`})

            super(`<section class="resultsSport">
                        <hr/>
                     ${updateResults}
                        
                    </section>`)            
    }
}