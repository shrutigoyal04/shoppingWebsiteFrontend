import React from 'react';

function ItemsTable() {
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Hello</td>
      <td><img src="download.png" alt="" /></td>
      <td>1000</td>
      <td>hhhhfcsjfwiojei</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Hello2</td>
      <td><img src="download.png" alt="" /></td>
      <td>2000</td>
      <td>ndndigekgd</td>
    </tr>
    
  </tbody>
</table>

    </>
);
}

export default ItemsTable;
