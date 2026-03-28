import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { z } from "zod";

export const sideLengthSchema = z
  .number()
  .refine((value) => !Number.isNaN(value), {
    message: "Toate valorile trebuie sa fie numere (ex: 10,5,10,5).",
  })
  .positive("Laturile trebuie sa fie mai mari decat 0.");

export const sideLengthsSchema = z
  .array(sideLengthSchema)
  .length(4, "Introdu exact 4 valori separate prin virgula (ex: 10,5,10,5).");

export function isParallelogramSides(lengths: number[]): boolean {
  if (lengths.length !== 4) {
    throw new Error("Trebuie introduse exact 4 laturi.");
  }

  for (const length of lengths) {
    if (Number.isNaN(length)) {
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

  const lengths = parts.map((value) => Number(value));

  const parseResult = sideLengthsSchema.safeParse(lengths);
  if (!parseResult.success) {
    throw new Error(parseResult.error.issues[0]?.message ?? "Eroare de validare.");
  }

  return parseResult.data;
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

// Run CLI if not in a test environment
// Jest and other test runners define these globals
const isJestTest = typeof jest !== 'undefined' || typeof afterEach !== 'undefined';

if (!isJestTest) {
  void runParallelogramCli();
}