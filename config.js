// Pokemon Strategy ($POKEVAULT) — edit this file only.
// PAD: "pumpfun" or "stonkfun" (PAIR = the quote asset as StonkFun writes it)
// WALLET: the public strategy wallet that collects the fees (shows a live SOL balance on the site)
// LOG: every card bought. Each entry fills the next case in the 3D vault and adds a row to the ledger.
//   { date:"2026-09-30", card:"Umbreon Gold Star", set:"POP Series 5", grader:"PSA", grade:10, gradeWord:"GEM MT",
//     cert:"12345678", paid:"$1,250", tx:"<solana tx signature, optional>", img:"cards/umbreon.jpg (optional card photo, portrait)" }
window.PKMN_CFG = {
  NAME: "Pokemon Strategy",
  TICKER: "POKEVAULT",
  CA: "7JFat4J57AYxmxtb7nZfeVv45vzDAnosutiaGoADbDyg",
  CHAIN: "solana",
  PAD: "stonkfun",
  PAIR: "CARDS",
  X: "https://x.com/pokestrategyapp",
  BUY: "",
  CHART: "",
  WALLET: "",
  LOG: []
};
