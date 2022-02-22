if ((personas.lenght) > 0) {
    document.body.innerHTML =
    <div class="table-responsive">
      <table>
        <tr>
          <th>"Nombre"</th>
          <th>"Apellido"</th>
          <th>"Edad"</th>
        </tr>
        personas.forEach(persona = {
        <tr>
          <td> persona.nombre </td>
          <td> persona.apellido </td>
          <td> persona.edad </td>
        </tr>
        })
      </table>
    </div>
  } else {
    <h3>"No se encontraron datos"</h3>
  }