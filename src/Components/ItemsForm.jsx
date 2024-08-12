import React from 'react';

function ItemsForm() {
  return (
    <>
      <form>
      <button type="button" className="btn-close" aria-label="Close" />

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">
    Description
  </label>
  <textarea
    className="form-control"
    id="exampleFormControlTextarea1"
    rows={3}
    defaultValue={""}
  />
</div>


        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </form>
    </>
  );
}

export default ItemsForm;
