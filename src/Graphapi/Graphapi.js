import React from 'react';
import { gql, useQuery } from '@apollo/client';
const ALL_PETS = gql`
query {
  allPets {
    type
    breed
    name
    age
    gender
    associatedNgoId
    associatedNgo {
      country
      city
      ngoId
      name
      email
      phone
    }
  }
}
`

const graphapi = ()=>{
    const { loading, error, data } = useQuery(ALL_PETS);
    console.log(loading,error,data);
    return(
        <div>
        </div>
    );
}

export default graphapi;