angular.module("ionic-monthpicker").run(["$templateCache", function($templateCache) {$templateCache.put("monthpicker.html","<div><div class=\"row\"><div class=\"col col-25\" ng-click=\"changeYear(-1)\"><i class=\"ion ion-chevron-left\"></i></div><div class=\"col col-50 text-center\"><strong>{{ selection.year }}</strong></div><div class=\"col col-25 text-right\" ng-click=\"changeYear(1)\"><i class=\"ion ion-chevron-right\"></i></div></div><div ng-repeat=\"month in monthLabels\"><div class=\"row\" ng-if=\"$index % 3 == 0\"><div class=\"col col-33 text-center\" ng-click=\"selectMonth($index)\">{{ monthLabels[$index] }}</div><div class=\"col col-33 text-center\" ng-click=\"selectMonth($index + 1)\">{{ monthLabels[$index + 1] }}</div><div class=\"col col-33 text-center\" ng-click=\"selectMonth($index + 2)\">{{ monthLabels[$index + 2] }}</div></div></div></div>");}]);