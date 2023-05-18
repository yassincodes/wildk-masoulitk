import { useState, useEffect, CSSProperties } from "react";
import Home from "./Home";
import About from "./routes/About";
import Advices from "./routes/Advices";
import { Routes, Route } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import pic from "./pic.png";

function App() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [showTopContent, setShowTopContent] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
      setShowTopContent(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <div>
          {showParagraph && (
            <div>
              <div style={{ background: "#e0e0e0", height: "100vh" }}>
                <div
                  style={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 200, damping: 12 },
                  }}
                >
                  <img src={pic} style={{ width: "200px" }} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ margin: "0 5px" }}>جاري تحميل الموقع</div>
                  <ClipLoader
                    color={color}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              </div>
            </div>
          )}

          {showTopContent && (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#A7F967",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <div>
                  <img src={pic} style={{ width: "90px" }} />
                </div>
                <div style={{ fontSize: "2em" }}>ولدك مسؤوليتك</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-menu-2"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </div>
              </div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/advices" element={<Advices />} />
              </Routes>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
