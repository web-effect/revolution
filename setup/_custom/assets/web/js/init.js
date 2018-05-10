Extra={}
/**********************************************************************************************/
//##################################		FANCYBOX
/**********************************************************************************************/
$.fancybox.defaults.focus=false;
$.fancybox.defaults.autoFocus=false;
$.fancybox.defaults.hash=false;
$.fancybox.defaults.afterLoad = function(f){
	if(this.$content.find('form, .ajaxchunk').length>0){f.opts.touch=false;f.current.opts.touch=false;}
	var storage_data = f.$lastFocus.data();
	if(typeof(ajaxchunk)!=='undefined'&&this.$content){
		var popup = this.$content;
		popup.find('.ajaxchunk').each(function(){
			var chunkname = $(this).attr('id').replace('ajaxchunk_','');
			if(ajaxchunk.storage[chunkname].config.mode!=='oncall')return true;
			if(popup.hasClass('loadable')){
				popup.addClass('loading');
				ajaxchunk.storage[chunkname].config.afterLoad=function(content,name,storage){
					popup.removeClass('loading');
				};
			}
			ajaxchunk.storage[chunkname].data=$.extend({},ajaxchunk.storage[chunkname]._data);
			ajaxchunk.addData(chunkname,storage_data);
			$(this).html('');
			ajaxchunk.load(chunkname);
		});
	}
	var form = f.$lastFocus.parents('form');
	var __form = this.$content.find('form');
	if(form.length>0&&__form.length>0){
		$(':input',form).each(function(){
			$('[name="'+$(this).attr('name')+'"]',__form).val($(this).val());
		});
	}
};


/**********************************************************************************************/
//##################################		OWL-CARUSEL
/**********************************************************************************************/
Extra.slider={};
Extra.slider.selector = '.owl-carousel';
Extra.slider.setTo=function(context){
	$(Extra.slider.selector,context).each(function(){
		var params = $(this).data();
		var carusel = $(this).owlCarousel(params);
	});
};
$(function(){Extra.slider.setTo($(document));});




/**********************************************************************************************/
//##################################		FORMS
/**********************************************************************************************/
Extra.forms={};
Extra.forms.yaID=null;
Extra.forms.inSubmitting=false;
Extra.forms.afterLoad = function(content,name,storage){
	if(content.find('form.success').length>0&&Extra.forms.yaID&&storage['ya_target']&&typeof(window['yaCounter'+Extra.forms.yaID])=='object'){
		window['yaCounter'+Extra.forms.yaID].reachGoal(storage['ya_target']);
	}
};
Extra.forms.formatBytes = function(bytes,decimals){
	if(bytes == 0) return '0 Bytes';
	var k = 1024,
		dm = decimals || 2,
		sizes = ['байт', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'Еб', 'Зб', 'Йб'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

$(function(){
	$(document).on(
		'submit',
		'form:not(.ajch-disable)',
		function(e){
			var result = true;
			if(typeof(ajaxchunk)!=='undefined')result = ajaxchunk.submitForm($(this),{afterLoad:Extra.forms.afterLoad});
			if(result){
				if(Extra.forms.inSubmitting)return false;
				Extra.forms.inSubmitting=true;
				$(this).addClass('onsubmiting');
				$(this).find('button[type="submit"]').addClass('onsubmiting');
			}
			return result;
		}
	);
	
	$(function(){
		$(document).on('change input','form :input',function(e){
			$(this).parents('.error').removeClass('error');
		});
	});
	
	$(document).on(
		'change','.form-field.file input[type=file]',
		function(){
			var filename = $(this).val().replace(/.*\\/, "");
			if(this.hasAttribute("multiple")){
				var filenames=[];
				var total_size=0;var total_maxsize=$(this).data('total_maxsize');
				var size_style='';
				for (var i = 0; i < this.files.length; ++i){
					total_size+=this.files.item(i).size;
					filenames.push(this.files.item(i).name);
				}
				filename = filenames.join(", ");
				if(total_size>0){
					if(total_maxsize&&total_size>total_maxsize)size_style='color:red;text-decoration:underline;font-weight:bold;';
					filename+='. Общий размер файлов: <span style="'+size_style+'">'+formatBytes(total_size)+'</span>';
				}
			}
			$(this).parents(".file").first().find('.filename').html(filename);
		}
	);
});


/**********************************************************************************************/
//##################################		EXPANDER
/**********************************************************************************************/
var Extra.expander={};
Extra.expander.selector = '.expander';
Extra.expander.expandedClass = 'expanded';
Extra.expander.outsideClose=function(e){
	if($(e.target).is(e.data.expander)||$(e.target).closest(e.data.expander).length>0||$(e.target).is(e.data.target)||$(e.target).closest(e.data.target).length>0){
		Extra.expander.outsideHandle(e.data.expander,e.data.target);
		return true;
	}
	Extra.expander.toggle(e.data.expander,false);
};
Extra.expander.outsideHandle = function(el,target){$('body').one('click',{expander:el,target:target},function(e){Extra.expander.outsideClose(e);});};
Extra.expander.getTarget = function(el){
	var context=false;
	if(el.data('parent'))context=el.parents(el.data('parent'));
	return el.data('target')?$(el.data('target'),context):el.next();
};
Extra.expander.toggle = function(el,state){el.add(Extra.expander.getTarget(el)).toggleClass(Extra.expander.expandedClass,state);};
Extra.expander.setTo = function(context){
	context.on('click',Extra.expander.selector,function(e){
		if($(this).css('pointer-events')=='none')return true;
		if($(this).hasClass(Extra.expander.expandedClass))Extra.expander.toggle($(this),false);
		else{
			if($(this).data('group')){
				$(Extra.expander.selector+'[data-group="'+$(this).data('group')+'"]').each(function(){Extra.expander.toggle($(this),false);});
			}
			Extra.expander.toggle($(this),true);
			if($(this).data('closeOutside'))Extra.expander.outsideHandle($(this),Extra.expander.getTarget($(this)));
		}
		e.preventDefault();
	});
};
$(function(){Extra.expander.setTo($(document));});




/**********************************************************************************************/
//##################################		TABS
/**********************************************************************************************/
var Extra.tabs={};
Extra.tabs.scrollOffset = 50;
Extra.tabs.selectors = {'cmp':'.tabs','nav':'.tabs-nav','btn':'.tabs-nav a','link':'.tab-link','tab':'.tab'};
Extra.tabs.activate = function(btn){
	cmp = btn.parents(Extra.tabs.selectors.cmp);
	btns = cmp.find(Extra.tabs.selectors.btn);
	tabs = cmp.find(Extra.tabs.selectors.tab);
	btns.removeClass('active');tabs.removeClass('active');btn.addClass('active');
	tabs.filter(btn.attr('href')).addClass('active');
	Extra.tabs.afterActivate(btn);
};
Extra.tabs.afterActivate = function (btn){
	cmp = btn.parents(Extra.tabs.selectors.cmp);
	tabs = cmp.find(Extra.tabs.selectors.tab);
	var content = tabs.filter(btn.attr('href'));
	content.find('.ajaxchunk').each(function(){Extra.tabs.loadContent($(this));});
};
Extra.tabs.loadContent = function(wrapper){
	if(typeof(ajaxchunk)==='undefined')return false;
	if(wrapper.data('loaded'))return false;
	var uid = wrapper.attr('id').replace('ajaxchunk_','');
	ajaxchunk.storage[uid].config.afterLoad=function(c,n,s){ wrapper.data('loaded',true);};
	ajaxchunk.load(uid);
};
Extra.tabs.setTo = function(context){
	$(Extra.tabs.selectors.cmp,context).each(function(){
		btns = $(this).find(Extra.tabs.selectors.btn);
		btns.on('click',function(e){
			Extra.tabs.activate($(this));
			e.preventDefault();
		});
		
		var active_tab = btns.first();
		if(location.hash){
			var hash_tab = btns.filter('[href="'+location.hash+'"]');
			if(hash_tab.length>0){
				active_tab=hash_tab;
				$('html, body').animate({ scrollTop: active_tab.offset().top-Extra.tabs.scrollOffset},1000);
				location.hash=false;
			}
		}
		active_tab.trigger('click');
	});
	
	links = context.find(Extra.tabs.selectors.link);
	links.on('click',function(e){
		btn = context.find(Extra.tabs.selectors.btn+'[href="'+$(this).attr('href')+'"]');
		if(btn.length>0){
			if(!btn.hasClass('active'))btn.trigger('click');
			$('html, body').animate({ scrollTop: btn.offset().top-Extra.tabs.scrollOffset},1000);
			e.preventDefault();
		}
	});
};
$(function(){Extra.tabs.setTo($(document));});




/**********************************************************************************************/
//##################################		Extra.grouping
/**********************************************************************************************/
Extra.Extra.grouping={};
Extra.grouping.defaults={
	groupTpl:'<div class="group"><div class="title"></div><ul class="items"></ul></div>'
};
Extra.grouping.selectors={
	'cmp':'.grouping',
	'group_label':'.title',
	'group_items':'.items',
	
};
Extra.grouping.setTo=function(context){
	var selectors=Extra.grouping.selectors;
	$(selectors.cmp,context).each(function(){
		return Extra.grouping.setToEl(this);
	});
};
Extra.grouping.setToEl=function(el){
	if($(el).data('initialized'))return true;
	var selectors=Extra.grouping.selectors;
	var config = $.extend({},Extra.grouping.defaults,$(el).data());
	var $el = $(el);
	
	var groups={};
	var $childs=$el.children();
	$childs.each(function(){
		if(!$(this).data('group'))return true;
		if(!groups[$(this).data('group')])groups[$(this).data('group')]={label:$(this).data('group-label'),items:[]};
		groups[$(this).data('group')].items.push(this);
	});
	
	var __$el = $();
	for(var gk in groups){
		if(!groups.hasOwnProperty(gk))continue;
		var $group=$(config.groupTpl);
		$group.find(selectors.group_label).html(groups[gk].label);
		$group.find(selectors.group_items).append(groups[gk].items);
		__$el = __$el.add($group);
	}
	
	$el.replaceWith(__$el);  
	$el.data('initialized',true);
};
$(function(){
	Extra.grouping.setTo($(document));
});




/**********************************************************************************************/
//##################################		OTHER
/**********************************************************************************************/
$(function(){
	
});