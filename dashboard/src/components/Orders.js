// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;


import React from "react";

function Orders() {
  return (
    <div style={{
      background: "#f0f0f0",
      color: "black",
      minHeight: "500px",
      padding: "40px"
    }}>
      <h1>MY ORDERS PAGE</h1>
      <h2>Orders Component Working!</h2>
      <p>If you can see this, routing is working.</p>
    </div>
  );
}

export default Orders;
