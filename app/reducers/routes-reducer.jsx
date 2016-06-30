const defaultRoutes=[
  {
    path:'/',
    text:'Gonderiler',
    name:'posts',
    index:true
   },
  {
    path:'/statistics',
    text:'Istatistikler',
    name:'statistics'
  },
  {
    path:'/discussions',
     text:'Tartismalar',
      name:'discussions'
  }
];

export default (state=defaultRoutes, action) =>{

  return state;
};
