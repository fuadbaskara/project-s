const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'lib',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#009696',
      '@font-size-base': '13px',
      '@error-color': '#f16a70',
      '@btn-danger-bg': '#f16a70',
      '@btn-danger-border': '#f16a70',
      '@form-item-margin-bottom': '1em',
      '@table-padding-vertical': '10px',
      '@table-padding-horizontal': '10px',
    },
  }),
);
