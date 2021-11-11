import {FACTORY_ADDRESS, YETI_SWAP_SUB_GRAPH_URL} from "./constants";

const query = `
	query {
		pangolinFactory(id: "${FACTORY_ADDRESS}") {
			totalVolumeUSD
			totalLiquidityUSD
		}
	}
`;

export async function getTotalStats() {
  const req = await fetch(YETI_SWAP_SUB_GRAPH_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query}),
  });

  const {
    data: {
      pangolinFactory: {totalLiquidityUSD, totalVolumeUSD},
    },
  } = await req.json();

  return {
    totalLiquidityAVAX: totalLiquidityUSD,
    totalVolumeAVAX: totalVolumeUSD,
  };
}
