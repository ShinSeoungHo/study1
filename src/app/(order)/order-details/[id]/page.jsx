// 'use client'; 이걸 쓰면 서버에서 렌더링을 하지 않고, 클라이언트에서만 렌더링을 한다.
import React from "react";

const OrderDetails = ({ params, searchParams }) => {

  // const id = params.id;
  const { id } = params;
  const { hello } = searchParams;

  return (
    <div>
      <h1>{id}</h1>
      <h1>{hello}</h1>
    </div>
  );
}

export default OrderDetails;