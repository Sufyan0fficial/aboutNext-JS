import { type SchemaTypeDefinition } from "sanity";
import { blogs } from "./Blogs";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs],
};
