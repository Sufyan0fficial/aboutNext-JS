export interface DataType {
  title: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  text: string;
  slug: string;
}
