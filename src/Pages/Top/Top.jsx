export const Top = ({ datos }) => {
  return (
    <div className='top__main d-flex'>
        {
          datos.map((dato) => (
            <div>
              <img src={dato.path} alt={dato.text} className="icon__top" />
              <span className="label-icon__top">{dato.text}</span>
            </div>
          ))
        }
        <divider />
        <div className="social-icons__top">
            <img src="src/Assets/facebook.png" alt="Facebook" />
            <img src="src/Assets/twitter.png" alt="Twitter" />
            <img src="src/Assets/youtube.png" alt="Youtube" />
            <img src="src/Assets/instagram.png" alt="Instagram" />
            <img src="src/Assets/tik-tok.png" alt="Tik Tok" />
        </div>
    </div>
  )
}
