import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import '../components/product/Product.scss';
import user1servicenow from '../components/product/amazonUser1.jpeg';
import user2servicenow from '../components/product/amazonUser2.jpeg';

const whichUser=(user)=> {
    if(user===1) {
        return user1servicenow;
    } else {
        return user2servicenow;
    }
}

const Homepage = () => {
    const [user,setUser] = useState(1);
    
    
        const HandleClickUser1=()=> {
        setUser(1);
        }
        const HandleClickUser2=()=> {
        setUser(2);
        }
    
    
   

    return (
        <>
        <button className="button1" onClick={HandleClickUser1}>User 1</button>
        <button className="button2" onClick={HandleClickUser2}>User 2</button>
        <div className="cust360div"> <h1 className="cust360">Customer <span className="span360">Dashboard</span></h1></div>
        <h1><img className="salesImg" src="data:image/png;base64,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" alt="" /></h1>
        {/* <div className="textC"><h1 className="h1C">Bringing Companies and Customers together!</h1></div> */}
        <ul className='circle-container'>
        
        <li className='listItem'><Product ID="32" className="product" imageSource="data:image/png;base64,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" productName = "Retial"/></li>
        <li className='listItem'><Product ID="34" className="product" imageSource="data:image/jpeg;base64,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" productName = "Prime Video"/></li>
        <li className='listItem'><Product ID="36" className="product" imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFqYNj969Jr1puSdkg6zdg6O_hYRHyemcag&usqp=CAU" productName = "Devices"/></li>
        <li className='listItem'><Product ID="35" className="product" imageSource="data:image/jpeg;base64,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" productName="Fresh"/></li>
        <li className='listItem'><Product ID="31" className="product" imageSource="data:image/png;base64,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"  productName = "AWS"/></li>
        <li className='listItem'><Product ID="33" className="product" imageSource="data:image/png;base64,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" productName = "Alexa"/></li>
        
        
        
        
        
        

        <li><img className="customer360image" src={whichUser(user)} /></li>
        
        </ul>
        </>
    );
}

export default Homepage;