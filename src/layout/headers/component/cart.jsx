import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import useCartInfo from '../../../hooks/use-cart-info';
import { remove_cart_course } from '../../../redux/features/cart-slice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartCourses);
    const dispatch = useDispatch();
    const {total} = useCartInfo();
    
    return (
        <div className="Chhayaa-header-mini-cart">
            {cartItems.length === 0 && 
                <div className="wrapper empty-cart-wrapper">
                    <h5 className="empty-cart">Your cart is empty</h5>
                </div>
            }
            {cartItems.length >= 1 && 
                <div className="wrapper">
                    <ul className={`items ${cartItems.length > 4 ? 'cart-height' : ''}`}>
                        {cartItems.map((item, index) => (
                            <li key={index} className="each-item">
                                <div className="thumb">
                                    <Link href={`/course-details/${item.id}`}>
                                        <img src={item.img} alt="course-thumb" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href={`/course-details/${item.id}`}>
                                                {item.title}
                                        </Link>
                                    </h5>
                                    <div className="price-and-quantity">
                                        <span className="quantity">{item.quantity}</span>
                                        <span className="quantity-symbol">×</span>
                                        <span className="price">$ {item.price}</span>
                                    </div>
                                </div>
                                <div className="cart-item-remove">
                                    <button onClick={() => dispatch(remove_cart_course(item))}>
                                        <i className="icon-73"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="total-price-wrapper">
                        <span className="total-text">Subtotal:</span>
                        <span className="total-amount">${parseFloat(total.toFixed(3))}</span>
                    </div>

                    <div className="cart-checkout-buttons">
                        <Link href="/cart" className="edu-btn btn-small cart-btn">
                            View Cart
                        </Link>

                        <Link href="/checkout" className="edu-btn btn-small btn-secondary checkout-btn">
                            Checkout
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;