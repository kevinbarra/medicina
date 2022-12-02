import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [opcion, setOpcion] = useState(true)
  const [opcion2, setOpcion2] = useState(false)
  const [opcion3, setOpcion3] = useState(false)
  const horasInterface= [{hora:'10:00'},{hora:'11:00'},{hora:'12:00'},{hora:'13:00'}]
  const [horas, setHoras] = useState(horasInterface)
  
  const [reservas, setReservas] = useState([])
  const [temporal, setTemporal] = useState({
    nombre:"",
    area:"",
    fecha:"",
    hora:""
  })
  //Es para capturar datos del formulario
  //Ocurre cada que se altera un parte del formulario
  const handleChange = (event) => {
    
    let value = event.target.value;
    let name = event.target.name;
   
    //Guarda esos datos en una variable temporal

    setTemporal((prevalue) => {
      //Copia lo que ya tenia y sustituye lo de la parte del formulario que se esta modificando
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }
  const handleSubmit = () =>{
                //Copia las reservas que ya habian y agrega la nueva
    setReservas([...reservas, temporal])
    let x = temporal.hora
    let temp = [...horas]
    temp = temp.filter(word => word.hora != x);
    setHoras(temp)
    
    alert("Cita realizada")

    setOpcion(false); setOpcion2(true);
  }
  return (
      <>
      {opcion3 == false ? (<>
      
      <div className='card h-100 vh-100'>
        <div className='card-body text-center justify-content-center d-flex'>
          <div className='w-50 '>
            
            <div className='card' >
            <div className='card-body' >
            <img 
            src="https://cdn-icons-png.flaticon.com/512/8566/8566928.png"
            width="100"
            />
            <h1>Bienvenido al registro de citas medicas</h1>
              
              <br></br>
              <button onClick={()=> setOpcion3(true)} className='btn btn-primary'>Ingresar</button>
               </div> 
               </div>
          </div>
        </div>
      </div>
      </>):(<>
      
        <div  >
      <div className='App '>
     
      <h1>Administrador de citas</h1>
      
      
      {/*Cambiar de True a False */}
      <i>    </i>
      <button onClick={()=>{setOpcion(true); setOpcion2(false)}} type="button" class="btn btn-primary">Realizar citas</button>
      <i>    </i>
       <button onClick={()=>{setOpcion(false); setOpcion2(true)}} type="button" class="btn btn-secondary">Ver citas</button>
      </div>
      {/*Realizar Citas*/}
      <br></br>
      {/*Si esta en True enseña el codigo si no no enseña nada*/}
      {opcion == true ? (<div className='card  '>
        <div className='card-body justify-content-center d-flex'>
          <div className='w-75'>
          <h2>Realizar cita</h2>
          <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Nombre de la persona de la cita</label>
        <input onChange={handleChange} type="text" name='nombre' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Selecciona el area</label>
     <br />
        <select  name="area" onChange={handleChange}>
  <option value="Area1">Area 1</option>
  <option value="Area2" selected>Area 2</option>
  <option value="Area3">Area 3</option>
</select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Fecha de la cita</label>
        <input onChange={handleChange} type="text" name='fecha' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fecha" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Hora de la cita</label>
        <br />
        <select name="hora" onChange={handleChange}>
          {horas.map((item)=>(
            <option value={item.hora} selected>{item.hora}</option>
          ))}
</select>
      </div>
      <br></br>
    
      <button type="button" onClick={handleSubmit} class="btn btn-primary">Realizar cita</button>
      <br></br>
    
    </form>

            </div>
        </div>
      </div >):(<></>)}
      {/* Ver citas */}
      {opcion2 == true ? (<div className='card'>
     <div className='card-body'>
     <h2>Ver citas</h2>
     <h4>Reservas</h4>
     {reservas.map((item)=>{
        return <div className='card'>
                <div className='card-body'> 
                <h5 className='card-title'>{item.area}</h5>
              <h6 className='card-subtitle'>{item.nombre}</h6>
              <p className='card-text'>{item.fecha}<br></br> {item.hora}</p>
              
                </div>
              
          </div>
      })}
      </div>
     </div>):(<></>)}
    </div>

      </>)}
      </>
    );
}

export default App;
