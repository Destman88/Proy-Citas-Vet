import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Agregando Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar Form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="col-sm-12 col-md-5 m-2">
      <h2 className="d-flex justify-content-center">Seguimiento Pacientes</h2>
      <p className="d-flex justify-content-center">
        Añade Pacientes y Adminístralos
      </p>
      <form onSubmit={handleSubmit} className="bg-white p-3 rounded-3 shadow">
        {error && (
          <Error>
            <p className="m-0 p-2 fw-bold text-white ">
              Todos los campos son obligatorios
            </p>
          </Error>
        )}
        <div className="form-floating my-2">
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label htmlFor="mascota">Nombre Mascota</label>
        </div>
        <div className="form-floating my-2">
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="form-control"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
          <label htmlFor="propietario" className="">
            Nombre Propietario
          </label>
        </div>
        <div className="form-floating my-2">
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="">
            Email
          </label>
        </div>
        <div className="form-floating my-2">
          <input
            id="alta"
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <label htmlFor="alta" className="">
            Alta
          </label>
        </div>
        <div className="my-2">
          <label htmlFor="sintomas" className="form-label">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas de la mascota"
            className="form-control"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            rows={5}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary bg-gradient"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
