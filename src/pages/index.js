import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

const ExampleComponent = ({data}) =>{

  // Build Time Data Fetching
  const takeshapeData = useStaticQuery(graphql`
    query {
      takeshape{
        getProductList{
          items{
            _id
            name
            price
          }
        }
      }
    }`)

  return (    
    <section>
      <h1>Products:</h1>
      <ul>
        {
          takeshapeData.takeshape.getProductList.items.map(
            product=>(
              <li key={product._id}>
                {product.name}: {product.price}
              </li>
            )
          )
        }
      </ul>
    </section>
  )
}

export default ExampleComponent

