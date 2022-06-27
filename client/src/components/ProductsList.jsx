export const ProductsList = ({ product }) => {
    return (
      <>

        <div class = "card" key = {product._id}>
                <img class="item_img" key = {product._id} src={`data:image/jpeg;base64,${product.image}`} title="Ноутбук LENOVO IdeaPad 3 14ITL6 Arctic Grey (82H700HLRA)" />
                <div class = "productName">
                    <a href="lenovo_notebook_1.html" title="Ноутбук LENOVO IdeaPad 3 14ITL6 Arctic Grey (82H700HLRA)"> {product.name}</a>
                </div>
                <div class="rating-area">
                  <input type="radio" id="star-5" name="rating" value="5" />
                  <label for="star-5" title="Оценка «5»"></label> 
                  <input type="radio" id="star-4" name="rating" value="4" />
                  <label for="star-4" title="Оценка «4»"></label>    
                  <input type="radio" id="star-3" name="rating" value="3" />
                  <label for="star-3" title="Оценка «3»"></label>  
                  <input type="radio" id="star-2" name="rating" value="2" />
                  <label for="star-2" title="Оценка «2»"></label>    
                  <input type="radio" id="star-1" name="rating" value="1" />
                  <label for="star-1" title="Оценка «1»"></label>
                </div>
                <div class="rating-result">
                  <span class="active"></span>  
                  <span class="active"></span>    
                  <span class="active"></span>  
                  <span></span>    
                  <span></span>
                </div>
                <div class = "buy_field">
                  <div class = "price">  {product.price} &#8372;</div>
                  <button class="buyButton" id="buy"> КУПИТЬ </button>
                </div>
            </div>

      </>
    );
  };