import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "4pbtorlv",
    dataset: "afh-studios",
    title: "AFH Online",
    apiVersion: "2023-06-27",
    basePath: "/admin",
    plugins: [deskTool()],
});

export default config;
