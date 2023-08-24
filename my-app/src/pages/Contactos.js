import React from "react";
import "./Contactos.css";
const Contactos = () => {
  return (
    <div style={{ display: "block" }}>
      <section id="contacto">
        <img src="./public/nosotros/nosotros2.jpg" alt="" />
        <h2>Contacto</h2>
        <p>Puedes ponerte en contacto con nosotros a través de...</p>

        <p>Telefono: 1123765433</p>
        <p>instagram: mobilephonesrepair</p>
        <p>Fax:16692001010@ fax.com</p>
      </section>
     <div style={{ display: "block" }}>
      <p>Quieres que te contactemos:</p>
      <label>
       <p>Nombre: <input name="myInput" /></p>
       <p>Apellido: <input name="myInput" /></p>
       <p>Tel: <input name="myInput" /></p>
       <p>Email: <input name="myInput" /></p>
      </label>
      <button>Enviar</button>
      </div>
   
    </div>
  );
};
export default Contactos;
