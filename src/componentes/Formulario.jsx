import { useState, useEffect, useId} from "react";
import Error from "./Error";

const Formulario = ( props ) => {


    const {pacientes, setPacientes, paciente,setPaciente} = props;





     const [nombre, setNombre] = useState('');
     const [propietario, setPropietario] = useState('');
     const [email, setEmail] = useState('');
     const [fecha, setFecha] = useState('');
     const [sintomas, setSintomas] = useState('');
     const [error, setError] = useState(false);



        // const id = useId();
    



      useEffect( () => {
        if(Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
      }, [paciente] )
    const retomarId = () => {
 
        const fecha = Date.now().toString(36)

        return fecha;  
    }

 
     const handleSubmit = (e) => {
        
            e.preventDefault();

            // Validacion de formulario
            if( [ nombre,propietario,email,fecha, sintomas ].includes('') ) {
                setError(true);

                setTimeout(() => {
                    setError(false);
                  }, 3000);
                return;
                        } 
           
                  

                        const pacientesObj = {
                            nombre,
                            propietario,
                            email,
                            fecha,
                            sintomas,
                          
                        }
                        if ( paciente.id ) {
                            // Editando Registro
                            pacientesObj.id = paciente.id
                            const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? pacientesObj : pacienteState )

                            setPacientes(pacientesActualizado);
                            setPaciente({});
                        } else {
                            // Nuevo registro 
                            pacientesObj.id = retomarId();
                            setPacientes([...pacientes, pacientesObj])
                        }
                        
     
                        // Reiniciar el formulario
                        setNombre("")
                        setPropietario("")
                        setEmail("")
                        setFecha("")
                        setSintomas("")


                    }
                    
            
        return ( 
        <>
    
        <div className="md:w-1/2 lg:w-2/5 ">
        <h2 className="font-black text-3xl text-center">  Seguimiento 
        Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {""}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
      
              <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                 <input 
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2  w-full p-2  mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
              </div>


              <div className="mb-5">
              <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">Nombre De Propietario</label>
                 <input 
                        id="Propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2  w-full p-2  mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
              </div>
        

              <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                 <input 
                        id="email"
                        type="tel"
                        placeholder="Email Contacto Propietario"
                        className="border-2  w-full p-2  mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
              </div>


              <div className="mb-5">
              <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Alta</label>
                 <input 
                        id="date"
                        type="date" 
                        className="border-2  w-full p-2  mt-2 placeholder-gray-400 rounded-md min-h-1"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
              </div>


              <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                 <textarea 
                        id="sintomas"
                        className="border-2  w-full p-2  mt-2 placeholder-gray-400 rounded-md min-h-1"
                        placeholder="Describe los sintomas "
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
              </div>
                
                <input type="submit" 
                       className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                       value={ paciente.id ? 'Editar Pacientes' : 'Agregar Paciente '  }
                />


                { error &&  <Error mensaje='Todos Los Campos Son Obligatorios'  /> }            

        </form>
    
        </div>
        </>
     );

} 
export default Formulario;