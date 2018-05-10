<?php
switch($modx->event->name)
{
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////				Установка занчений по умолчанию для ресурсов
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	case 'OnDocFormRender':
	{
		if ($mode == modSystemEvent::MODE_NEW && $parent_id=$_REQUEST['id'])
		{
			$parent_o = $modx->getObject('modResource',$parent_id,false);
			
			//Определяем шаблон соседних элементов
			$childs = $modx->getCollection('modResource',array('parent'=>$parent_id),false);
			if(!empty($childs))
			{
				$max_template = null;
				$max_template_count = 0;
				$ch_templates=array();
				foreach($childs as $child){$ch_templates[$child->template]+=1;}
				foreach($ch_templates as $ch_template=>$ch_template_count)
				{
					if($ch_template_count>$max_template_count)
					{
						$max_template = $ch_template;
						$max_template_count=$ch_template_count;
					}
				}
				if($max_template)$modx->controller->setProperty('template',$max_template);
			}
			
			//Тут можно утстанавливать поля по умолчанию в зависимости от родителя, шаблона родителя, положения сатурна в стрельце и тд.
			//if($parent_o->id==1)$modx->controller->setProperty('template',2); - дочерныие ресурсы для ресурса с id 1 будут с шаблоном 2
			//if($parent_o->template==2)$modx->controller->setProperty('hidemenu',1); - дочерныие ресурсы для ресурса с шаблоном 2 будут скрыты в меню
			//if($parent_o->template==4)$resource->set('alias','question-'.time()); - дочерныие ресурсы для ресурса с шаблоном 4 будут сразу иметь псевдоним сгенерированный по времени
		}
		break;
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////				Минификация HTML
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	case 'OnWebPagePrerender':
	{
		if($modx->resource->content_type!==1)return;
		$output = $modx->resource->_output;
		$output= preg_replace('|\s+|', ' ', $output);
		$modx->resource->_output = $output;
		break;
	}
}