const Checkboxes = ({onCheckBoxChange,selectedGender}) =>{
    return(       
        <div className="signup--checkboxes">                    
            <div className="checkbox--label">                
                <input type="checkbox" className="checkbox--style" name="male" id="male" 
                    
                    checked={selectedGender === "male"} 
                    onChange={() => onCheckBoxChange("male")}
                />
                <label htmlFor="male"
                className={` ${selectedGender === "male"?"selected":""}`}>Male
            
                </label>
            </div>
            <div className="checkbox--label">
                      <input type="checkbox" className="checkbox--style" name="female" id="female"
                    
                    checked={selectedGender === "female"} 
                    onChange={() => onCheckBoxChange("female")} 
                />  
               <label htmlFor="female"
                className={` ${selectedGender === "female"?"selected":""}`}>Female
       
                </label>     
            </div>
        </div> 
    )
}

export default Checkboxes;