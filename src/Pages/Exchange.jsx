import React from 'react'

import { useGetExchagesQuery  } from '../Service/cryptoApi'

const Exchange = () => {

  const { data } = useGetExchagesQuery();
  console.log(data);

  return (
    <div>Exchange</div>
  )
}

export default Exchange