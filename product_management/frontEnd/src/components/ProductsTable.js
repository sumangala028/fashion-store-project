import React from 'react';
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ProductsTable extends React.Component{
  constructor(){
      super();
  }

  render(){
      return(
        <div className="table">
        <table className="product-table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody> 
                {
                  this.props.getData.length > 0 ? 
                  (
                      this.props.getData.map(product => 
                        <tr key = {product._id}>
                            <td>{product.Category}</td>
                            <td>{product.Name}</td>
                            <td>LKR {product.Price}</td>
                            <td>LKR {product.Discount}</td>
                            <td>
                            <button className="btn btn-edit"
                                onClick = {() => {
                                    this.props.setProductToBeUpdated(product)
                                }}
                            ><FontAwesomeIcon className="fontAwesomeIcon" icon={faEdit} /> Edit</button>
                            <button className = "btn btn-delete"
                                onClick = {() => {
                                    this.props.deleteProduct(product._id, product.Name)
                                }}
                            > <FontAwesomeIcon className="fontAwesomeIcon" icon={faTrashAlt} />  Delete</button></td>
                        </tr>
                        )
                      
                  )
                  :
                  (
                    <tr>
                        <td>NO DATA</td>
                </tr>
                  ) 
                }
                
            </tbody>
        </table>
        </div>
      )
  }
}

export default ProductsTable;