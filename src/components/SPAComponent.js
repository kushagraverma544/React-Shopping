import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingComponent from "./ShoppingComponent";

function HTML() {
  return (
    <>
      <main>
        <h2>HTML</h2>
        <p>It is a markup language</p>
      </main>
    </>
  );
}

function CSS() {
  return (
    <>
      <main>
        <h2>CSS</h2>
        <p>It defines styles</p>
      </main>
    </>
  );
}

function Path() {
  return (
    <>
      <main>
        <h2>Home</h2>
        <p>Tutorial Home</p>
      </main>
    </>
  );
}

function WildCard() {
  return (
    <>
      <main>
        <code>Not Found: Page you requested not found</code>
      </main>
    </>
  );
}

function JavaScript() {
  return (
    <>
      <main>
        <h2>JavaScript</h2>
        <p>It is a language</p>
      </main>
    </>
  );
}

export default function SPAComponent() {
  return (
    <div className="container-fluid">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="html">HTML</Link>
            </li>
            <li>
              <Link to="css">CSS</Link>
            </li>
            <li>
              <Link to="js">JavaScript</Link>
            </li>
            <li>
                <Link to = "shopping">Shopping</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="js" element={<JavaScript />} />
          <Route path="shopping" element={<ShoppingComponent />} />
          <Route path="/" element={<Path />} />
          <Route path="*" element={<WildCard />} />
        </Routes>
      </Router>
    </div>
  );
}
