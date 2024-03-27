
"use client"

import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

import BusinessList from '@/app/_Components/BusinessList';

function BusinessByCategory({params}) {

  const [businessList,setBusinessList] = useState([]);

  useEffect(()=>{
    console.log(params);
    params&&getBusinessList()
  },[params])


  const getBusinessList=()=>{
    GlobalApi.getBusinessByCategory(params.category).then(resp=>{
      console.log(resp);
      setBusinessList(resp?.businessLists);
    })
  }
  return (
    <div >
      <BusinessList businessList = {businessList} title={params.category}/>
    </div>
  )
}

export default BusinessByCategory