export function ProductsPage() {
    const {id} = useParams();
    return (
        <div>
            <h3>Products Id: {id}</h3>
        </div>
    );
}