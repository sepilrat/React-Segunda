import ItemCount from "./ItemCount";

const ItemsListContainer = (greeting) => {
    return (

        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">
                        <p>{greeting}</p>
                    </div>
                    <ItemCount stock={10}/>
                </div>
            </div>
        </div>

    );

}
export default ItemsListContainer;