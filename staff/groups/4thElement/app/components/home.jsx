function Home({onGoToLogin, onGoToRegister}) {

    const handleGoToLogin= event =>{
        event.preventDefault()

        onGoToLogin()
    }

    const handleGoToRegister= event =>{
        event.preventDefault()

        onGoToRegister()
    }

    return <section className="home">
        <script src="https://kit.fontawesome.com/8134188eff.js" crossOrigin="anonymous"></script>

        <header className="Header">
            <section className="Header__container">
                <h2 className="Header__container--name">4thElement</h2>
                <a onClick={handleGoToLogin} className="Header__container--login" href="">Login</a>
                <a onClick={handleGoToRegister} className="Header__container--register" href="">Register</a>
            </section>
        </header>

        <section className="Home">
            <h1>Which one do you choose?</h1>
            <img className="Home__imagen" src="" alt="" />
            <div className="Home__Selection">
                <div className="Home__Selection--surf">DIV-SURF</div>
                <div className="Home__Selection--snow">DIV-SNOW</div>
            </div>

            <div className="Home__map"></div>
        </section>

        <footer className="Footer">
            <section className="Footer__container">
                <i className="fas fa-home fa-2x"></i>
                <i className="fas fa-search fa-2x"></i>
                <i className="fas fa-map-marked-alt fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
            </section>
        </footer>
    </section>
}