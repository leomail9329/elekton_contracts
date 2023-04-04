/** Declaration file generated by dts-gen */

declare module "solc" {
    export const features: {
        importCallback: boolean
        legacySingleInput: boolean
        multipleInputs: boolean
        nativeStandardJSON: boolean
    }

    export function compile(input: any, readCallback: any): any

    export function license(...args: any[]): any

    export function loadRemoteVersion(versionString: any, cb: any): void

    export function semver(): any

    export function setupMethods(soljson: any): any

    export function version(...args: any[]): any

    export namespace lowlevel {
        const compileCallback: any

        const compileMulti: any

        const compileSingle: any

        function compileStandard(input: any, callbacks: any): any
    }
}
