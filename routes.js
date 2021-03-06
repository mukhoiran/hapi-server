const routes = [
   {
       method: 'GET',
       path: '/',
       handler: (request, h) => {
           return 'Homepage';
       },
   },
   {
       method: '*',
       path: '/',
       handler: (request, h) => {
           return 'Page can not access with that method';
       },
   },
   {
       method: 'GET',
       path: '/about',
       handler: (request, h) => {
           return 'About page';
       },
   },
   {
       method: '*',
       path: '/about',
       handler: (request, h) => {
           return 'Page can not access with that method';
       },
   },
   {
       method: '*',
       path: '/{any*}',
       handler: (request, h) => {
           return 'Page not found';
       },
   },
];

module.exports = routes;