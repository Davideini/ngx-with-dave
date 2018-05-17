const {
  Observable

} = require("rxjs/Rx");




const http = {
  get: (url) => Observable.create(observer => {

    console.log(url);

    setTimeout(() => {
      observer.error("sdajhdoiasdodsaij");

      observer.next({
        statusCode: 200,
        result: [
          1, 2, 4, 9
        ]
      });

      observer.complete("Dave");
    }, 1000)


  })
};




// http.get("www.google.com")

//   .subscribe(next => console.log(next),
//     error => console.error(error),
//     _ => console.warn("Complete")
//   );


const {
  catchError,
  map,
  switchMap,
  tap,
  debounceTime,
  filter
} = require("rxjs/operators");




http.get("www.google.com").pipe(



    map(resp => resp.result),
    // switchMap(result =>

    //   Observable.from(result).pipe(

    //     map(val => Math.sqrt(val)),
    //     filter(val => val > 2),
    //     catchError(err => console.error("ABC")),

    //   )


    // ),
    // map(val => Math.sqrt(val)),



    // debounceTime(1000),
    map(result => result.map(val => Math.sqrt(val))),
    // catchError(err => console.warn("123"))
    // tap(console.log)


  )

  .subscribe(a => {}, b = {}, c = {});
