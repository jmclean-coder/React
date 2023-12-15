import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Notebook</h1>

          <nav>
            <ul>
              <li>
                <Link to={`react-essentials`}>React Essentials</Link>
              </li>
              {/* <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }