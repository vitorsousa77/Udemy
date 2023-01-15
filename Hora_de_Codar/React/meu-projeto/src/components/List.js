import Item from './Item'

function List() {

    return (
        <>
        <h3>Minha Lista</h3>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="Fiat" ano_lancamento={2015}/>
            <Item marca="Renault" ano_lancamento={2021}/>
            <Item marca="Chevrolet" ano_lancamento={2018}/>
            <Item/>
        </ul>
        </>
    )
}

export default List
