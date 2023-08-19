//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Delgetstei ajillah controller
var uiController = (function(){

})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sanhuutei ajillah controller
var FinanceController = (function(){

})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Programmiin holbogch controller
var AppController = (function(uiController, FinanceController){
      
      var ctrlAddItem = function(){
            
            //1 oruulah ugugdliig delgetsnees olj avna


            //2 olj avsan ugugdluudee sanhuugiin controllerd damjuulj tend hadgalna

            //3 olj avsan ugudluudee webeeree tohiroh hesegt gargana

            //4 tusuviig tootsoolno

            //5 etsesiin uldegdel tootsoog delgetsend gargana
      }
      document.querySelector('.add__btn').addEventListener('click', function(){

            ctrlAddItem();
      })
      document.addEventListener('keypress', function(event){
            if(enter.keycode === 13 || event.which === 13){
                  ctrlAddItem();

            }

      })
})(uiController, FinanceController);
