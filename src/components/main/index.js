const Main = () => {
    return (
        <main>
        <section id="about" className="section about">
          <div className="container">
            <h2>Tentang Saya</h2>
            <p>Saya Yorry Efrem, mahasiswa IT di Universitas Klabat tingkat 3. Saya memiliki minat dalam pengembangan <strong>game</strong> dan desain. Bahasa pemrograman yang saya gunakan meliputi <strong>JavaScript</strong>, <strong>Java</strong>, <strong>C</strong>, dan <strong>Python</strong>.</p>
          </div>
        </section>
        <section id="skills" className="section skills">
          <div className="container">
            <h2>Keahlian</h2>
            <div className="skills-list">
              <div className="card">
                <h3>Bahasa Pemrograman</h3>
                <p>JavaScript, Java, C, Python</p>
              </div>
              <div className="card">
                <h3>Pengembangan Game</h3>
                <p>Dasar-dasar Game Design &amp; Prototyping</p>
              </div>
              <div className="card">
                <h3>Desain UI/UX</h3>
                <p>Wireframing dan Prototyping</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="container">
            <h2>Proyek</h2>
            <div className="project-list">
              <div className="card">
                <h3>Game Edukasi</h3>
                <p>Game berbasis edukasi untuk membantu siswa memahami konsep dasar pemrograman dengan cara interaktif.</p>
              </div>
              <div className="card">
                <h3>Aplikasi To-Do</h3>
                <p>Aplikasi manajemen tugas berbasis web dengan fitur drag-and-drop, dibuat menggunakan JavaScript dan HTML5.</p>
              </div>
              <div className="card">
                <h3>Website Portfolio</h3>
                <p>Website portfolio interaktif dengan efek animasi, mendemonstrasikan keahlian dalam desain UI/UX dan pengembangan front-end.</p>
              </div>
            </div>
          </div>
        </section>
      </main> 
    )
}
export default Main