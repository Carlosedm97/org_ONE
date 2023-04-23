import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/carlosedm97/" target="_blank" rel="noreferrer">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/_cldev" target="_blank" rel="noreferrer">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/_carlosedm97/?hl=es" target="_blank" rel="noreferrer">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/Favicon.png" alt="Org" />
        <strong>Desarrollado por Carlos López</strong>
    </footer>
}

export default Footer