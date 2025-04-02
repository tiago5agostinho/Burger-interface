import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/7 901452Product-logo.svg'
import { CardProduct } from '../../components/'
import api from '../../services/api'
import formatCurrency from '../../utils/formalCurrency'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoryMenu,
  ProductsContainer
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0

  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setfilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="Logo da home" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
