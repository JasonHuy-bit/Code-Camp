import { defineConfig } from '@sanity-codegen/cli'

export default defineConfig({
  schemaPath: './sanity/schema.ts',
  outputPath: './types/sanity.generated.ts',
})
