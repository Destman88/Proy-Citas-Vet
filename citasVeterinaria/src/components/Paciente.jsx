import Swal from "sweetalert2";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;
  const handleEliminar = () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "Esta acción no se podrá revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire(
          "Borrado!",
          "El registro ha sido borrado correctamente",
          "success"
        );
      }
    });
  };

  return (
    <div className="card mt-2 border-0 shadow">
      <div className="card-body">
        <p className="fw-bold">
          Nombre: {""} <span className="fw-normal">{nombre}</span>
        </p>
        <p className="fw-bold">
          Propietario: {""} <span className="fw-normal">{propietario}</span>
        </p>
        <p className="fw-bold">
          Email: {""} <span className="fw-normal">{email}</span>
        </p>
        <p className="fw-bold">
          Fecha: {""} <span className="fw-normal">{fecha}</span>
        </p>
        <p className="fw-bold">
          Síntomas: {""} <span className="fw-normal">{sintomas}</span>
        </p>
        <div>
          <button
            type="button"
            className="btn btn-primary bg-gradient"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1 bg-gradient"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
