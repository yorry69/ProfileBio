import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
    return (
        <header>
        <div className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="profile">
                <img src={`data:image/jpeg;base64,${header.image}`} alt="Foto Yorry Efrem" />
              </div>
              <div className="info">
                <h1>{header.name}</h1>
                <p>{header.text}<br />{header.text1}</p>
                <a href="#about" className="btn">{header.text2}</a>
              </div>
            </div>
          </div>
        </div>
      </header> 
    )
}
export default Header