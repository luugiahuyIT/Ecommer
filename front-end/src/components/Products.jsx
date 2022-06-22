import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data/data'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({category, sort, filters}) => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : 'http://localhost:5000/api/products')
                setProducts(res.data)
            } catch(err) {
                console.log(err)

            }
        }
        getProducts()
    },[category])

    useEffect(() => {
        category && setFilterProducts(products.filter(item => 
            Object.entries(filters).every(([key, value]) => item[key].includes(value))))
    },[category, filters, products])

    useEffect(() => {
        if(sort === 'newest') {
            setFilterProducts(prev => 
                [...prev].sort((a,b) => a.createdAt - b.createAt)
            )
        } else if(sort === 'asc') {
            setFilterProducts(prev => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        } else {
            setFilterProducts(prev => 
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <Container>
            { category ? filterProducts.map(item => (
                <Product item={item} key={item.id}>
                </Product>
            )) : products.slice(0,8).map(item => (
                <Product item={item} key={item.id}>
                </Product>
            ))}


        </Container>
    )
}

export default Products
