interface Vehicle {
  model: string;
  year: number;
  broken: boolean;
}
interface Reportable {
  summary: () => string;
}

const oldCivic = {
  model: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = ({ model, year, broken }: Vehicle): void => {
  console.log(model, year, broken);
};
