import React from 'react';

export  const sum=(a,b)=>{
    return a+b;
};


 const Sum = () => {

    return (
        <div>
            {sum(3,2)}
        </div>
    );
};

export default Sum;
