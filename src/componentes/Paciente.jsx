import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { useState } from 'react';

const Paciente = ( { paciente, setPaciente, eliminarPaciente } ) => {
    const  { nombre, propietario, email, fecha, sintomas, id } = paciente;
    const [modal, setModal] = useState(false);

    const handleEliminar = () => {
            eliminarPaciente(id);
    }
    return ( 

        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normal-case ">{nombre}</span>
        </p>


        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
        <span className="font-normal normal-case ">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="font-normal normal-case ">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
        <span className="font-normal normal-case ">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
        <span className="font-normal normal-case ">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
        <button
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg "
        onClick={ () => setPaciente(paciente) }
        >Editar</button>
          <button className="button py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
          onClick={() => setModal(true)}>Eliminar</button>

            <PureModal
            header ="Eliminar Cita"
            footer={
                <div className='flex gap-9 '>
                <button className='bg-red-700 ml-4 text-white p-1' onClick={handleEliminar}>Eliminar</button>
                <button className='bg-indigo-700 text-white p-1'>Cancelar</button>
                </div>
            }
            isOpen={modal}
            closeButton="close"
            closeButtonPosition="bottom"
            onClose={() => {
                setModal(false);
                return true;
            }}
            >
            <p className='text-center'>¿Deseas Eliminar esta Cita? </p>
            </PureModal>
        </div>
         </div>
    
     );
}
 
export default Paciente;