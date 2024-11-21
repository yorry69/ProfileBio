import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

  const Main = () => {
    const [main, setMain] = useState([]);
    useEffect(() => {
      const db = getDatabase();
      const mainRef = ref(db, "main");
      onValue(mainRef, (snapshot) => {
        const data = snapshot.val();
        setMain(data);
      });
    }, []);
    return (
        <main>
        <section id="about" className="section about">
          <div className="container">
            <h2>{main.title}</h2>
            <p>{main.isi}</p>
          </div>
        </section>
        <section id="skills" className="section skills">
          <div className="container">
            <h2>{main.title1}</h2>
            <div className="skills-list">
              <div className="card">
                <h3>{main.judul}</h3>
                <p>{main.bagian}</p>
              </div>
              <div className="card">
                <h3>{main.judul1}</h3>
                <p>{main.bagian1}</p>
              </div>
              <div className="card">
                <h3>{main.judul2}</h3>
                <p>{main.bagian2}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="container">
            <h2>{main.title2}</h2>
            <div className="project-list">
              <div className="card">
                <h3>{main.judul3}</h3>
                <p>{main.bagian3}</p>
              </div>
              <div className="card">
                <h3>{main.judul4}</h3>
                <p>{main.bagian4}</p>
              </div>
              <div className="card">
                <h3>{main.judul5}</h3>
                <p>{main.bagian5}</p>
              </div>
            </div>
          </div>
        </section>
      </main> 
    )
}
export default Main