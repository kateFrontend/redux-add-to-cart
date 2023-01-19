import React from "react";
import Filter from "./Filter";

function AllCategories() {
  return (
    <div>
      <h1>What kind of food do you like?</h1>
      {/*method map*/}
      {['SEAFOOD', 'ITALIEN', 'APPETIZERS', 'SALADS', 'ALL'].
      map(category => <Filter category={category}/>
      )}
      <Filter />
    </div>
  );
}

export default AllCategories;
