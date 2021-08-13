import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getCartTotal } from "../reducers/ItemsToCart";
import { useSelector } from "react-redux";

function Subtotal() {
  const history = useHistory();
  const items = useSelector(state => state.items.cart)
  const total = getCartTotal(items)
  const subTotal = Math.round((total + (total * 13 / 100) + Number.EPSILON) * 100) / 100

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p style={{ textAlign: 'center' }}>
              <p>

                Total ({items.length} items): <strong>{value}</strong>
                <div></div>
                Subtotal (After tax): <strong>{`$ ${subTotal}`}</strong>
              </p>
           </p>
          </>
        )}
            decimalScale={2}
            value={getCartTotal(items)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
      />

            <button>Proceed to Checkout</button>
          </div>
        );
}




      export default Subtotal;
