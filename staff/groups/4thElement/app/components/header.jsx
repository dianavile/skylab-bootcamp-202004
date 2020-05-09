function Header ({token, view ,forecastSelected, OnLogout}) {

    const handleLogOut=()=>{
        OnLogout()
    }

    return <header className="Header">
    <section className="Header__container">
        <h2 className="Header__container--name">{forecastSelected.name && view==='surfForecast'? `${forecastSelected.name}`:`4thElement`}</h2>
        <h2 onClick={handleLogOut} className="Header__container--login" href="">{token? `Logout`: `Login`}</h2>
    </section>
</header>

}