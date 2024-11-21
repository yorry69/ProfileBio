import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
    return (
        <footer>
        <div className="footer">
          <div className="container">
            <p>{footer.aw}</p>
          </div>
        </div>
      </footer>        
    )
}
export default Footer