import {TOKEN_API_URL} from "./constants";


export async function getTotalStats() {
  const req = await fetch(`${TOKEN_API_URL}yts/total-stats`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  }).then((req) => req.json()).catch(() => ({
    totalLiquidityAVAX: 0,
    totalVolumeAVAX: 0,
  }));

  const {totalLiquidityUSD, totalVolumeUSD} = req;

  return {
    totalLiquidityAVAX: totalLiquidityUSD,
    totalVolumeAVAX: totalVolumeUSD,
  };
}

