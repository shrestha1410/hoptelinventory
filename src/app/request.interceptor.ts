import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
console.log('Request interceptor ',req);
// const newRequest=req.clone({
//    headers: req.headers.set('token', 'sdsbjhgdshfgsdgfsdgf28251') 
// })
//   return next(newRequest);

//for specific method
if(req.method=="POST"){
  const newRequest=req.clone({
   headers: req.headers.set('token', 'sdsbjhgdshfgsdgfsdgf28251') 
})
  return next(newRequest);
}
return next(req);
};
