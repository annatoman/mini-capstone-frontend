export function ProductsIndex(props) {
    return (
        <div>
            <h1>Hello!</h1>
            {props.products.map((products) => (
            <div key={products.id}>
            <h1>{products.name}</h1>
            <h2>{products.price}</h2>
            <h2>{products.description}</h2>
            </div>
            ))}
        </div>
    );
}