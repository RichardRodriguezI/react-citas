const Error = ( {mensaje} ) => {


    return ( 
     
            <div className="bg-red-700 text-white p-3 rounded-lg mt-5">
              <p  className="text-center">{mensaje}</p>
            </div>
     
            
     )
}
 
export default Error;