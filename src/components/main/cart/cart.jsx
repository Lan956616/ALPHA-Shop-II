import styles from './cart.module.css';
import minus from './minus.svg';
import plus from './plus.svg';



{/* <CartProduct key= {eachData.id} productNumber={eachData.quantity} productName={eachData.name} productPrice = {eachData.price}/> */}

function CartProduct ({productNumber, productName, productPrice}){
  return(
    <div className={styles.CartProduct}> 
     <img src={`/product-${productNumber}.jpg`} className={styles.CartProductImg}></img>
     <div className={styles.CartProductRightPart}>
       <div className={styles.rightPartTop}>
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productPrice}>{`$${productPrice}`}</p>
       </div>
       <div className={styles.rightPartBottom}>
        <img src={minus} className={styles.countIcon}></img>
        <p className={styles.productNumber}>1</p>
        <img src={plus} className={styles.countIcon}></img>

       </div>
     </div>

    </div>
  )
}

function TotalRow ({title, content}) {
  return(
    <div className={styles.TotalRow}>
        <div className={styles.hr}></div>
        <div className={styles.totalRow}>
          <p className={styles.totalTitle}>{title}</p>
           <p className={styles.totalContent}>{content}</p>
        </div>
      </div>
  )
}




export default function Cart() {
  return(
    <div className={styles.mainCart}>
      <p className={styles.mainCartTitle}>購物籃</p>
      {data.map((eachData) => <CartProduct key= {eachData.id} productNumber={eachData.quantity} productName={eachData.name} productPrice = {eachData.price}/>)
      }
      <TotalRow title='運費' content= '免費'/>
      <TotalRow title='小計' content= '$5,298'/>
    </div>
  )
}