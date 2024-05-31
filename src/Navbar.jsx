import './Navbar.css';


export default function Navbar({setSearchBy}){

  let searchObj = {
    searchby: "city",
    value: ""
  };

  let formSubmit = (event) =>{
      event.preventDefault();
      setSearchBy(searchObj);
  };

  let selectOptions = (event)=> {
      searchObj.searchby = event.currentTarget.selectedOptions[0].value;
      // console.log(searchObj.searchby);
  };

  let inpSearch = (event)=>{
    searchObj.value = event.target.value;
    // console.log(searchObj.value);
  };

  return (
      // <nav className="navbar navBar" >

      <div className="navbar container-fluid navBarContainer ps-5 pe-5 shadow-lg mt-1" >
        
        <h1 className="navbar-brand text-white" style={{fontSize: "2rem"}}>Weather App</h1>

        <form onSubmit={formSubmit}>

            <div className="input-group ">

                <select className="form-select text-bg-dark " style={{width: "7rem"}} onClick={selectOptions} >            
                    <option value="City" >City</option>
                    <option value="Country">Country</option>
                    <option value="Area">Area</option>
                </select>

                <input type="search" name="search" id="search" className="form-control text-bg-dark text-white" placeholder='Search' style={{width: "20rem"}} onChange={inpSearch}/>
                
                <button type="submit" className="btn btn-outline-primary">Search</button>

            </div>
        </form>
        
      </div>
      
    // </nav>
  )
};