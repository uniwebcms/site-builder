/**
 * For configuration details and customization options, see:
 * https://github.com/uniwebcms/site-content-collector/blob/main/docs/webpack-config.md
 */
import { getConfig } from "@uniwebcms/site-content-collector/webpack";
import webpack from "webpack";

export default async (_, argv) => getConfig(webpack, argv, import.meta.url);
