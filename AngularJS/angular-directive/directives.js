myapp.directive("queryCheckbox", function($timeout){
	return {
		restrict: 'A',
		scope: {
			checkDatas: "=",
			checkResults: "=",
			inputStart: '=',
			inputEnd: '=',
			clickCallback: '&'
		},
		template: function(ele, attr){
			var htmlStr = '<div><div class="pull-left" ng-show="' + attr.hasCheckbox + '">'+
								'<div class="check-item" ng-repeat="item in checkDatas">'+
									'<label class="check-label flex-box">'+
										'<input type="checkbox" ng-model="item.isChecked" ng-click="updateSelected(item)"/>'+
										'<span class="icon icon-checkbox" ng-class="{\'selected\': item.isChecked}"></span>'+
										'<span class="icon-text ellipsis flex-content" title="{{item.'+attr.checkProp+'}}">{{item.' + attr.checkProp + '}}</span>'+
									'</label>'+
								'</div>'+
							'</div>'+
							'<div class="pull-left" ng-show="' + attr.hasInput + '">'+
								'<input type="text" class="xs-input" ng-model="inputStart" placeholder="最小" ' + (attr.hasCheckbox ? 'ng-focus="focusFun()"': '') + 'ng-blur="blurFun()" ng-keyup="keyupFun(0)"/>'+
								'<span>&nbsp;-&nbsp; </span>'+
								'<input type="text" class="xs-input" ng-model="inputEnd" placeholder="最大" ' + (attr.hasCheckbox ? 'ng-focus="focusFun()"': '') + 'ng-blur="blurFun()" ng-keyup="keyupFun(1)"/>'+
								'<span>&nbsp;' + (attr.inputUnit ? attr.inputUnit : '') + '</span>'+
							'</div></div>'; 
			return htmlStr;
		},
		link: function(scope, ele, attr){
			// scope.checkResults = [];
			if(attr.hasCheckbox == "true"){
				scope.initCheckData = angular.copy(scope.checkDatas);
			}
			scope.focusFun = function(){
				delete scope.checkResults;
				scope.checkDatas =  angular.copy(scope.initCheckData);
			};
			scope.blurFun = function(){
				if(!scope.inputStart && !scope.inputEnd){
					delete scope.checkResults;
					return;
				}
				scope.checkResults = [{
					startDesc: scope.inputStart ? scope.inputStart : "",
					endDesc: scope.inputEnd ? scope.inputEnd : ""
				}];
			};
			scope.keyupFun = function(isEnd){
				var p1, p2;
				if(isEnd){
					p2 = parseFloat(scope.inputEnd).toFixed(3);
					p2 = p2.substring(0, p2.toString().length - 1);
					scope.inputEnd = p2 >= 0 ? (/\.0?$/.test(scope.inputEnd) ? scope.inputEnd : p2.replace(/0$/, '').replace(/\.0$/, '')) : '';
				}else {
					p1 = parseFloat(scope.inputStart).toFixed(3);
					p1 = p1.substring(0, p1.toString().length - 1);
					scope.inputStart = p1 >= 0 ? (/\.0?$/.test(scope.inputStart) ? scope.inputStart : p1.replace(/0$/, '').replace(/\.0$/, '')) : '';
				}
			};
			scope.updateSelected = function(selectedItem){
				if(scope.inputStart|| scope.inputEnd){
					delete scope.checkResults;
					delete scope.inputStart;
					delete scope.inputEnd;
				}
				if(selectedItem.isChecked){
					if(!scope.checkResults){
						scope.checkResults = [];
					}
					scope.checkResults.push(selectedItem);
				} else {
					scope.checkResults.forEach(function(item,index){
						if(item[attr.checkProp] == selectedItem[attr.checkProp]){
							scope.checkResults.splice(index,1);
						}
					});
				}
				if(scope.clickCallback){
					$timeout(function(){
						scope.clickCallback({"selectedItem": selectedItem});
					});
				}
			}
		}
	};
})
.directive("radioCheck", function(){
	return {
		restrict: 'A',
		scope: {
			radioDatas: "=",
			radioResult: "="
		},
		template: function(ele, attr){
			var htmlStr = '<div class="check-item" ng-repeat="item in radioDatas"><div class="check-label" ng-click="radioChoose(item.value)" ng-class="{true: \'selected\', false: \'\'}[radioResult === item.value]"> <span class="icon icon-radio"></span> <span class="icon-text">{{item.text}}</span></div></div>';
			return htmlStr;
		},
		link: function(scope, ele, attr){
			scope.radioChoose = function(selectedItem){
				if(scope.radioResult === selectedItem){
					scope.radioResult = '';
				}else {
					scope.radioResult = selectedItem;
				}
			};
		}
	};
})
.directive("expandBtn", function(){
	return {
		restrict: 'E',
		scope: {
			expandFlag: "="
		},
		template: '<div class="expand-btn" ng-click="toggle()"><span class="icon-text">{{toggleText}}</span><span class="icon" ng-class="{true: \'icon-shrink\', false: \'icon-expand\'}[expandFlag]"></span></div>',
		link: function(scope, ele, attr){
			var $children = $(ele).siblings(".flex-content").children('.flex-box:not(:first-child)');
			if(scope.expandFlag){
				scope.expandFlag = true;
				scope.toggleText = "收起"
				$children.css("display", "flex");
			} else {
				scope.expandFlag = false;
				$children.hide();
				scope.toggleText = "展开"
			}
			scope.toggle = function(){
				scope.expandFlag = !scope.expandFlag;
				if(scope.expandFlag){
					scope.toggleText = "收起";
					$children.css("display", "flex");
				}else {
					scope.toggleText = "展开";
					$children.hide();
				}
			}
		}
	};
})
.directive('tabActive', function(){
	return {
		restrict: 'A',
		scope: {
			currentTab: '='
		},
		link: function(scope,ele,attr){
			$(ele).on('click','li', function(){
				$(this).addClass('active').siblings().removeClass('active');
				scope.currentTab = $(this).text();
				scope.$apply();
			});
		}
	}
})
/*收藏指令：注入commonservice, 调收藏接口，成功后dom变化*/
.directive('collect', ['commonService', function(commonService){
	return {
		restrict: 'A',
		scope: {
			isCollect: '=',
			collectId: '@'
		},
		link: function(scope, ele, attr){
			var $ele = $(ele);
			$ele.click(function(e){
				var data = {
					objectId: scope.collectId,
					objectType: attr.collectType
				};
				commonService.collect({}, data, function(res){
					if(res.success){
						if(scope.isCollect){
							scope.isCollect = 0;
						}else {
							scope.isCollect = 1;
						}
					}
				});
			});
		}
	}
}])
.directive("offScroll", function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(){
			$(window).off("scroll");
		}
	};
})
.directive('detailScroll', function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, ele, attr){
			var $ele = $(ele);
			var $content = $ele.siblings();
			var $section = $content.find('.section-item');
			var tabHeight = parseInt($ele.height());
			$(window).on("scroll", function(){
				if($ele[0].getBoundingClientRect().top <= 0){
					$ele.addClass('detail-tab');
					var scrollTop = $(window).scrollTop();
					for(var i=0; i < $section.length; i++) {
						var $item = $section.eq(i);
						var itemOffsetTop = parseInt($item.offset().top);
						var itemHeight = $item.height() + parseInt($item.css("margin-bottom"));
						if(scrollTop >= (itemOffsetTop - tabHeight) && scrollTop < (itemOffsetTop + itemHeight - tabHeight)){
							$ele.find("li").removeClass('active').eq(i).addClass('active');
						}
					}
				}
				if($content[0].getBoundingClientRect().top > tabHeight){
					$ele.removeClass('detail-tab');
				}
			});
			$ele.on("click", 'li', function(){
				var index = $(this).index();
				var itemOffsetTop = parseInt($section.eq(index).offset().top);
				var scrollHeight;
				if($ele.hasClass('detail-tab')){
					scrollHeight = itemOffsetTop - tabHeight;
				} else {
					scrollHeight = itemOffsetTop - tabHeight * 2;
				}
				$(window).scrollTop(scrollHeight);
			});
		}
	}
})
.directive("imgViewer", function(){
	return {
		restrict: 'A',
		scope: true,
		priority: 999,
		link: function(scope, ele, attr){
			new Viewer(document.getElementById(attr.id), {url: 'data-original'});
		}
	};
})
.directive("repeatViewer", function(){
	return {
		scope: {
			lastIndex: '@',
		},
		link: function(scope, ele, attr){
			if(scope.lastIndex == "true"){
				if(document.getElementById(attr.containerId).viewClass){
					document.getElementById(attr.containerId).viewClass.destroy();
				}
				document.getElementById(attr.containerId).viewClass = new Viewer(document.getElementById(attr.containerId), {
					url: 'data-original'
				});
			}
		}
	};
})
.directive('polySelect', function($timeout){
	return{
		restrict: 'A',
		replace: false,
		scope: {
			optionData: '=',
			selectedData: '=',
			inputStart: '=',
			inputEnd: '=',
			selectedCallback: '&'
		},
		template: function (ele, attr){
			var htmlStr = '<div class="select-box">' +
							'<input '+ (attr.notReadonly ? '': ' readonly ') + 'class="md-input select-input" ng-click="showSelect()" ng-blur="blurFun()" placeholder="' + attr.placeHolder + '" ng-model="selectedData.'+ attr.optionText + '" />'+
							'<ul class="select-option" ng-show="isSelect" ng-mousedown="$event.preventDefault();">'+
								'<li ng-show="' + (!(!attr.defaultOption || !attr.placeHolder))+ '" select-code="0" ng-click="select(\'0\')" ng-class="{\'selected\': selectedData.' + attr.optionId +'=== \'0\'}">'+ attr.placeHolder +'</li>'+
								'<li ng-repeat="item in optionData" select-code="{{item.'+attr.optionId+'}}" ng-class="{\'selected\': selectedData.'+ attr.optionId +'=== item.'+ attr.optionId +'}" ng-click="select(item);$event.stopPropagation();">{{item.'+ attr.optionText +'}}</li>'+
							'</ul>'+
						'</div>';

			return htmlStr;
		},
		link: function(scope, ele, attr){
			scope.selectedData  =  scope.selectedData || {};
			scope.isSelect = false;
			//有默认选项显示默认选项,以placeholder作为默认项的文本; 无选项只显示placeholder，无默认选中项
			if(attr.defaultOption){
				if(attr.placeHolder){   
					scope.selectedData={};                    //默认请选择选项
					scope.selectedData[attr.optionId] = "0";
					scope.selectedData[attr.optionText] = attr.placeHolder;
				}else{
					scope.selectedData=angular.copy(scope.optionData[0]);  //默认第一个选项
				}
			}
			scope.blurFun = function(){
				scope.isSelect = false;
			};
			scope.showSelect = function(){
				if(scope.inputStart){
					delete scope.inputStart;
				}
				if(scope.inputEnd){
					delete scope.inputEnd;
				}
				scope.isSelect = !scope.isSelect;
			};
			scope.select = function(optionItem){
				if(optionItem == "0"){
					scope.selectedData = {};
					scope.selectedData[attr.optionId] = "0";
					scope.selectedData[attr.optionText] = attr.placeHolder;
				}else {
					scope.selectedData= angular.copy(optionItem);
				}
				$(ele).find('input')[0].blur();
				if(scope.selectedCallback){
					$timeout(function(){
						scope.selectedCallback({'selected': scope.selectedData});
					});
				}
			};
//			$(document).on("click", function(){
//				if(scope.isSelect){
//					scope.isSelect = false;
//					scope.$apply();
//				}
//			});
//			$(ele).find('.select-box').on('click', function(e){
//				e.stopPropagation();
//			});
		}
	}
}).directive('multiLevelSelect', function($timeout){
    return{
        restrict: 'A',
        replace: false,
        scope: {
            optionData: '=',   //Array, [attr.firstLevelProp: value, subList: [{attr.optionId: value, attr.optionText: value}]]
            selectedData: '=',
            blurCallback: '&',
            planItem: "=",
            planObj: '=',
            selectedCallback: '&'
        },
        template: function (ele, attr){
            var htmlStr = '<div class="select-box">' +
                '<input '+ (attr.notReadonly ? '': ' readonly ') + 'class="md-input select-input" ng-click="showSelect()" ng-blur="blurFun()" placeholder="' + attr.placeHolder + '" ng-model="selectedData.'+ attr.optionText + '" />'+
				'<ul class="select-option multi-select" ng-show="isSelect" ng-mousedown="$event.preventDefault();">' +
					'<li class="first-level" ng-show="' + (!(!attr.defaultOption || !attr.placeHolder))+ '" select-code="0" ng-click="select(\'0\')" ng-class="{\'selected\': selectedData.' + attr.optionId +'=== \'0\'}">'+ attr.placeHolder +'</li>'+
					'<li class="first-level" ng-repeat="firstLevel in optionData" ng-show="firstLevel.subList && firstLevel.subList.length > 0">' +
						'<span ng-click="toggleSub($event)">{{firstLevel.' + attr.firstLevelProp + '}}</span>' +
						'<ul>' +
							'<li class="ellipsis" ng-repeat="subItem in firstLevel.subList" select-code="{{subItem.'+ attr.optionId + '}}"  title="{{subItem.' + attr.optionText + '}}" ng-class="{\'selected\': selectedData.'+ attr.optionId +'=== subItem.'+ attr.optionId +'}"  ng-click="select(subItem);$event.stopPropagation();">{{subItem.' + attr.optionText + '}}</li>'
						'</ul>'
					'</li>' +
				'</ul>'
                '</div>';

            return htmlStr;
        },
        link: function(scope, ele, attr){
            scope.selectedData  =  scope.selectedData || {};
            scope.isSelect = false;
            //有默认选项显示默认选项,以placeholder作为默认项的文本; 无选项只显示placeholder，无默认选中项
            if(attr.defaultOption){
                if(attr.placeHolder){
                    scope.selectedData={};                    //默认请选择选项
                    scope.selectedData[attr.optionId] = "0";
                    scope.selectedData[attr.optionText] = attr.placeHolder;
                }else{
                    scope.selectedData=angular.copy(scope.optionData[0]);  //默认第一个选项
                }
            }
            scope.blurFun = function(){
                scope.isSelect = false;
                if(scope.blurCallback){
                    if(scope.planItem) {
                        $timeout(function(){
                            scope.blurCallback({"planItem": scope.planItem, "planObj": scope.planObj});
                        });
                    }else {
                        $timeout(function(){
                            scope.blurCallback();
                        });
                    }
                }
            };
            scope.toggleSub = function(e){
				$(e.target).next().toggle();
			};
            scope.showSelect = function(){
                scope.isSelect = !scope.isSelect;
            };
            scope.select = function(optionItem){
                if(optionItem == "0"){
                    scope.selectedData = {};
                    scope.selectedData[attr.optionId] = "0";
                    scope.selectedData[attr.optionText] = attr.placeHolder;
                }else {
                    scope.selectedData= angular.copy(optionItem);
                }
                $(ele).find('input')[0].blur();
                if(scope.selectedCallback){
                    $timeout(function(){
                        scope.selectedCallback();
                    });
                }
            };
//			$(document).on("click", function(){
//				if(scope.isSelect){
//					scope.isSelect = false;
//					scope.$apply();
//				}
//			});
//			$(ele).find('.select-box').on('click', function(e){
//				e.stopPropagation();
//			});
        }
    }
}).directive('imgScroll', ['$timeout', function($timeout){
	return {
		restrict: 'A',
		scope:true,
		link: function(scope, ele, attr){
			$timeout(function(){
				var $ul = $(ele).find(".img-container ul");
				var $li = $ul.children();
				var $left = $(ele).find('.icon-left');
				var $right = $(ele).find('.icon-right');
				if($li.length > 4){
					var averWidth = $li.eq(0).outerWidth(true);
					var ulWidth = $li.eq(0).outerWidth(true) * $li.length;
					$ul.width(ulWidth);
					$right.on('click', function(){
						$left.css('color', '#333').attr('disabled',false);
						var currentLeft = parseInt($ul.css('left')) - (averWidth * 4);
						$ul.animate({left: currentLeft},1000);
						if(Math.abs(currentLeft) <(ulWidth - averWidth * 4)){
							$(this).css('color', '#333').attr('disabled', false);
						}else {
							$(this).css('color', '#999').attr('disabled',true);
						}
					});
					$left.on('click', function(){
						$right.css('color', '#333').attr('disabled',false);
						var currentLeft = parseInt($ul.css('left')) + (averWidth * 4);
						$ul.animate({left: currentLeft}, 1000);
						if(currentLeft >= 0){
							$(this).css('color', '#999').attr('disabled', true);
						}else {
							$(this).css('color', '#333').attr('disabled', false);
						}
					});
				}else {
					$left.hide();
					$right.hide();
				}
			})
		}
	};
}]).directive('polyPagination', function(){
	return {
		restrict: 'EA',
		scope: {
			pageInfo: '=',
			pageCallback: "&"
		},
		template: '<ul class="poly-pagination clearfix pull-right" ng-if="pageInfo.totalPage && pageInfo.totalPage > 1">' +
					    '<li ng-class="{\'disabled\': pageInfo.currentPage == 1}" class="prevPage" ng-click="getCurrent(\'prev\')">'+
					   		'<span class="prev-trangle"></span>上一页'+
					    '</li>'+
					    '<li ng-repeat="page in showPages track by $index" ng-click="getCurrent(page);" ng-class="{\'active\': pageInfo.currentPage == page, \'ignore\': page==\'...\'}">{{page}}</li>'+
					    '<li ng-class="{\'disabled\': pageInfo.currentPage == pageInfo.totalPage}" class="nextPage" ng-click="getCurrent(\'next\')">下一页<span class="next-trangle"></span></li>'+
					'</ul>',
		link: function(scope, ele, attr){
			getShowPages();
			function getShowPages(){
				var totalNum = parseInt(scope.pageInfo.totalPage);
				var current = parseInt(scope.pageInfo.currentPage);
				scope.showPages = [];
				if(totalNum > 0 && totalNum <= 9){
					for(var i = 1; i <= totalNum; i++){
						scope.showPages.push(i);
					}
				}else{
					if((current-2-1 > 1) && (totalNum -current - 2　> 1)){
						scope.showPages = [1,'...', current-2, current -1, current, current+1, current+2, "...", totalNum];
					}else if(current <= 4){
						scope.showPages = [1,2,3,4,5,6,7,"...", totalNum];
					}else if(current >= totalNum - 3 && current <= totalNum){
						scope.showPages = [1, "...", totalNum-6, totalNum-5, totalNum-4, totalNum-3, totalNum-2, totalNum-1, totalNum]
					}else {
						return;
					}
				}
			}
			scope.getCurrent = function(page){
				if(scope.pageInfo.currentPage == page || page == "..."){
					return;
				}else {
					if(page == 'prev'){
						if(scope.pageInfo.currentPage == 1){
							return;
						}
						scope.pageInfo.currentPage = scope.pageInfo.currentPage - 1;
					}else if(page == 'next'){
						if(scope.pageInfo.currentPage == scope.pageInfo.totalPage){
							return;
						}
						scope.pageInfo.currentPage = scope.pageInfo.currentPage + 1;
					} else {
						scope.pageInfo.currentPage = page;
					}
				}
				scope.pageCallback();
			};
			scope.$on('changePage', function(){
				getShowPages();
			});
		}
	};
})
.directive('polyShare', function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, ele, attr){
			var $qq = $(ele).find('.qq');
			var $wechat = $(ele).find('.wechat');
			$qq.click(function(){
				var share = new SimpleShare({
					url: attr.shareUrl,
					title: attr.shareTitle,
					content: attr.shareContent,
					pic: attr.sharePic
				});
				share.qq();
				return;
			});
			var share = new SimpleShare({
				url: attr.shareUrl,
				title: attr.shareTitle,
				content: attr.shareContent,
				pic: attr.sharePic
			});
			share.weixin(function(qrcode){
				var $img = $('<div class="wechat-code"></div>');
				$img.css('background', 'url('+ qrcode + ') no-repeat center');
				$img.css('background-size', '100%');
				$wechat.append($img);
			});
		}
	};
})
.directive('compareFolder', function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, ele, attr){
			var $ele = $(ele);
			$ele.click(function(){
				if($ele.hasClass("folder")) {
					$(ele).removeClass('folder').closest("tr").nextUntil('tr.type-row').show();
				}else {
					$(ele).addClass('folder').closest("tr").nextUntil('tr.type-row').hide();
				}
			});
		}
	}
})
.directive('mouseScroll', function(){
	return {
		restrict: 'A',
		scope: {
			scrollCallback:'&',
		},
		link: function(scope, ele, attr){
			var eventName = 'wheel';
			var div = document.createElement("div");
			var $child = $(ele).children('.projects-content');
			eventName = ('onwheel' in div) ? 'wheel' : (('onmousewheel' in div) ? 'mousewheel' : 'DOMMouseScroll');
			$(ele).on(eventName, function(e){
				$child.stop();
				var initialEvent = e.originalEvent;
				var mouseDir, currentPos, contentSize, containerSize;
				if(attr.dir == "updown"){
					currentPos = parseInt($child.css('top'));
					contentSize = $child.outerHeight(true);
					containerSize = $(ele).outerHeight();
				}else {
					currentPos = parseInt($child.css('left'));
					contentSize = $child.outerWidth(true);
					containerSize = $(ele).outerWidth();
				}
				if(contentSize<= containerSize){
					return;
				}
				switch (eventName){
					case 'wheel': 
						mouseDir = initialEvent.deltaY < 0 ? 'up': 'down';
						break;
					case 'mousewheel':
						mouseDir = initialEvent.wheelDelta < 0 ? 'down' : 'up';
						break;
					case 'DOMMouseScroll': 
						mouseDir = initialEvent.detail < 0 ? 'up' : 'down';
						break;
				}
				if(mouseDir == 'up'){
					if(currentPos >= 0){
						return;
					}
					e.preventDefault();
					currentPos = currentPos + parseInt(attr.step);
					if(currentPos >= 0){
						currentPos = 0;
					}
				}else{
                    if(Math.abs(currentPos) >= (contentSize - containerSize)){
                       return;
                    }
                    e.preventDefault();
					currentPos = currentPos - parseInt(attr.step);
					if(Math.abs(currentPos) >= (contentSize - containerSize)){
						currentPos = - (contentSize - containerSize);
					}
				}
				if(attr.dir == 'updown'){
					$child.animate({'top': currentPos + 'px'});
				}else {
					$child.animate({'left': currentPos + 'px'});
				}
			});
		}
	}
});
myapp.filter('filterImg',function(){
	return function(data, param, type){
        var newArr = [];
		if(angular.isArray(data)) {
            data.forEach(function(item, index){
                if(item.fileCode == param){
                    newArr.push(item);
                }
            });
		}
		if(type){
			return newArr.length;
		}else {
			return newArr;
		}
	}
})
.filter('addUnit', function(){
	return function(data, unit){
		if(data && unit){
			return data + unit;
		}else{
			return data;
		}
	};
})
.filter('fileFilter', function(){
	return function(data, suffix){
		var fileReg = new RegExp('(\\.'+ suffix +')$');
		console.log(fileReg);
		var result = fileReg.test(data);
		return result;
	};
})
.filter('changeUrl', function(){
	return function(urlLoc, type){
		var newUrl = urlLoc;
//		1是大图, 0 是小图
		switch(type){
			case 1:
				newUrl = '/attachment/cover/' + urlLoc;
				break;
			case 0:
				newUrl = '/attachment/' + urlLoc;
				break;
			case 3:
			    newUrl = '/attachment/original/' + urlLoc;
			    break;
		}
		return newUrl;
	}
});
