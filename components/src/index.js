import { createRoot } from "react-dom/client";
// jsx rules
// let year = 2025;
// let greetings = (
//   <div>
//     <h1 className="title">Tittle</h1>
//     <p
//       style={{
//         backgroundColor: "red",
//         padding: 10,
//         fontSize: 50,
//       }}
//     >
//       hello from react {year}
//     </p>
//     <input type="text" placeholder="enter your name" />
//   </div>
// );

// react components
function Header(props) {
  return <h1>Hello i'm {props.user}</h1>;
}
const Footer = (props) => {
  return <footer>all rights reserved {props.year}</footer>;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <Header user="Noor" />
    <Footer year="2025" />
  </div>
);
