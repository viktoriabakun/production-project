export enum BUILD_MODE {
    DEV = "development",
    PROD = "production"
}

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildOptions {
    mode: BUILD_MODE;
    isDev: boolean;
    paths: IBuildPaths;
    port: number;
}

export interface IBuildEnv {
    mode: BUILD_MODE;
    port: number
}
