

function ProductDetails(props){
   const { product } = props
console.log(product);
   const { title, image } = product.gameTitle_id;
   const platformName = product.platform_id.name;
   const { _id, price, stock } = product

  return(
    <>
    <div className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">

    <div className="col-lg-4 p-0 overflow-hidden shadow-lg order-lg-1">
      <div className="lc-block"><img className="rounded-start w-100" src={image}
       alt={title} width="720"></img></div>
    </div>

    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 order-lg-2">
      <div className="lc-block mb-3">
        <div editable="rich">
          <h2 className="fw-bold display-4">{title}<p></p><p></p></h2>
        </div>
      </div>

      <div className="lc-block mb-3">
        <div editable="rich">
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
      </div>

      <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
        <a className="btn btn-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
        <a className="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
      </div>
    </div>
  </div>
</div>

    
    </>
  ) 

}

export default ProductDetails