import React from 'react';

class CountryList extends React.Component
{
    mycountry={
        myarray:["India","Canada","Australia"]
    }

    render(){
        return(
            <div>
                <select>
                    {this.mycountry.myarray.map(data=>(
                        <option>{data}</option>
                    ))}
                </select>
            </div>
        );
            
        
    }


}

export default CountryList;