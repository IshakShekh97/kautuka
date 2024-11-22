// import React from "react";

// const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="relative">
//       <div className=" px-3 pt-5 mx-auto sm:px-10 md:px-14 lg:px-20 max-w-[1700px]">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default ProductsLayout;

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="">{children}</div>
    </div>
  );
};

export default ProductsLayout;
