import { Component } from 'react'
import Car from './Cars'
// import Welcome from '.components/Welcome';

    
class Mycars extends Component {

    addTenYear =() => {
        const updatedCars = this.state.cars.map((param) => {
            return param.year -= 10;
        })
        this.setState ({updatedCars})
    }        

    state = {
        cars:[
            {name: 'Toyota', color: 'Bleu', year: 1785 },
            {name: 'Renault', color: 'Rouge', year: 1885 },
            {name: 'Ford', color: 'Verte', year: 1895 },
            {name: 'Ford', color: 'Verte', year: 2026 },
        ]
    }
        getAge = year => {
            const currentYear = new Date().getFullYear();
            const age = currentYear - year;
        
            let ageCategory = ""; 
            if (age === 1){
                ageCategory = "Neuf";
            }   else if (age>1){
                ageCategory = "Occasion";
            }   else if (age <= 0){
                ageCategory = "a peine sortie d'usine"
            }
            // return `${age} ans (${ageCategory})`;
            if (age<=0) {
                return `tu le vois, tu le vois plus(${ageCategory})`    
            } else if  (age>0){
                return `${age} ans (${ageCategory})`    
            }

        }

    render() {

        return (
            <div>
                {/* <Welcome> */}
                    <p>test</p>
                {/* </Welcome> */}
                <h1>{this.props.title}</h1>
                <button onClick={this.addTenYear}></button>
                {
                    this.state.cars.map(({name, color, year}, index) =>{
                        return (
                            <div key={index}> 
                                {/* <Car  color={car.color} year={year - car.year + ' ans'}> {car.name} </Car>  */}
                                <Car  color={color} year= {this.getAge(year)}> {name} </Car> 
                            </div>
                        )

                    })
                }     
            </div>

        )
    }
}

export default Mycars