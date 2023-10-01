import logoUrl from '../assets/img/toys-logo.avif'

export function HomePage() {
    return (
        <section className='home-section'>
            <h2>Welcome to Toys R U !! </h2>
            <img src={logoUrl} alt='App Logo' />
        </section >
    )
}