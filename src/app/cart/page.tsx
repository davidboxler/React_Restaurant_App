import Image from "next/image";

const CartPage = () => {
  return (
    <div className="">
      {/* PRODUCTS CONTAINER */}
      <div className="">
        {/* SINGLE ITEM */}
        <div className="">
          <Image src="/temporary/p1.png" alt="" />
          <div className="">
            <h1>sicilian</h1>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span>X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className=""></div>
    </div>
  );
};

export default CartPage;
