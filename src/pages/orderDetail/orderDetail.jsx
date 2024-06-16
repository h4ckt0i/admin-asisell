import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Detail from "~/components/detail/detail";
import Loading from "~/components/loading/loading";
import ProductOrder from "~/components/productOrder/productOrder";
import { deliveryType, paymentType } from "~/components/table/orderTable/index";
import {
  convertCurrency,
  fetchApi,
  getIdFromPathName,
  setDocumentTitle,
} from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

import styles from "./orderDetail.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function OrderDetail() {
  const [order, setOrder] = useState({});
  const [address, setAddress] = useState();
  const [products, setProducts] = useState([]);
  const [deliveryStatus, setDeliveryStatus] = useState({});
  const [paymentStatus, setPaymentStatus] = useState({});

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    setDocumentTitle("Chi tiết đơn hàng");

    const orderId = getIdFromPathName();

    const getOrderById = () =>
      fetchApi(orderSlice.getOrderById(orderId), dispatch);

    getOrderById().then((result) => {
      const order = result[0];
      const deliveryAddresses = order.user.delivery_addresses;
      const address = deliveryAddresses.filter(
        (address) => address.is_default === true
      )[0];

      setOrder(order);
      setAddress(address);
      setProducts(order.products);
    });
  }, []);

  useEffect(() => {
    order.payment_status && setPaymentStatus(order.payment_status);
    order.payment_status && setDeliveryStatus(order.delivery_status);
  }, [order]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Detail title="Chi tiết đơn hàng">
          <div
            className={clsx(generalStyles.detailSection, styles.paymentMethod)}
          >
            <span className={generalStyles.detailTitle}>Mã đơn hàng</span>
            <span className={styles.code}>{order.code}</span>
          </div>
          <div className={clsx(generalStyles.detailSection, styles.status)}>
            <span className={generalStyles.detailTitle}>
              Trạng thái thanh toán
            </span>
            <span
              className={clsx(
                styles.statusText,
                paymentStatus.value === paymentType[0].value
                  ? generalStyles.pending
                  : generalStyles.successful
              )}
            >
              {paymentStatus.label}
            </span>
          </div>
          <div className={clsx(generalStyles.detailSection, styles.status)}>
            <span className={generalStyles.detailTitle}>
              Trạng thái vận chuyển
            </span>
            <span
              className={clsx(
                styles.statusText,
                (deliveryStatus.value === deliveryType[0].value &&
                  generalStyles.successful) ||
                  (deliveryStatus.value === deliveryType[1].value &&
                    generalStyles.shipping) ||
                  (deliveryStatus.value === deliveryType[2].value &&
                    generalStyles.pending) ||
                  (deliveryStatus.value === deliveryType[3].value &&
                    generalStyles.canceled)
              )}
            >
              {deliveryStatus.label}
            </span>
          </div>
          <div
            className={clsx(generalStyles.detailSection, styles.paymentMethod)}
          >
            <span className={generalStyles.detailTitle}>
              Phương thức thanh toán
            </span>
            <span className={styles.paymentMethodText}>
              {order.payment_method && order.payment_method.text}
            </span>
          </div>
          <div className={clsx(generalStyles.detailSection, styles.products)}>
            <span className={generalStyles.detailTitle}>Sản phẩm</span>
            <ul className={clsx(generalStyles.list, styles.productsList)}>
              {order &&
                products.map((product, index) => {
                  const productInfo = product.product_id;

                  return (
                    <ProductOrder
                      className={clsx(styles.productItem)}
                      productId={product._id}
                      brand={productInfo.brand && productInfo.brand.name}
                      image={productInfo.imgs[0]}
                      name={productInfo.name}
                      gifts={productInfo.gifts}
                      price={product.price}
                      quantity={product.quantity}
                      total={productInfo.total}
                      key={index}
                    />
                  );
                })}
            </ul>
          </div>
          <div className={clsx(generalStyles.detailSection, styles.products)}>
            <span className={generalStyles.detailTitle}>Tổng tiền</span>
            <div className={styles.total}>
              {order && convertCurrency(order.total)} (đã bao gồm phí vận
              chuyển: {convertCurrency(order.shipping_cost)})
            </div>
          </div>
          <div className={clsx(generalStyles.detailSection, styles.recipient)}>
            <span className={generalStyles.detailTitle}>
              Thông tin người nhận
            </span>
            <div className={styles.recipientDetail}>
              <span className={styles.name}>
                {address && address.recipient_name}
              </span>
              <span className={styles.phone}>
                {address && address.recipient_phone}
              </span>
              <span className={styles.address}>
                {address &&
                  `${address.street}, ${address.ward}, ${address.district}, ${address.city}`}
              </span>
            </div>
          </div>
        </Detail>
      )}
    </>
  );
}

export default OrderDetail;
