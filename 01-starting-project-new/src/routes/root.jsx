export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Notebook</h1>

          <nav>
            <ul>
              <li>
                <a href={`/react-essentials`}>React Essentials</a>
              </li>
              {/* <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div id="detail"></div>
      </>
    );
  }