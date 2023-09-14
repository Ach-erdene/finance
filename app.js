//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Delgetstei ajillah controller
var uiController = (function(){

      var DOMStrings = {
            inputType : '.add__type',
            inpuDesc : '.add__description',
            inputValue : '.add__value',
            addBtn : '.add__btn'


      };
      
      return{
            getInput : function(){
                  return {
                        type : document.querySelector(DOMStrings.inputType).value,
                        desc : document.querySelector(DOMStrings.inpuDesc).value,
                        value : document.querySelector(DOMStrings.inputValue).value,
                  };
            },getDOMStrings : function(){
                  return DOMStrings
            }

      };

})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sanhuutei ajillah controller
var FinanceController = (function(){
      var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
      }    
      var Expense = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
      }
      var data = {
            allItems : {
                  inc : [],
                  exp : []
            },
            totals : {
                  inc : 0,
                  exp : 0,
            }
      }


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
      
      var setUpEventListeners = function() {
            var DOM = uiController.getDOMStrings();
            document.querySelector(DOM.addBtn).addEventListener('click', function(){

                  ctrlAddItem();
            })
            document.addEventListener('keypress', function(event){
                  if(enter.keycode === 13 || event.which === 13){
                        ctrlAddItem();
      
                  }
            })

      };


      return{
            init : function(){
                  console.log('app ehellee');
                  setUpEventListeners();
                  
            }
      }
})(uiController, FinanceController);
