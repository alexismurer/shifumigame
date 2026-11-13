export type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

export const RULES: [winner: Choice, verb: string, loser: Choice][] = [
  ["scissors", "cuts", "paper"],
  ["paper", "covers", "rock"],
  ["rock", "crushes", "lizard"],
  ["lizard", "poisons", "spock"],
  ["spock", "smashes", "scissors"],
  ["scissors", "decapitates", "lizard"],
  ["lizard", "eats", "paper"],
  ["paper", "disproves", "spock"],
  ["spock", "vaporizes", "rock"],
  ["rock", "crushes", "scissors"],
];

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function rulesFor(choices: string[]) {
  return RULES.filter(([w, , l]) => choices.includes(w) && choices.includes(l));
}

export function describeOutcome(a: string, b: string): string | null {
  const rule = RULES.find(([w, , l]) => (w === a && l === b) || (w === b && l === a));
  return rule ? `${capitalize(rule[0])} ${rule[1]} ${capitalize(rule[2])}` : null;
}
