import React from 'react';

const EmployeesImage = (img_url) => {
  console.log(img_url);
  return(
    <div>
      <img src={img_url.img_url} alt="" className="img-thumbnail"/>
    </div>
  )
}

export default EmployeesImage;
