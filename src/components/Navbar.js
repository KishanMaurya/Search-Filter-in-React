import React, { Component } from 'react';
import Information from './Information';
class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.first_name.toLowerCase().includes(this.state.search.toLowerCase()) || data.last_name.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card shadow-sm border-0">
                <div className="card-body">
                <table className="table table-bordered table-hover">
                        
                        <tbody>
                            <tr>
                                <th>{data.id}</th>
                                <th>{data.email}</th>
                                <th>{data.first_name}</th>
                                <th>{data.last_name}</th>
                                <th>
                                <img src={data.avatar} height="100" 
                                        width="100" alt=""/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
      )
    })

    return (
      <div>
        <div className="row bg-dark">
          <div className="col-md-12">
            <h1 className="font-weight-bold text-white text-center">Search In Table Using React</h1>
          </div> 
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8">
              <div className="card shadow-sm border-0">
                  <div className="card-body">

                  </div>
                  <input type="text" onChange={(e)=>this.searchSpace(e)}
                          className="form-control" placeholder="Search by id,name,email"/>
                  {items}
                </div>
              </div>
          </div>
    </div>
    )
  }
}

export default App;