import { List } from "@/store/orm-models";

export default {
  forBook() {
    return ({ id }) =>
      List.query()
        .where("bookIds", bookIds => bookIds.includes(id))
        .get();
  }
};
