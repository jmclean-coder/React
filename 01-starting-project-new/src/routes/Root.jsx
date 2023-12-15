export default function Root() {
    return <>
    <div id="sidebar">
        <h1>JAM React Notebook</h1>
        <div>
            <form id="search-form" role="search">
                <input
                id="q"
                aria-label="Search a Topic"
                placeholder="Search a Topic"
                type="search"
                name="q"
                />

                <div
                id="search-spinner"
                aria-hidden
                hidden={true}
                />

                <div className="sr-only"
                aria-live="polite"
                ></div>
            </form>

            <form method="post">
                <button type="submit">New</button>
            </form>

        </div>

        <nav>
            <ul>
                <li>
                    <a href={`/react-essentials`}>React Essentials</a>
                </li>
                <li>
                    <a href={`/react-intermediate`}>React Intermediate</a>
                </li>
            </ul>
        </nav>
        <div id="detail"></div>
    </div>

    </>
}