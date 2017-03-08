import React from 'react'

const Product = (props) => {
  console.log("PRODUCT PROPS", props)
  const product = props.selectedProduct
    return (
      <div>
        {product ?
        <div>
          <h1>{ product.title.replace('-', ' ') }</h1>  
          <div className="row">
              <div className="col-sm-6">
                <img className="img-main" src={ `${product.imgUrls[0]}` } />  
              </div>   
              <div className="col-sm-6">
                <img className="img-thumb" src={ `${product.imgUrls[0]}` } />
                <img className="img-thumb" src={ `${product.imgUrls[0]}` } />
             </div>
            <br />
            <br />
          </div>    
          <div>
            <p>{product.description}</p>
            <br />
            <h4>Price: ${ product.currentPrice.toFixed(2) }</h4>
            <br />     
            </div>
        </div>    
          : <h1>No Product!</h1>
      }
    </div>
  )
}

export default Product
