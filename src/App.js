import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid my-5'>
            <div className='row'>
                <div className='col-sm-6 mx-auto'>
                    <h2 className='text-center text-white shadow-lg p-3'>Today's Plan</h2>
                    <div className='row'>
                        <div className='col-9'>
                        <input type="text" className='form-control' placeholder='Write your plan' />
                        </div>
                        <div className='col-2'>
                            <button className='btn btn-warning px-5 fw-bold'>Add</button>
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