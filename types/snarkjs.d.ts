
declare module "snarkjs" {
    export const groth16: {
        fullProve: any
        prove: any
        verify: any
    }

    export const powersOfTau: {
        beacon: any
        challengeContribute: any
        contribute: any
        convert: any
        exportChallenge: any
        exportJson: any
        importResponse: any
        newAccumulator: any
        preparePhase2: any
        truncate: any
        verify: any
    }

    export const r1cs: {
        exportJson: any
        info: any
        print: any
    }

    export const wtns: {
        calculate: any
        debug: any
        exportJson: any
    }

    export const zKey: {
        beacon: any
        bellmanContribute: any
        contribute: any
        exportBellman: any
        exportJson: any
        exportSolidityVerifier: any
        exportVerificationKey: any
        importBellman: any
        newZKey: any
        verify: any
    }
}
