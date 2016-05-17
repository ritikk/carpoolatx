angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.decorator('$exceptionHandler', ['$delegate', function() {
	return function(exception, cause) {
		$delegate(exception, cause);
		var data = {
	      type: 'angular',
	      url: window.location.hash,
	      localtime: Date.now()
	    };
	    if(cause)               { data.cause    = cause;              }
	    if(exception){
	      if(exception.message) { data.message  = exception.message;  }
	      if(exception.name)    { data.name     = exception.name;     }
	      if(exception.stack)   { data.stack    = exception.stack;    }
	    }

	  	console.error('exception', data);
  	};
}]);

