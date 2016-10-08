export default function(router) {
	router.map({
		'/index':{
			component:function(resolve) {
				require(["./components/index"],resolve)
			},
			subRoutes:{
				'/shouye':{
					component:function(resolve) {
						require(["./components/shouye"],resolve)
					}
				},
				'/hot':{
					component:function(resolve) {
						require(["./components/hot"],resolve)
					},
					subRoutes:{
						'/subhot/:id':{
							name:"subhot",
							component:function(resolve) {
								require(["./components/subhot"],resolve)
							}
						}
					}
				},
				'/set':{
					component:function(resolve) {
						require(["./components/set"],resolve)
					}
				}
			}
		},
		'/error':{
			component:function(resolve) {
				resolve({
					template:"<div>该页面未构建</div>"
				})
			}
		},
		'/detail1/:id/:pwd/:sr':{
			name:"detail1",
			component:function(resolve) {
				require(["./components/detail1"],resolve)
			}
		},
		'/login':{
			component:function(resolve) {
				require(["./components/login"],resolve)
			}
		},
		'/setcolor':{
			component:function(resolve) {
				require(["./components/setcolor"],resolve)
			}
		}

	})
}