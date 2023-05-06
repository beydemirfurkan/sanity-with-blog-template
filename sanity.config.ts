import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
    projectId: "sfzch8gd",
    dataset: "production",
    title: "/",
    apiVersion: "2023-05-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }

});