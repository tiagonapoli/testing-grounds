const path = require('path');
const execa = require('execa')

const generateTypescriptTypes = async () => {
  const schema = path.join(__dirname, 'graphql.schema.json');
  await generateSchemaIntrospection(path.join(__dirname, 'graphql', 'schema.graphql'), schema);
  const generatedFiles = await executeCodegen({
    schema,
    generates: {
      [path.join('generated', 'graphqlTypes.ts')]: {
        plugins: ['typescript']
      }
    }
  });

  console.log(generatedFiles);
};

generateTypescriptTypes();
