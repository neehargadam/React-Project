import NetflixMain from './netflix-main'
import './netflix-section.css'
export function NetflixSection()
{
    return (
        <section className="text-white text-center mt-5 section" >
            <div className="section-title">Unlimited movies,<br/> shows, and more</div>
            <div className="section-subtitle">Starts at ₹149. Cancel at any time.</div>
            <NetflixMain/>
        </section>
    )
}