const { useState } = React

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'landing')
    // const [view, setView] = useState('home')
    const [token, setToken] = useState(sessionStorage.token)
    // const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWFjNDg5OTZiMzNjNzAwMTU0MmU5MmIiLCJpYXQiOjE1ODg2NzE4MDEsImV4cCI6MTU4ODY3NTQwMX0.RS0HvoBYhCY7Li4oEAiOB1AtwfoPSLRTQTAd4vKk4OA')

    const handleGoToRegister = () => setView('register')

    const handleRegister = () => setView('login')

    const handleLogin = token => {
        sessionStorage.token = token
        setToken(token)
        setView('home')
    }

    const handleGoToLogin = () => setView('login')

    const handleLogout = () => {
        setToken()
        setView('landing')
    }

    return <>
        {view === 'landing' && <Landing onGoToRegister={handleGoToRegister} onGoToLogin={handleGoToLogin} />}
        {view === 'register' && <Register onRegister={handleRegister} onGoToLogin={handleGoToLogin} />}
        {view === 'login' && <Login onLogin={handleLogin} onGoToRegister={handleGoToRegister} />}
        {view === 'home' && <Home token={token} onLogout={handleLogout} />}
    </>
}