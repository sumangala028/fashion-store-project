import React from 'react';
import { validateDiscount } from '../utils/validations';

class AddProductForm extends React.Component{
  constructor(){
      super();

      this.state = {
          _id : "",
          Category : null,
          Name : "",
          Price : "",
          Discount : "",
          isEdit : false,
          saveStatus: false,
          error: null,
      }
  }

  productChange = event => {
      const{ name, value} = event.target;
      
      this.setState({
          [name] : value,
          error: null
      })
  }

  onErrorCloseClick = () => {
    this.setState({ error: null });
  }

  productSubmit = event => {
    if (!this.state.Category) {
        return this.setState({ error: "Select Category "})
    }
    if (!this.state.Name) {
        return this.setState({ error: "Enter product name "})
    }
    if (!this.state.Price) {
        return this.setState({ error: "Enter product price"})
    }
    if (!this.state.Discount) {
        return this.setState({ error: "Enter product discount "})
    }

    console.log(this.state)
    if (!validateDiscount(this.state.Price, this.state.Discount)) {
        return this.setState({ error: "Incorrect product discount amount"})
    }

    if(!this.state.isEdit){
        let data = {
          isEdit: this.state.isEdit,
          Category: this.state.Category,
          Name : this.state.Name,
          Price : this.state.Price,
          Discount: this.state.Discount
        }
        this.props.createProduct(data);
    }
    else{
        const data = {
            isEdit: this.state.isEdit,
            _id: this.state._id,
            Category: this.state.Category,
            Name : this.state.Name,
            Price : this.state.Price,
            Discount: this.state.Discount
        } 

        this.props.updateProduct(data);
    }

    this.setState({
            _id : "",
            Category : "Sample",
            Name : "",
            Price : "",
            Discount : "",
            isEdit : false,
            saveStatus: false,
            error: null,
        })
  }

  //hook
  componentWillReceiveProps(props){
      if(props && props.setForm && props.setForm._id != null){
          this.setState({
            isEdit:true,
            _id:props.setForm._id,  
            Category: props.setForm.Category,
            Name : props.setForm.Name,
            Price : props.setForm.Price,
            Discount: props.setForm.Discount
          })
      }
  }

  render(){
      const { isEdit, saveStatus, error } = this.state;
      const title = isEdit ? "Update Product details" : "Add New Product";
      return(
         <>
            <h2> {title} </h2>

            {saveStatus && (
                <div className="alert-success">
                    Successfully saved!
                </div>
            )}

            {error && (
                <div className="alert-danger">
                <span className="closebtn" onClick={this.onErrorCloseClick}>&times;</span>
                    {error}
                </div>
            )}

             <div className="my-form-data">
             <label for="Category">Choose product category:</label>
                <select name="Category" onChange={this.productChange} id="Category">
                    <option selected={this.state.Category === "Dress" } value="Dress">Dress</option>
                    <option selected={this.state.Category === "Jewels" } value="Jewels">Jewels</option>
                    <option selected={this.state.Category === "Foot Wears" } value="Foot Wears">Foot wears</option>
                    <option selected={this.state.Category === "Bags" }value="Bags">Bags</option>
                </select>
             </div>
             <div className="my-form-data">
                 <label for = "name">Product Name : </label>
                 <input type="text" className="detail-form" placeholder="Enter the product code " 
                  onChange = {this.productChange}
                  name = "Name"
                  value = {this.state.Name}/>
                
             </div>

             <div className="my-form-data">
                 <label for = "price">ProductPrice : </label>
                 <input type="number" className="detail-form" placeholder="Enter the product price "
                  onChange = {this.productChange}
                  name = "Price"
                  value = {this.state.Price}/>
             </div>

             <div className="my-form-data">
                 <label for = "discount">Discount Price : </label>
                 <input type="number" className="detail-form" placeholder="Enter the product discount "
                  onChange = {this.productChange}
                  name = "Discount"
                  value = {this.state.Discount}/>
             </div>

             <div>
                <button type="submit" onClick={this.productSubmit} className="btn">{this.state.isEdit ? 'Update Product' : 'Save Product'}</button>
             </div>
         </>
      )

      
  }
}

export default AddProductForm;