<style>
	.breadcrumbs{ }
	.breadcrumbs a{ }
	.breadcrumbs span{ }
</style>
<div class="breadcrumbs">
	<$'pdoCrumbs'|snippet:[
		'showHome'=>1
		,'showCurrent' => 1
		,'outputSeparator'=>'&nbsp;&nbsp;&bull;&nbsp;&nbsp;'
		,'tpl'=>'@INLINE <a href="<$$uri$>"><$$menutitle$></a>'
		,'tplCurrent'=>'@INLINE <span class="active"><$$menutitle$></span>'
		,'tplWrapper'=>'@INLINE <$$output$>'
		,'to'=>$resource?:$modx->resource->id
	]$>
</div>