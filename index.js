
module.exports = {
  'compilerOptions': {
    'rootDir': './src',
    'outDir': './dist',

    'module': 'ES6',
    'target': 'ES6',
    'moduleResolution': 'node',
    'sourceMap': true,
    'incremental': true,
    'tsBuildInfoFile': './cache/tsbuildinfo',

    'allowUnreachableCode': false,
    'allowUnusedLabels': false,
    'strict': true,
    'exactOptionalPropertyTypes': true,
    'noFallthroughCasesInSwitch': true,
    'noImplicitAny': true,
    'noImplicitOverride': true,
    'noImplicitReturns': true,
    'noImplicitThis': true,
    'noPropertyAccessFromIndexSignature': true,
    'noUncheckedIndexedAccess': false,
    'noUnusedLocals': true,
    'noUnusedParameters': true,
    'strictBindCallApply': true,
    'strictFunctionTypes': true,
    'strictNullChecks': true,
    'strictPropertyInitialization': true,
    'useUnknownInCatchVariables': true,
    'allowUmdGlobalAccess': false,
    'resolveJsonModule': true,

    'allowJs': false,
    'checkJs': false,

    'allowSyntheticDefaultImports': true,
    'esModuleInterop': true,

    'forceConsistentCasingInFileNames': true,
    'isolatedModules': true,

    'emitDecoratorMetadata': true,
    'experimentalDecorators': false,

    'jsx': 'react',

    'suppressImplicitAnyIndexErrors': false,
    'downlevelIteration': true,
    'skipLibCheck': true,
    'preserveSymlinks': true,
    'emitDeclarationOnly': true,
    'declaration': true,
    'declarationMap': true
  }
};
