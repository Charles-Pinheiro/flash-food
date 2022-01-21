const oi = async () => {
  const { TomTom } = require("tomtom-lib");

  const tomtom = new TomTom("PSAvTwD8gEzcTOVHomChaD93ZMiMkgIa");
  let data = {
    street: "Av. das Figueiras",
    district: "St. Comercial",
    number: 329,
    city: "Sinop",
    state: "MT",
    cep: "78550-000",
  };
  const t = await tomtom.geocoding(data);

  console.log(t);
};

oi();
