import React from 'react'
import '../css/style.scss'
import '../css/app.scss'
class Plan extends React.Component{
 

    setGender(event) {
        const checkbok = event.target.value ;
        console.log(checkbok)
        
      }


    handleSubmit = event => {
        
        event.preventDefault();
        const Json ={checkBox:event.target.value
        }
        console.log(Json);
    }

    render(){
        return(
           <div  className="plan-wrapper">
               <form id="form" className="box plan-box" onSubmit={this.handleSubmit}>
                    <table className="table">
                 
                    <thead>
                        <tr>
                            <th></th>
                            <th><div>Standard Plan</div></th>
                            <th><div>Premium  Plan</div></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th><abbr title="Position">General</abbr></th>
                            <th><i className="fas fa-check"  ></i></th>
                            <th><i className="fas fa-check"  ></i></th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th><abbr title="Position">Specialist</abbr></th>
                            <th> <i className="fas fa-times" ></i></th>
                            <th><i className="fas fa-check"></i></th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th><abbr title="Position">Physiotherapy</abbr></th>
                            <th><i className="fas fa-times" ></i></th>
                            <th><i className="fas fa-check" ></i></th>
                        </tr>
                    </tbody>  
                    <tbody >
                        <tr>
                            <th></th>
                            <th>
                            <label className="radio">
                            <input  onChange={this.setGender.bind(this)} type="radio"  name="plan" value="plan1"  ref={this.plan}/>
                                HK$0/Month
                             </label>
                            </th>
                            <th>
                            <label className="radio">
                            <input  onChange={this.setGender.bind(this)} type="radio" name="plan"  value="plan2" ref={this.plan2}/>
                                 HK$388/Month
                             </label>
                            </th>
                        </tr>
                    </tbody>   
                    </table>
                    <div className="row_btn">
                            <button className="btn" type="submit">Sumbit</button>
                    </div>
               </form>
           </div>
      
        )
    }
}
export default Plan;