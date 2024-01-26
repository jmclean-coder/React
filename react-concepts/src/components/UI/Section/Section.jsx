export default function Section({ title, children, ...props}) { // Forwarded props!
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}