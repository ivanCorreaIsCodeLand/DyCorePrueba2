import React, { useState } from "react";
import './Formulario.css';

interface FormData {
  nombre: string;
  email: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ nombre: "", email: "" });
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.email.trim()) {
      setError("Por favor completa todos los campos");
      return;
    }

    setError("");
    setSubmittedData(formData);
    setFormData({ nombre: "", email: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {submittedData && (
        <div className="submitted-data">
          <h3>Datos ingresados:</h3>
          <p><strong>Nombre:</strong> {submittedData.nombre}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
