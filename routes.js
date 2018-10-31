import { Dish } from "./models";

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return Dish.findAll();
    }
  }
];
export default routes;
