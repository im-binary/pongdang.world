import axios from "axios";

const remote = {
  "pongdang.world": axios.create({ timeout: 30_000 }),
};

export default remote;
