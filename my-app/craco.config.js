const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {

                '@layout-body-background': 'white',
                // '@layout-header-background': 'white',

                //Button
                '@btn-primary-bg': '#3F3D56',
                '@btn-primary-color': '#FFFFFF',

                '@btn-default-bg': '#F4F4F9',
                '@btn-default-color': '#3F3D56',
                '@btn-default-border': '#F4F4F9',

                '@btn-border-radius-base': '30px',

                //Other
                '@border-radius-base': '20px',
                '@text-color': '#3F3D56',
                '@primary-color': '#58D3A5',
                '@select-item-active-bg': 'rgba(88, 211, 165, 0.16)',
                '@input-bg': 'rgba(255, 255, 255, 0.01)',
                
                //Card
                '@card-radius': '50px',
                '@card-padding-base': '10px',
                
                //Table
                '@table-bg': '#F4F4F9',
                '@table-header-color': '#FFFFFF',
                '@table-header-bg': '#3F3D56',
                '@table-header-sort-bg': '#3F3D56',
                '@table-border-radius-base': '20px',
                '@table-header-sort-active-bg': '#3F3D56',
                '@table-fixed-header-sort-active-bg': 'hsv(0, 0, 96%)',

             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};