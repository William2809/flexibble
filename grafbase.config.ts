import { auth, config, graph } from "@grafbase/sdk";

const g = graph.Standalone();

export default config({
	graph: g,
});
