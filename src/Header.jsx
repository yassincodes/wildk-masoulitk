
function Header() {
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
  </div>;
}

export default Header;
