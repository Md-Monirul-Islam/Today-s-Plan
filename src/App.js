import React, { Component } from 'react'
import Plan from './Plan';

class App extends Component {
  state = {
    items : [],
    text : '',
  }
  HandleOnChange = (e) => {
    this.setState({text: e.target.value})
  }
  HandleAdd = (e) => {
    if(this.state.text !== ''){
      const items = [...this.state.items,this.state.text];
      this.setState({items:items,text:''})
    }
  }
  HandleDelete = (id) => {
    console.log('deleted',id)
    const OldItems = [...this.state.items]
    console.log('OdlItmes',OldItems);
    const items = OldItems.filter((element,i) => {
      return i!==id;
    })
    this.setState({items: items})
    console.log('Item',items)
  }
  render() {
    return (
      <div>
        <div className='container-fluid my-5'>
            <div className='row'>
                <div className='col-sm-6 mx-auto shadow-lg'>
                    <h2 className='text-center text-white p-3'>Today's Plan</h2>
                    <div className='row'>
                        <div className='col-9'>
                        <input type="text" className='form-control' placeholder='Write your plan' value={this.state.text} onChange={this.HandleOnChange} />
                        </div>
                        <div className='col-2'>
                            <button className='btn btn-warning px-5 fw-bold' onClick={this.HandleAdd}>Add</button>
                        </div>
                        <div className='container-fluid'>
                          <ul className='list-unstyled row m-5'>
                            {
                              this.state.items.map((value,i) => {
                                return <Plan key={i} id={i} value={value} sendData={this.HandleDelete} />
                              })
                            }
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default App;