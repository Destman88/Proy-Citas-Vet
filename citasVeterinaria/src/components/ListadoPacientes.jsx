import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="col-sm-12 col-md-5 m-2">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="d-flex justify-content-center">Listado Pacientes</h2>
          <p className="d-flex justify-content-center">
            Administra tus Pacientes y Citas
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="d-flex justify-content-center">No hay pacientes</h2>
          <p className="d-flex justify-content-center">
            Comienza agregando pacientes y aparecerán en este lugar
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
