const {MostrarFiltrados} = require('./index.js');


test("genera HTML correctamente", () => {
  const html = MostrarFiltrados();
  expect(html).toContain("El señor de las moscas");
  expect(html).toContain("William Golding");
});
