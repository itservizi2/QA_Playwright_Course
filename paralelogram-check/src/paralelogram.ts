import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

export function isParallelogramSides(lengths: number[]): boolean {
  if (lengths.length !== 4) {
    throw new Error("Trebuie introduse exact 4 laturi.");
  }

  for (const length of lengths) {
    if (typeof length !== "number" || Number.isNaN(length)) {
      throw new Error("Toate valorile trebuie sa fie numere.");
    }
    if (length <= 0) {
      throw new Error("Laturile trebuie sa fie mai mari decat 0.");
    }
  }

  // Intr-un paralelogram, laturile opuse sunt egale.
  return lengths[0] === lengths[2] && lengths[1] === lengths[3];
}

function parseLengths(rawInput: string): number[] {
  const parts = rawInput.split(",").map((value) => value.trim());

  if (parts.some((value) => value.length === 0)) {
    throw new Error("Format invalid. Foloseste exact 4 valori separate doar prin virgula.");
  }

  if (parts.length !== 4) {
    throw new Error("Introdu exact 4 valori separate prin virgula (ex: 10,5,10,5).");
  }

  const lengths = parts.map((value) => Number(value));

  if (lengths.some((value) => Number.isNaN(value))) {
    throw new Error("Toate valorile trebuie sa fie numere (ex: 10,5,10,5).");
  }

  return lengths;
}

export async function runParallelogramCli(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  try {
    while (true) {
      const answer = await new Promise<string>((resolve) => {
        rl.question("Introdu 4 lungimi de laturi separate prin virgula (sau 'exit'): ", resolve);
      });

      if (answer.trim().toLowerCase() === "exit") {
        console.log("Aplicatia s-a incheiat.");
        break;
      }

      try {
        const lengths = parseLengths(answer);
        const isParallelogram = isParallelogramSides(lengths);

        if (isParallelogram) {
          console.log("Da, aceste laturi pot forma un paralelogram.");
        } else {
          console.log("Nu, aceste laturi nu pot forma un paralelogram.");
        }
        break;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Eroare necunoscuta.";
        console.error(`Eroare: ${message}`);
      }
    }
  } finally {
    rl.close();
  }
}

if (require.main === module) {
  void runParallelogramCli();
}