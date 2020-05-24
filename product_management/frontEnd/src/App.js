import React from 'react';
import './App.css';
import './asserts/css/app.css'
import './asserts/css/elements.css'
import './asserts/css/table.css'
import AddProductForm from './components/AddProductForm';
import ProductsTable from './components/ProductsTable';
import { doGet, doPost, doPut, doDelete } from './utils/apiRequests';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        data : [],
        editData : []
      }
  }

  //hook
  componentDidMount(){
    this.getAll();
  }

  createProduct = async (data) => {
    const response = await doPost("/addProduct", data)
    if (response.success) {
      this.getAll();
    }
  }

  updateProduct = async (data) => {
    const response = await doPut("/updateProduct", data)
    if (response.success) {
      this.setState({
        editData: null
      })
      this.getAll();
    }
  }

  async getAll(){
    const response = await doGet("/products", {})
    this.setState({
      data: response.data
    })
  }

  setProductToBeUpdated = data => {
    this.setState({
      editData:data
    })
  }

  deleteProduct = async (id, name) => {
    var option = window.confirm('Do you want to delete product: ' + name)
    if (option) {
      const response = await doDelete("/deleteProduct/" + id, {})
      this.getAll();
    }
  }

  render(){
      return(
          <div className= "container mt-4">
              <div className="row">
                  <div className = "col-6">
                      <AddProductForm
                        createProduct={this.createProduct}
                        updateProduct={this.updateProduct}
                        setForm={this.state.editData}/>
                  </div>
                  <div className="col-6">
                      <ProductsTable 
                        getData={this.state.data} 
                        setProductToBeUpdated={this.setProductToBeUpdated} 
                        deleteProduct={this.deleteProduct}/>
                  </div>
              </div>
          </div>
      )
  }
}

export default App;