type Realizare =
  | "satisfacatoare"
  | "bune"
  | "excelente"
  | "sport"
  | "voluntar";

function calculeazaBursa(curs: number, realizare: Realizare): number {
  // Optional safety guard for invalid years
  if (curs < 1 || curs > 4) return 0;
  if (curs === 1) return 0;

  switch (realizare) {
    case "satisfacatoare":
      return curs === 2 ? 500 : curs === 3 ? 650 : 800;
    case "bune":
      return curs === 2 ? 650 : curs === 3 ? 650 : 800;
    case "excelente":
      return 800;
    case "sport":
      return 800;
    case "voluntar":
      return 1000;
    default:
      return 0;
  }
}

export { calculeazaBursa };
export type { Realizare };
