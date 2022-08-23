import React from 'react'


const Table = ({passValue}) => {



  return (
    <div>
      <table className="table table-hover" > 
        <thead className='thead-dark'>
            <tr>
                <th>Name</th>
                <th>age/Dob</th>
                <th>gender</th>
                <th>Contact Number</th>
                <th>address</th>
                <th>country</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
          {passValue.map((elm)=>{
        return (
            
            <tr>
            
                <td>{elm.name}</td>
                <td>{elm.dob}</td>
                <td>{elm.gender}</td>
                <td>{elm.mobile}</td>
                <td>{elm.address}</td>
                <td>{elm.country}</td>
                <td>{elm.email}</td>
            </tr>
            
        )  }
              ) }
             
        </tbody>
      </table>
    </div>
  )
}

export default Table
