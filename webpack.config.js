/**
 * For configuration details and customization options, see:
 * https://github.com/uniwebcms/site-content-collector/blob/main/docs/webpack-config.md
 */
import { configHost } from "@uniwebcms/site-content-collector";
import webpack from "webpack";

export default async (_, argv) => configHost(webpack, argv, import.meta.url);
