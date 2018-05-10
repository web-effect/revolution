<div id="callback__popup" class='popup form _hidden'>
	<$*'!ajaxChunk'|snippet:['chunk'=>'Callback.form','name'=>'callback_p_form','formid'=>'cb_p','ya_target'=>'callback']*$>
</div>
<div id="feedback__popup" class='popup form _hidden'>
	<$*'!ajaxChunk'|snippet:['chunk'=>'Feedback.form','name'=>'feedback_p_form','formid'=>'fb_p','ya_target'=>'feedback']*$>
</div>



<$'!MinifyX'|snippet:[
	'minifyCss'=>1
	,'minifyJs'=>1
	,'cacheFolder'=>'/assets/web/_cache/min/'
	,'jsSources'=>''
	,'cssSources'=>''
	,'registerCss'=>'default'
	,'registerJs'=>'default'
]$>