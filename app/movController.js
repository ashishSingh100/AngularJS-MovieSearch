app.controller('movController', ['$scope', '$http','$q',

                                function ($scope, $http,$q) {

        $scope.submit = submit;
        $scope.model = {};
        $scope.getDetail=getDetail;
        $scope.truth=false;
                                    

        function submit(search) {

            $http.get('https://api.themoviedb.org/3/search/movie?api_key=30d94dfbb4e45d2617765e5ff9166f6a&query='+search).then(

                function (response) {
                    $scope.model.movie = response.data;
                    $scope.search = null;
                },
                function (response) {
                    $scope.model.movie = 'Error: No results found';
                }


            )
        };
                                    
                                    function getDetail(index){
                                        
                                        $scope.truth=true;
                                        for(i=0;i<$scope.model.movie.results.length;i++){
                                            
                                            if(i==index){
                                                
                                                $scope.model.details=$scope.model.movie.results[i];
                                                $scope.model.details.poster_path=$scope.model.details.poster_path.slice(1);
                                                 alert(model.details.poster_path);
                                                
                                            }
                                            
                                           
                                            
                                        }
                                      
                                        
                                    
                                    };





                }]);
