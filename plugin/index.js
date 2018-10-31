import good from "good";
import goodConsole from "good-console";
const config = [
  {
    register: good,
    options: {
      reporters: {
        reporter: goodConsole,
        args: [{ log: "*", request: "*", ops: "*", error: "*" }]
      }
    }
  }
];
export default config;
