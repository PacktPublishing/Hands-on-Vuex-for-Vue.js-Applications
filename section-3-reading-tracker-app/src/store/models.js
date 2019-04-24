import { Model } from "@vuex-orm/core";

export class Book extends Model {
  static entity = "books";

  static fields() {
    return {
      id: this.number(null),
      title: this.string(""),
      author: this.string(""),
      pageCount: this.number(null),
      publishedDate: this.string("")
    };
  }
}

export class List extends Model {
  static entity = "lists";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
      bookIds: this.attr([]),
      books: this.hasManyBy(Book, "bookIds")
    };
  }
}
